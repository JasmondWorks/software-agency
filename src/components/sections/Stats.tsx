import { stats } from "@/lib/data";

export function Stats() {
  return (
    <div className="section-sm" style={{ background: "var(--accent)" }}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
