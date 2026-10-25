import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PageHead, Reveal } from '../Layout.jsx'
import { hours } from '../data.js'

const empty = { name: '', phone: '', email: '', date: '', time: '7:00 PM', guests: '2', area: 'No preference', notes: '' }

export default function Visit() {
  const [f, setF] = useState(empty)
  const [sent, setSent] = useState(false)
  const { hash } = useLocation()
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    if (hash === '#reserve') setTimeout(() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' }), 80)
  }, [hash])

  // Replace with a real endpoint (email service, WhatsApp link, booking API).
  const submit = e => { e.preventDefault(); console.log('Reservation request', f); setSent(true) }

  return (
    <>
      <PageHead eyebrow="Visit" title="Hours & Reservations">We would be delighted to welcome you.</PageHead>
      <section className="sec">
        <div className="wrap cols">
          <Reveal>
            <h3 className="sh">Opening Hours</h3>
            <ul className="hrs">{hours.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}</ul>
            <p className="fine">Closing time follows permitted operating hours and neighbourhood requirements.</p>
            <div className="info">
              <p><em>Address</em>[Street address placeholder], Abuja, FCT, Nigeria</p>
              <p><em>Reservations</em>+234 000 000 0000<br />reservations@yourdomain.com</p>
              <p><em>Private &amp; Diplomatic Bookings</em>Handled discreetly by our Guest Relations team.</p>
            </div>
          </Reveal>
          <Reveal>
            <div id="reserve">
              <h3 className="sh">Reserve a Table</h3>
              {sent ? (
                <div className="ok">
                  <p>Thank you, {f.name.split(' ')[0] || 'dear guest'}.</p>
                  <small>Your request is received. Our team will confirm shortly.</small>
                  <button className="btn ghost" onClick={() => { setF(empty); setSent(false) }}>Make another request</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <label>Name<input required value={f.name} onChange={set('name')} placeholder="Your full name" /></label>
                  <div className="r2">
                    <label>Phone<input required type="tel" value={f.phone} onChange={set('phone')} placeholder="+234" /></label>
                    <label>Email<input type="email" value={f.email} onChange={set('email')} placeholder="you@email.com" /></label>
                  </div>
                  <div className="r2">
                    <label>Date<input required type="date" min={today} value={f.date} onChange={set('date')} /></label>
                    <label>Time<select value={f.time} onChange={set('time')}>{['7:00 AM', '9:00 AM', '12:30 PM', '2:00 PM', '7:00 PM', '8:30 PM', '10:00 PM'].map(t => <option key={t}>{t}</option>)}</select></label>
                  </div>
                  <div className="r2">
                    <label>Guests<select value={f.guests} onChange={set('guests')}>{['1', '2', '3', '4', '5–6', '7+ (private)'].map(t => <option key={t}>{t}</option>)}</select></label>
                    <label>Area<select value={f.area} onChange={set('area')}>{['No preference', 'Living Room', 'Dining Room', 'Bar', 'Garden'].map(t => <option key={t}>{t}</option>)}</select></label>
                  </div>
                  <label>Special requests<textarea rows="3" value={f.notes} onChange={set('notes')} placeholder="Occasion, dietary needs, seating preference" /></label>
                  <button className="btn" type="submit">Request Reservation</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
