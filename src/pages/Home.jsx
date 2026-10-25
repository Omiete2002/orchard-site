import { Link } from 'react-router-dom'
import { Reveal } from '../Layout.jsx'
import logo from '../assets/logo.png'
import { spaces, hours, menus } from '../data.js'

export default function Home() {
  const picks = ['Senegalese Chicken Yassa', 'Egusi & Pounded Yam', 'Signature Beef Suya', 'Lagos to Dakar']
  return (
    <>
      <section className="hero">
        <div className="herobox">
          <img className="herologo" src={logo} alt="The Orchard emblem" />
          <h1>THE ORCHARD</h1>
          <div className="sub">Resto Lounge &amp; Social House</div>
          <p className="tag">Your Home Away From Home.</p>
          <div className="btnrow">
            <Link to="/visit#reserve" className="btn">Reserve a Table</Link>
            <Link to="/menus" className="btn ghost">View Menus</Link>
          </div>
        </div>
        <div className="loc">Abuja · Nigeria</div>
      </section>

      <section className="sec alt">
        <Reveal className="wrap center">
          <span className="eyebrow">The Philosophy</span>
          <h2>A beautifully designed private home that happens to serve exceptional food.</h2>
          <p className="lead">Warm as a residence, exacting as a premium kitchen, sociable as a well-spent evening. Not a nightclub, and never a stiff dining room.</p>
          <Link to="/the-house" className="more">Discover the house →</Link>
        </Reveal>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal className="center"><span className="eyebrow">The Spaces</span><h2>Four rooms, one home</h2></Reveal>
          <div className="grid4">
            {spaces.map(s => (
              <Reveal key={s.name}>
                <Link to="/spaces" className={`tile tone-${s.tone}`}>
                  <span className="numeral">{s.no}</span>
                  <span className="z">{s.zone}</span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <Reveal className="center"><span className="eyebrow">From the Kitchen &amp; Bar</span><h2>West African soul</h2></Reveal>
          <Reveal className="picks">
            {Object.values(menus).flatMap(m => m.groups.flatMap(g => g[1])).filter(i => picks.includes(i[0])).map(([n, d]) => (
              <div className="it" key={n}><h4>{n}</h4><p>{d}</p></div>
            ))}
          </Reveal>
          <div className="center" style={{ marginTop: 40 }}><Link to="/menus" className="btn">Full Menus</Link></div>
        </div>
      </section>

      <section className="sec">
        <Reveal className="wrap narrow">
          <div className="center"><span className="eyebrow">Opening Rhythm</span><h2>From breakfast to late</h2></div>
          <ul className="hrs">{hours.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}</ul>
          <div className="center" style={{ marginTop: 40 }}><Link to="/visit#reserve" className="btn">Reserve a Table</Link></div>
        </Reveal>
      </section>
    </>
  )
}
