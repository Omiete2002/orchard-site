import { Link } from 'react-router-dom'
import { PageHead, Reveal } from '../Layout.jsx'
import { spaces } from '../data.js'

export default function Spaces() {
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
                <div className={`plate tone-${s.tone}`}><span className="numeral big">{s.no}</span><span className="z">{s.zone}</span></div>
                <div className="stext"><span className="eyebrow">{s.zone}</span><h2>{s.name}</h2><p>{s.text}</p></div>
              </article>
            </Reveal>
          ))}
          <Reveal className="center" ><p className="fine">Seating is intentionally limited to protect the atmosphere. Booking ahead is recommended.</p>
            <Link to="/visit#reserve" className="btn" style={{ marginTop: 20 }}>Reserve a Table</Link></Reveal>
        </div>
      </section>
    </>
  )
}
