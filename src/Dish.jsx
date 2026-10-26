import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { dishImages, drinkImages } from './data.js'

export default function Dish({ name, desc }) {
  const tall = name in drinkImages
  const img = dishImages[name] || drinkImages[name]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const k = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open])

  return (
    <div className={`it ${img ? 'hasimg' : ''}`}>
      {img && (
        <button className={`thumb ${tall ? 'tall' : ''}`} onClick={() => setOpen(true)} aria-label={`View photo of ${name}`}>
          <img src={img} alt={name} loading="lazy" />
        </button>
      )}
      <div className="itxt"><h4>{name}</h4><p>{desc}</p></div>
      {open && createPortal(
        <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-label={name}>
          <figure onClick={e => e.stopPropagation()}>
            <img className={tall ? 'tall' : ''} src={img} alt={name} />
            <figcaption><b>{name}</b><span>{desc}</span></figcaption>
          </figure>
          <button className="lbx" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>, document.body)}
    </div>
  )
}
