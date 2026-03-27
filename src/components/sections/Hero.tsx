export function Hero() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "8rem 0 4rem",
          position: "relative",
        }}
      >
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
            marginBottom: "2.5rem",
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
            }}
          />
          CAC Registered · Lagos, Nigeria
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: "800px",
            marginBottom: "1.8rem",
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
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#contact">
            <button
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: "0.01em",
              }}
            >
              Start a project →
            </button>
          </a>
          <a href="#services">
            <button
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1.5px solid var(--border2)",
                padding: "0.85rem 2rem",
                borderRadius: "8px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              View our work
            </button>
          </a>
        </div>

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "2.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.5,
            pointerEvents: "none",
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
