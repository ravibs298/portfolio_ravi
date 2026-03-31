const PROJECTS = [
  { title:'E-Commerce Platform',   desc:'A full-stack e-commerce platform built with React and Node.js featuring product catalog, shopping cart, and payment integration.', tags:['React','Node.js','MongoDB','Stripe'],       demo:'#', code:'#', grad:'linear-gradient(135deg,#2dd4bf,#3b82f6)' },
  { title:'Task Management App',   desc:'A collaborative task management application with real-time updates, user authentication, and team collaboration features.',       tags:['React','Firebase','Tailwind CSS'],          demo:'#', code:'#', grad:'linear-gradient(135deg,#60a5fa,#6366f1)' },
  { title:'Weather Dashboard',     desc:'A responsive weather application that displays real-time weather data with beautiful visualizations and location-based forecasts.', tags:['React','API Integration','Chart.js'],     demo:'#', code:'#', grad:'linear-gradient(135deg,#22d3ee,#14b8a6)' },
  { title:'Portfolio Website',     desc:'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive components.',          tags:['React','Tailwind CSS','Vite'],             demo:'https://portfolioravisinghpatel298.netlify.app/', code:'https://github.com/ravibs298/portfolio_ravi', grad:'linear-gradient(135deg,#14b8a6,#4ade80)' },
]

const GHIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
const ExtIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>

const Card = ({ p, delay }) => (
  <div className="card-glow reveal" style={{ background:'#fff', borderRadius:20, overflow:'hidden', border:'1px solid #f1f5f9', boxShadow:'0 1px 8px rgba(0,0,0,0.04)', transitionDelay:delay }}>
    {/* Thumbnail */}
    <div style={{ height:176, background:p.grad, position:'relative', overflow:'hidden' }}
      onMouseEnter={e => e.currentTarget.querySelector('.hover-overlay').style.opacity='1'}
      onMouseLeave={e => e.currentTarget.querySelector('.hover-overlay').style.opacity='0'}
    >
      <svg viewBox="0 0 400 180" style={{ width:'100%', height:'100%', opacity:.35, position:'absolute', inset:0 }}>
        <circle cx="310" cy="40" r="90" fill="rgba(255,255,255,0.3)"/>
        <circle cx="90" cy="150" r="70" fill="rgba(255,255,255,0.2)"/>
        <polygon points="200,10 370,90 260,170 90,90" fill="rgba(255,255,255,0.08)"/>
      </svg>
      <div className="hover-overlay" style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.22)', opacity:0, transition:'opacity 0.3s', display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
        <a href={p.demo} style={{ display:'flex', alignItems:'center', gap:6, padding:'8px 16px', background:'rgba(255,255,255,0.92)', borderRadius:10, fontSize:13, fontWeight:600, color:'#1e293b', textDecoration:'none' }}><ExtIcon/> Demo</a>
        <a href={p.code} style={{ display:'flex', alignItems:'center', gap:6, padding:'8px 16px', background:'rgba(255,255,255,0.92)', borderRadius:10, fontSize:13, fontWeight:600, color:'#1e293b', textDecoration:'none' }}><GHIcon/> Code</a>
      </div>
      <div style={{ position:'absolute', bottom:12, right:12, width:40, height:40, background:'rgba(255,255,255,0.2)', borderRadius:'50%' }}/>
    </div>

    <div style={{ padding:20 }}>
      <h3 style={{ fontSize:17, fontWeight:700, color:'#0f172a', marginBottom:8 }}>{p.title}</h3>
      <p style={{ color:'#64748b', fontSize:13, lineHeight:1.7, marginBottom:16 }}>{p.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:18 }}>
        {p.tags.map(t => <span key={t} style={{ padding:'4px 12px', background:'#f1f5f9', color:'#475569', borderRadius:9999, fontSize:12, fontWeight:500 }}>{t}</span>)}
      </div>
      <div style={{ display:'flex', gap:10 }}>
        <a href={p.demo} style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6, padding:'10px 0', background:'#0d9488', color:'#fff', borderRadius:12, fontSize:13, fontWeight:600, textDecoration:'none', transition:'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background='#0f766e'}
          onMouseLeave={e => e.currentTarget.style.background='#0d9488'}
        ><ExtIcon/> Live Demo</a>
        <a href={p.code} style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6, padding:'10px 0', border:'2px solid #0d9488', color:'#0d9488', borderRadius:12, fontSize:13, fontWeight:600, textDecoration:'none', background:'transparent', transition:'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background='#f0fdfa'}
          onMouseLeave={e => e.currentTarget.style.background='transparent'}
        ><GHIcon/> Code</a>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <section id="projects" style={{ padding:'96px 0', background:'#fff' }}>
    <div style={{ maxWidth:1152, margin:'0 auto', padding:'0 24px' }}>
      <div className="reveal" style={{ marginBottom:48 }}>
        <h2 style={{ fontSize:'2.25rem', fontWeight:800, color:'#0f172a', marginBottom:8 }}>Featured Projects</h2>
        <p style={{ color:'#64748b', fontSize:14, maxWidth:480 }}>A selection of projects I've built that showcase my skills and passion for quality digital experiences.</p>
        <div className="section-divider" style={{ marginTop:16 }}/>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
        {PROJECTS.map((p, i) => <Card key={p.title} p={p} delay={`${i*90}ms`}/>)}
      </div>

      <div className="reveal" style={{ textAlign:'center', marginTop:48 }}>
        <button className="btn-shimmer" style={{ padding:'12px 36px', borderRadius:9999, color:'#fff', fontWeight:600, fontSize:15, border:'none' }}>
          View All Projects
        </button>
      </div>
    </div>
  </section>
)

export default Projects