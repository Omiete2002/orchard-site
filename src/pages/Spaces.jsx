import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { PageHead, Reveal } from '../Layout.jsx'
import { spaces, ambience } from '../data.js'

export default function Spaces() {
  const [view, setView] = useState(null)
  useEffect(() => {
    if (view === null) return
    const k = e => e.key === 'Escape' && setView(null)
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [view])
  const g = view === null ? null : ambience.gallery[view]
  return (
    <>
      <PageHead eyebrow="The Spaces" title="Four rooms, one home">
        Distinct but connected experiences, so you can choose the mood of your evening.
      </PageHead>
      <section className="sec">
        <div className="wrap">
          {spaces.map((s, i) => (
            <Reveal key={s.name}>
              <article className={`space ${i % 2 ? 'flip' : ''}`}>
                <div className={`plate photo tone-${s.tone}`} style={{ backgroundImage: `url(${s.img})` }} role="img" aria-label={s.name}><span className="z">{s.zone}</span></div>
                <div className="stext"><span className="eyebrow">{s.zone}</span><h2>{s.name}</h2><p>{s.text}</p></div>
              </article>
            </Reveal>
          ))}
          <Reveal className="center"><span className="eyebrow">The Atmosphere</span><h2>A feel for the evening</h2></Reveal>
          <div className="gallery">
            {ambience.gallery.map((p, i) => (
              <button key={p.title} className="gtile" onClick={() => setView(i)} aria-label={`View ${p.title}`}>
                <img src={p.src} alt={p.title} loading="lazy" />
                <span>{p.title}</span>
              </button>
            ))}
          </div>
          {g && createPortal(
            <div className="lightbox" onClick={() => setView(null)} role="dialog" aria-label={g.title}>
              <figure onClick={e => e.stopPropagation()}>
                <img src={g.src} alt={g.title} />
                <figcaption><b>{g.title}</b><span>{g.note}</span></figcaption>
              </figure>
              <button className="lbx" onClick={() => setView(null)} aria-label="Close">✕</button>
            </div>, document.body)}
          <Reveal className="center"><p className="fine">Seating is intentionally limited to protect the atmosphere. Booking ahead is recommended.</p>
            <Link to="/visit#reserve" className="btn" style={{ marginTop: 20 }}>Reserve a Table</Link></Reveal>
        </div>
      </section>
    </>
  )
}
