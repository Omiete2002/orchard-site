import { useEffect, useRef, useState } from 'react'
import { PageHead } from '../Layout.jsx'
import { menus } from '../data.js'
import Dish from '../Dish.jsx'

const keys = Object.keys(menus)
const slug = k => 'menu-' + k.toLowerCase().replace(/[^a-z]+/g, '-')

export default function Menus() {
  const [active, setActive] = useState(keys[0])
  const bar = useRef(null)
  const locked = useRef(false)

  // Highlight the tab of the section currently in view while scrolling
  useEffect(() => {
    const onScroll = () => {
      if (locked.current) return
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let cur = keys[0]
      keys.forEach(k => {
        const el = document.getElementById(slug(k))
        if (el && el.getBoundingClientRect().top <= 170) cur = k
      })
      setActive(atBottom ? keys[keys.length - 1] : cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep the active tab visible inside the horizontally scrollable bar (mobile)
  useEffect(() => {
    const b = bar.current?.querySelector('.on')
    if (b) bar.current.scrollTo({ left: b.offsetLeft - bar.current.clientWidth / 2 + b.clientWidth / 2, behavior: 'smooth' })
  }, [active])

  const go = k => {
    locked.current = true
    setActive(k)
    document.getElementById(slug(k))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => { locked.current = false }, 900)
  }

  return (
    <>
      <PageHead eyebrow="Menus" title="West African soul, contemporary comfort">
        Scroll through the full menu, or jump straight to a section.
      </PageHead>

      <div className="menubar" ref={bar}>
        <div className="tabs" role="tablist">
          {keys.map(k => (
            <button key={k} role="tab" aria-selected={k === active} className={k === active ? 'on' : ''} onClick={() => go(k)}>{k}</button>
          ))}
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 50 }}>
        <div className="wrap">
          {keys.map(k => {
            const m = menus[k]
            return (
              <section key={k} id={slug(k)} className="msec">
                <div className="mtitle">
                  <span className="eyebrow">{m.sub}</span>
                  <h2>{k}</h2>
                  <div className="orn" />
                </div>
                {m.groups.map(([g, items]) => (
                  <div key={g}>
                    <h3 className="grp">{g}</h3>
                    <div className="mgrid">
                      {items.map(([n, d]) => <Dish key={n} name={n} desc={d} />)}
                    </div>
                  </div>
                ))}
              </section>
            )
          })}
          <p className="fine center">Menu is indicative; prices will be confirmed at launch. Please tell your server about any allergies. Alcohol is served to guests of legal age only.</p>
        </div>
      </section>
    </>
  )
}
