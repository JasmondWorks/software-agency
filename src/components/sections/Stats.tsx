import { stats } from "@/lib/data";

export function Stats() {
  return (
    <div style={{ background: "var(--accent)", padding: "3.5rem 2.5rem" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3rem",
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
                fontSize: "0.8rem",
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
  );
}
