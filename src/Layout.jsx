import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import logo from './assets/logo.png'

const links = [['/the-house', 'The House'], ['/spaces', 'Spaces'], ['/menus', 'Menus'], ['/visit', 'Visit']]

export function Reveal({ children, className = '' }) {
  const [el, setEl] = useState(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [el])
  return <div ref={setEl} className={`rv ${on ? 'in' : ''} ${className}`}>{children}</div>
}

export function PageHead({ eyebrow, title, children }) {
  return (
    <header className="pagehead">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <div className="orn" />
      {children && <p>{children}</p>}
    </header>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <>
      <nav className={`nav ${solid || pathname !== '/' ? 'solid' : ''}`}>
        <Link to="/" className="logo brand"><img src={logo} alt="" />ORCHARD</Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? '✕' : '☰'}</button>
        <ul className={open ? 'open' : ''}>
          {links.map(([to, label]) => <li key={to}><NavLink to={to}>{label}</NavLink></li>)}
          <li><Link to="/visit#reserve" className="navcta">Reserve</Link></li>
        </ul>
      </nav>
      <main key={pathname} className="page"><Outlet /></main>
      <footer className="footer">
        <Link to="/" className="logo"><img className="flogo" src={logo} alt="The Orchard logo" /><span>THE ORCHARD</span></Link>
        <p>Resto Lounge &amp; Social House · Abuja, Nigeria</p>
        <p className="tagline">Your Home Away From Home.</p>
        <div className="flinks">{links.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
        <small>© 2026 The Orchard. Please drink responsibly.</small>
      </footer>
    </>
  )
}
