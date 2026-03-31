const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce platform built with React and Node.js featuring product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demo: '#',
    code: '#',
    image: 'https://via.placeholder.com/400x180?text=E-Commerce'
  },
  {
    title: 'Task Management App',
    desc: 'A collaborative task management application with real-time updates, user authentication, and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    demo: '#',
    code: '#',
    image: 'https://via.placeholder.com/400x180?text=Task+App'
  },
  {
    title: 'Weather Dashboard',
    desc: 'A responsive weather application that displays real-time weather data with beautiful visualizations and location-based forecasts.',
    tags: ['React', 'API Integration', 'Chart.js'],
    demo: '#',
    code: '#',
    image: 'https://via.placeholder.com/400x180?text=Weather'
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive components.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    demo: 'https://portfolioravisinghpatel298.netlify.app/',
    code: 'https://github.com/ravibs298/portfolio_ravi',
    image: '/portfolio.jpg'
  },
]

const GHIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const ExtIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)

const Card = ({ p, delay }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid #f1f5f9',
      boxShadow: '0 1px 8px rgba(0,0,0,0.04)',
      transitionDelay: delay
    }}
  >
    {/* ✅ IMAGE ONLY (NO OVERLAY, NO BUTTONS) */}
    <div style={{ height: 176 }}>
      <img
        src={p.image}
        alt={p.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>

    {/* Content */}
    <div style={{ padding: 20 }}>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
        {p.title}
      </h3>

      <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
        {p.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
        {p.tags.map(t => (
          <span
            key={t}
            style={{
              padding: '4px 12px',
              background: '#f1f5f9',
              color: '#475569',
              borderRadius: 9999,
              fontSize: 12,
              fontWeight: 500
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* ✅ KEEP THESE BUTTONS */}
      <div style={{ display: 'flex', gap: 10 }}>
        <a
          href={p.demo}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '10px 0',
            background: '#0d9488',
            color: '#fff',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          <ExtIcon /> Live Demo
        </a>

        <a
          href={p.code}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '10px 0',
            border: '2px solid #0d9488',
            color: '#0d9488',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          <GHIcon /> Code
        </a>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <section id="projects" style={{ padding: '96px 0', background: '#fff' }}>
    <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>
          Featured Projects
        </h2>
        <p style={{ color: '#64748b', fontSize: 14, maxWidth: 480 }}>
          A selection of projects I've built that showcase my skills and passion for quality digital experiences.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
        {PROJECTS.map((p, i) => (
          <Card key={p.title} p={p} delay={`${i * 90}ms`} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects