const NAV_LINKS = ['Home','About','Skills','Projects','Experience','Feedback','Contact']

const OverlayMenu = ({ open, setOpen }) => {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 40,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(16px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'all' : 'none',
      transition: 'opacity 0.4s ease',
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
        {NAV_LINKS.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              fontSize: 32, fontWeight: 800, color: '#1e293b',
              background: 'none', border: 'none',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${i * 55}ms, transform 0.4s ease ${i * 55}ms, color 0.2s`,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#0d9488'}
            onMouseLeave={e => e.currentTarget.style.color = '#1e293b'}
          >
            {link}
          </button>
        ))}
      </nav>

      <button
        onClick={() => scrollTo('contact')}
        style={{
          marginTop: 40, padding: '12px 36px',
          borderRadius: 9999, fontSize: 18, fontWeight: 600,
          background: '#0d9488', color: '#fff', border: 'none',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(20px)',
          transition: `opacity 0.4s ease ${NAV_LINKS.length * 55}ms, transform 0.4s ease ${NAV_LINKS.length * 55}ms`,
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#0f766e'}
        onMouseLeave={e => e.currentTarget.style.background = '#0d9488'}
      >
        Get in Touch
      </button>
    </div>
  )
}

export default OverlayMenu