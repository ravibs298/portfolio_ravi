const TESTIMONIALS = [
  { text:"Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations and brought our vision to life.", name:'Sarah Johnson',  title:'CEO, Digital Solutions',         initials:'SJ', grad:'linear-gradient(135deg,#2dd4bf,#06b6d4)' },
  { text:"Exceptional attention to detail and a deep understanding of modern web technologies. I highly recommend their services to anyone looking for quality work.", name:'Michael Chen',  title:'Product Manager, Tech Innovations', initials:'MC', grad:'linear-gradient(135deg,#60a5fa,#6366f1)' },
  { text:"The communication throughout the project was clear and professional. They were responsive to feedback and made revisions promptly. Great experience!",    name:'Emily Rodriguez',title:'Founder, Creative Agency',           initials:'ER', grad:'linear-gradient(135deg,#a78bfa,#ec4899)' },
  { text:"Impressive problem-solving skills and a genuine passion for creating excellent user experiences. Would definitely work together again.",                  name:'James Wilson',  title:'Design Director, Brand Studio',     initials:'JW', grad:'linear-gradient(135deg,#fb923c,#f59e0b)' },
]

const Stars = () => (
  <div style={{ display:'flex', gap:4, marginBottom:16 }}>
    {[...Array(5)].map((_,i) => (
      <svg key={i} width="18" height="18" fill="#0d9488" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

const Feedback = () => (
  <section id="feedback" style={{ padding:'96px 0', background:'#fff', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:600, height:240, background:'rgba(240,253,250,0.8)', borderRadius:'50%', filter:'blur(48px)', pointerEvents:'none' }}/>

    <div style={{ maxWidth:1152, margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
      <div className="reveal" style={{ textAlign:'center', marginBottom:56 }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:12 }}>
          <svg width="32" height="32" fill="#fbbf24" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
        </div>
        <h2 style={{ fontSize:'2.25rem', fontWeight:800, color:'#0f172a', marginBottom:12 }}>What People Say</h2>
        <p style={{ color:'#64748b', maxWidth:420, margin:'0 auto', fontSize:14 }}>Feedback from clients and collaborators who have experienced my work firsthand.</p>
        <div className="section-divider" style={{ margin:'16px auto 0' }}/>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className="card-glow reveal" style={{ background:'#fff', borderRadius:20, padding:24, border:'1px solid #f1f5f9', boxShadow:'0 1px 8px rgba(0,0,0,0.04)', transitionDelay:`${i*90}ms` }}>
            <Stars/>
            <p style={{ color:'#475569', fontStyle:'italic', lineHeight:1.75, marginBottom:24, fontSize:14 }}>"{t.text}"</p>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:40, height:40, borderRadius:'50%', background:t.grad, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <span style={{ color:'#fff', fontSize:12, fontWeight:700 }}>{t.initials}</span>
              </div>
              <div>
                <p style={{ fontWeight:700, color:'#1e293b', fontSize:14 }}>{t.name}</p>
                <p style={{ color:'#94a3b8', fontSize:12 }}>{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Feedback