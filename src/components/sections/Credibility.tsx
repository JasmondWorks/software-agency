import { credibilityItems } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Credibility() {
  return (
    <section className="section" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <SectionHeader
          tag="Why trust us"
          heading={
            <>
              Built to be
              <br />
              <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
                accountable.
              </em>
            </>
          }
          sub="We put our standards in writing — before the project starts and after it ends."
        />

        <div className="grid-3">
          {credibilityItems.map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.8rem",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                  background: item.bg,
                }}
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "var(--text)",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
