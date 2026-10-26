import { useState } from 'react'
import { PageHead } from '../Layout.jsx'
import { menus } from '../data.js'
import Dish from '../Dish.jsx'

export default function Menus() {
  const keys = Object.keys(menus)
  const [tab, setTab] = useState(keys[0])
  const m = menus[tab]
  return (
    <>
      <PageHead eyebrow="Menus" title="West African soul, contemporary comfort" />
      <section className="sec" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="tabs" role="tablist">
            {keys.map(k => <button key={k} role="tab" aria-selected={k === tab} className={k === tab ? 'on' : ''} onClick={() => setTab(k)}>{k}</button>)}
          </div>
          <div key={tab} className="fadein">
            <p className="msub">{m.sub}</p>
            {m.groups.map(([g, items]) => (
              <div key={g}>
                <h3 className="grp">{g}</h3>
                <div className="mgrid">
                  {items.map(([n, d]) => <Dish key={n} name={n} desc={d} />)}
                </div>
              </div>
            ))}
          </div>
          <p className="fine center">Menu is indicative; prices will be confirmed at launch. Please tell your server about any allergies. Alcohol is served to guests of legal age only.</p>
        </div>
      </section>
    </>
  )
}
