const HIGHLIGHTS = [
  "Passionate about web development and design",
  "Strong foundation in React, JavaScript, and modern web technologies",
  "Problem-solver with attention to detail",
  "Committed to continuous learning and growth",
];

const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#6366f1"
    strokeWidth="2"
    style={{ flexShrink: 0, marginTop: 2 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const About = () => (
  <section
    id="about"
    style={{ padding: "96px 0", background: "#ffffff" }}
  >
    <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
      
      {/* Header */}
      <div style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: 12,
          }}
        >
          About Me
        </h2>
        <div
          style={{
            width: 64,
            height: 4,
            borderRadius: 999,
            background: "linear-gradient(to right,#6366f1,#2563eb)",
          }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        
        {/* Image Section */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 280, height: 280 }}>
            
            {/* Background Accent */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 20,
                transform: "rotate(6deg)",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(37,99,235,0.2))",
              }}
            />

            {/* Image */}
            <div
              style={{
                position: "absolute",
                inset: 12,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <p
            style={{
              color: "#475569",
              lineHeight: 1.8,
              marginBottom: 16,
              fontSize: 16,
            }}
          >
            I'm an undergraduate student with a passion for creating beautiful,
            intuitive digital experiences. My journey in web development started
            with a curiosity about how things work on the internet, and it has
            evolved into a deep commitment to building high-quality,
            user-centered solutions.
          </p>

          <p
            style={{
              color: "#475569",
              lineHeight: 1.8,
              marginBottom: 32,
              fontSize: 16,
            }}
          >
            When I'm not coding, you can find me exploring new design trends,
            contributing to open-source projects, or sharing knowledge with
            fellow developers. I believe in the power of continuous learning and
            collaboration.
          </p>

          {/* Highlights */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {HIGHLIGHTS.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <CheckIcon />
                <span
                  style={{
                    color: "#1e293b",
                    fontWeight: 500,
                    fontSize: 15,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;