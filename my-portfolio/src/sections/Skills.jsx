const CATEGORIES = [
  {
    title: "Frontend Development",
    tags: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    tags: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems"],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Backend & Database",
    tags: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "Authentication"],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Tools & Platforms",
    tags: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "DevTools"],
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const Skills = () => (
  <section
    id="skills"
    style={{
      padding: "96px 0",
      background: "linear-gradient(to bottom, #ffffff, #eff6ff, #ffffff)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background Image */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.4,
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663484343834/6MsUfjs3dDSYeyzjVUMAuY/skills-section-bg-PUp8ZFvKHAVYW5Fz9JD6Rx.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    <div
      style={{
        maxWidth: 1152,
        margin: "0 auto",
        padding: "0 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>
          My Skills
        </h2>
        <p style={{ color: "#64748b", maxWidth: 600, margin: "0 auto", fontSize: 16 }}>
          A comprehensive toolkit of technologies and skills that I use to build exceptional digital experiences.
        </p>
        <div
          style={{
            width: 64,
            height: 4,
            background: "linear-gradient(to right, #3b82f6, #2563eb)",
            borderRadius: 999,
            margin: "16px auto 0",
          }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 24,
        }}
      >
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.title}
            style={{
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: 16,
              padding: 24,
              border: "1px solid #e2e8f0",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  padding: 10,
                  borderRadius: 10,
                  background: "linear-gradient(to bottom right, rgba(59,130,246,0.2), rgba(37,99,235,0.2))",
                }}
              >
                {cat.icon}
              </div>
              <h3 style={{ fontWeight: 700, color: "#1e293b", fontSize: 18 }}>{cat.title}</h3>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    background: "#f1f5f9",
                    color: "#334155",
                    borderRadius: 9999,
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#3b82f6";
                    e.target.style.color = "#fff";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#f1f5f9";
                    e.target.style.color = "#334155";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;