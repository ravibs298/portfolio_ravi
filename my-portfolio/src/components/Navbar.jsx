import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home','About','Skills','Projects','Experience','Feedback','Contact']

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActive]    = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase())
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(NAV_LINKS[i].toLowerCase())
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.65)',
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.07)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      <div style={{
        maxWidth: 1152, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => scrollTo('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'none' }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg,#14b8a6,#3b82f6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>RB</span>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: '#1e293b', fontSize: 14, lineHeight: 1 }}>Ravi Bhushan Singh</p>
            <p style={{ fontSize: 10, color: '#3b82f6', marginTop: 2 }}>Portfolio</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                padding: '6px 12px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                border: 'none', background: activeSection === link.toLowerCase() ? '#f0fdfa' : 'transparent',
                color: activeSection === link.toLowerCase() ? '#0d9488' : '#475569',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden-mobile"
            style={{
              padding: '8px 20px', borderRadius: 9999, fontSize: 14, fontWeight: 600,
              background: '#0d9488', color: '#fff', border: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#0f766e'}
            onMouseLeave={e => e.target.style.background = '#0d9488'}
          >
            Get in Touch
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              display: 'none', flexDirection: 'column', gap: 5,
              padding: 8, background: 'none', border: 'none',
            }}
            aria-label="Toggle menu"
          >
            {[0,1,2].map((i) => (
              <span key={i} style={{
                display: 'block', width: 20, height: 2, background: '#334155', borderRadius: 2,
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(5px,-5px)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

export default Navbar