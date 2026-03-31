const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Bluestock Fintech",
    period: "Mar 2026 - Present",
    desc: "Analyzed datasets and built dashboards using Excel, SQL, and Python to support data-driven decisions.",
    points: [
      "Collected and cleaned datasets for analysis",
      "Wrote SQL queries to extract insights",
      "Created dashboards and visual reports",
      "Analyzed trends to support decision-making",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    period: "Mar 2026 - Present",
    desc: "Designed and developed custom websites for clients using React, JavaScript, and modern web technologies. Managed client relationships and provided technical support.",
    points: [
      "Designed and developed custom websites",
      "Used React and JavaScript for development",
      "Managed client relationships",
      "Provided technical support and maintenance",
      "Collaborated with designers and stakeholders",
    ],
  },
  {
    role: "Java Development Intern",
    company: "Codveda Technologies",
    period: "Feb 2026 - Present",
    desc: "Developed Java applications and contributed to backend development projects. Participated in code reviews and collaborated with the development team to implement new features.",
    points: [
      "Developed Java applications",
      "Contributed to backend development projects",
      "Participated in code reviews",
      "Collaborated with the development team",
      "Implemented new features and bug fixes",
    ],
  },
];

const BriefcaseIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const CalIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
);

const Experience = () => (
  <section id="experience" style={{ padding: '96px 0', background: '#f8fafc' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
      {/* Section Header */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>Experience</h2>
        <p style={{ color: '#64748b', fontSize: 14 }}>
          My professional journey and the experiences that have shaped my skills and expertise.
        </p>
        <div style={{ width: 64, height: 4, background: 'linear-gradient(90deg,#14b8a6,#3b82f6)', borderRadius: 999, marginTop: 16 }} />
      </div>

      {/* Experience Cards */}
      {experiences.map((e, i) => (
        <div key={e.role} style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#14b8a6,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(13,148,136,0.3)' }}>
              <BriefcaseIcon />
            </div>
            {i < experiences.length - 1 && (
              <div style={{ width: 2, flex: 1, background: 'linear-gradient(180deg,rgba(45,212,191,0.5),transparent)', marginTop: 8, minHeight: 32 }} />
            )}
          </div>

          {/* Card */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #f1f5f9', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a' }}>{e.role}</h3>
                <p style={{ color: '#0d9488', fontWeight: 600, fontSize: 14 }}>{e.company}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 13 }}>
                <CalIcon /> {e.period}
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{e.desc}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {e.points.map(pt => (
                <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#475569' }}>
                  <span style={{ width: 6, height: 6, background: '#14b8a6', borderRadius: '50%', flexShrink: 0 }} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;