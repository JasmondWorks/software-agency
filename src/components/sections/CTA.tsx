export function CTA() {
  return (
    <section
      id="contact"
      className="section-lg"
      style={{ background: "var(--accent)" }}
    >
      <div
        style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.4)",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          Let&apos;s work together
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Ready to build something{" "}
          <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>
            serious?
          </em>
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1rem",
            fontWeight: 300,
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          Whether you have a fully-formed brief or just a problem worth solving
          — start with a conversation. Discovery sprints are available
          immediately.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button className="btn btn-white">Start a project →</button>
          <button className="btn btn-outline-white">Schedule a call</button>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.5)",
            marginTop: "2.5rem",
          }}
        >
          ✓ CAC Registered &nbsp;·&nbsp; Milestone billing &nbsp;·&nbsp; Full
          IP transfer
        </div>
      </div>
    </section>
  );
}
