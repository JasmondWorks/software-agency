export function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--highlight-light)",
            border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: "100px",
            padding: "0.3rem 1rem",
            fontSize: "0.75rem",
            color: "var(--highlight)",
            marginBottom: "2rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--highlight)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          CAC Registered · Lagos, Nigeria
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.6rem, 7vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "800px",
            marginBottom: "1.5rem",
            color: "var(--text)",
          }}
        >
          We build digital products
          <br />
          that{" "}
          <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
            actually
          </em>{" "}
          scale.
        </h1>

        {/* Subtext */}
        <p
          style={{
            maxWidth: "520px",
            color: "var(--text2)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            fontWeight: 300,
          }}
        >
          A multi-disciplinary team of engineers and designers building secure,
          AI-powered digital products for startups and enterprises across Africa
          and beyond.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="#contact">
            <button className="btn btn-accent">Start a project →</button>
          </a>
          <a href="#services">
            <button className="btn btn-outline">View our work</button>
          </a>
        </div>

        {/* Decorative circles — desktop only */}
        <div
          className="hero-circles"
          aria-hidden="true"
          style={{
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            opacity: 0.5,
          }}
        >
          <div
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "1px solid var(--border2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "var(--highlight-light)",
                border: "1px solid rgba(37,99,235,0.15)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
