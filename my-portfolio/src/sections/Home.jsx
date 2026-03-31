import ParticlesBackground from '../components/ParticlesBackground'

const SOCIALS = [
  {
    label: 'GitHub', href: 'https://github.com/ravibs298',
    icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: 'LinkedIn', href: 'https://linkedin.com/ravibhushansinghh/',
    icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.12 20.45H4.55V9h1.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>,
  },
  {
    label: 'Email', href: 'mailto:ravispatel2908@gmail.com',
    icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const Home = () => (
  <section
    id="home"
    style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #3b5fa0 0%, #2a7a7a 50%, #0ea5a0 100%)',
    }}
  >
    <ParticlesBackground />

    {/* Blobs */}
    <div style={{ position:'absolute', top:'25%', left:40, width:192, height:192, background:'rgba(255,255,255,0.08)', borderRadius:'50%', filter:'blur(40px)' }} />
    <div style={{ position:'absolute', bottom:'20%', right:40, width:256, height:256, background:'rgba(45,212,191,0.15)', borderRadius:'50%', filter:'blur(48px)' }} />

    <div style={{ position:'relative', zIndex:10, textAlign:'center', padding:'0 24px', maxWidth:720, margin:'0 auto' }}>

      {/* Badge */}
      <div style={{
        display:'inline-flex', alignItems:'center', gap:8, marginBottom:24,
        background:'rgba(255,255,255,0.18)', backdropFilter:'blur(8px)',
        border:'1px solid rgba(255,255,255,0.28)', borderRadius:9999,
        padding:'8px 18px',
      }}>
        <span style={{ width:8, height:8, background:'#5eead4', borderRadius:'50%', animation:'pulse 2s infinite' }} />
        <span style={{ color:'#fff', fontSize:14, fontWeight:500 }}>Welcome to my portfolio</span>
      </div>

      {/* Heading */}
      <h1 style={{ fontSize:'clamp(2.5rem,7vw,4.5rem)', fontWeight:900, lineHeight:1.1, marginBottom:16 }}>
        <span style={{ color:'#0f172a' }}>Hi, I'm </span>
        <span style={{ background:'linear-gradient(90deg,#2dd4bf,#60a5fa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
          Ravi Bhushan Singh
        </span>
      </h1>

      {/* Subtitle */}
      <p style={{ color:'rgba(255,255,255,0.78)', fontSize:'clamp(1rem,2.5vw,1.2rem)', lineHeight:1.7, maxWidth:560, margin:'0 auto 32px' }}>
        An undergraduate student passionate about creating beautiful, functional digital experiences.
        Specializing in web development and design.
      </p>

      {/* CTA buttons */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:16, justifyContent:'center', marginBottom:40 }}>
        <button
          onClick={() => scrollTo('projects')}
          style={{
            display:'flex', alignItems:'center', gap:8,
            padding:'12px 28px', borderRadius:9999,
            background:'#0d9488', color:'#fff', fontWeight:600, fontSize:15,
            border:'none', boxShadow:'0 8px 24px rgba(13,148,136,0.35)',
            transition:'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#0f766e'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='#0d9488'; e.currentTarget.style.transform='translateY(0)' }}
        >
          View My Work →
        </button>
        <button
          onClick={() => scrollTo('contact')}
          style={{
            display:'flex', alignItems:'center', gap:8,
            padding:'12px 28px', borderRadius:9999,
            background:'transparent', color:'#fff', fontWeight:600, fontSize:15,
            border:'2px solid rgba(255,255,255,0.4)',
            transition:'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.transform='translateY(0)' }}
        >
          Get in Touch
        </button>
        <a
          href="/resume.pdf"  // replace with your resume file path
          download
          style={{
          display:'flex', alignItems:'center', justifyContent:'center', gap:8,
          padding:'12px 28px', borderRadius:9999,
          background:'#0d9488', color:'#fff', fontWeight:600, fontSize:15,
          border:'none', boxShadow:'0 8px 24px rgba(13,148,136,0.35)',
          textDecoration:'none',
           transition:'background 0.2s, transform 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background='#0f766e'; e.currentTarget.style.transform='translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.background='#0d9488'; e.currentTarget.style.transform='translateY(0)' }}
        >
        Download Resume ⬇
      </a>
      </div>

      {/* Socials */}
      <div style={{ display:'flex', justifyContent:'center', gap:12 }}>
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{
              width:44, height:44, borderRadius:12,
              background:'rgba(255,255,255,0.18)',
              border:'1px solid rgba(255,255,255,0.28)',
              display:'flex', alignItems:'center', justifyContent:'center',
              color:'#fff', transition:'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.3)'; e.currentTarget.style.transform='scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.18)'; e.currentTarget.style.transform='scale(1)' }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <button
      onClick={() => scrollTo('about')}
      style={{
        position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:4,
        color:'rgba(255,255,255,0.6)', background:'none', border:'none',
        transition:'color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.9)'}
      onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.6)'}
    >
      <div style={{ width:20, height:32, border:'2px solid rgba(255,255,255,0.4)', borderRadius:10, display:'flex', justifyContent:'center', paddingTop:4 }}>
        <div style={{ width:3, height:8, background:'rgba(255,255,255,0.7)', borderRadius:2, animation:'bounce 1.5s infinite' }} />
      </div>
    </button>
  </section>
)

export default Home