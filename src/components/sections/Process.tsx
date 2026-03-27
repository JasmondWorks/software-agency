import { processSteps } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section style={{ padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader
          tag="Our process"
          heading={
            <>
              From idea
              <br />
              <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
                to production.
              </em>
            </>
          }
          sub="A consistent, documented process means you know exactly what's happening at every stage — no black boxes, no surprises."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {processSteps.map((step) => (
            <div
              key={step.num}
              style={{
                padding: "2rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                boxShadow: "var(--shadow)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "var(--highlight)",
                  opacity: 0.15,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3rem",
                  color: "var(--border2)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {step.num}
              </div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                  color: "var(--text)",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
