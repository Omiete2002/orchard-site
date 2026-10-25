import { Link } from 'react-router-dom'
import { PageHead, Reveal } from '../Layout.jsx'
import { rhythm } from '../data.js'

const pillars = [
  ['Breakfast', 'Specialty coffee, akara and pap, and a proper Orchard Royal.'],
  ['Business Lunch', 'Considered plates and a table where meetings go well.'],
  ['Premium Dining', 'Charcoal-grilled fish, grilled lamb and the best of West African soups.'],
  ['Lounge & Bar', 'Signature cocktails built on hibiscus, ginger, tamarind and citrus.'],
  ['Private Hospitality', 'Discreet reservations and gatherings handled with care.'],
  ['Curated Music', 'Jazz, Afro-soul, highlife and old-school R&B at conversational volume.'],
]

export default function House() {
  return (
    <>
      <PageHead eyebrow="The House" title="Your Home Away From Home">
        An all-day destination for people who value quality but have no appetite for formality or noise.
      </PageHead>

      <section className="sec alt">
        <Reveal className="wrap narrow prose">
          <p>The Orchard is a place to arrive, exhale and stay a while. It holds the warmth of a private residence, the craft of a premium restaurant and the quiet social energy of a sophisticated evening lounge.</p>
          <p>Our kitchen is unapologetically West African. A Senegalese guest should recognise a proper yassa, a Ghanaian guest should enjoy authentic waakye, and a Nigerian guest should find excellent local dishes on the table. The food is honoured, not reinvented: authentic flavours, refined presentation and generous hospitality.</p>
          <p>Service is attentive, discreet and personable, in the manner of a private members' club without the membership. Privacy and belonging matter to us, particularly for diplomats and mature professionals.</p>
          <blockquote>Where conversation is always possible.</blockquote>
        </Reveal>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="center"><span className="eyebrow">Six Pillars</span><h2>One house, many moods</h2></Reveal>
          <div className="grid3">
            {pillars.map(([t, d], i) => (
              <Reveal key={t}><div className="pillar"><span className="numeral sm">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap narrow">
          <Reveal className="center"><span className="eyebrow">The Week at Orchard</span><h2>A rhythm for every evening</h2></Reveal>
          <Reveal>
            <ul className="hrs rhythm">
              {rhythm.map(([d, n, p]) => (
                <li key={d}><div><b>{n}</b><small>{p}</small></div><span>{d}</span></li>
              ))}
            </ul>
            <p className="fine center">Programming is indicative and may change. Special events by advance reservation.</p>
          </Reveal>
        </div>
      </section>

      <section className="sec center">
        <Reveal className="wrap"><h2>Come as you are</h2><Link to="/visit#reserve" className="btn">Reserve a Table</Link></Reveal>
      </section>
    </>
  )
}
