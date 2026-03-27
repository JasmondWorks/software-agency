import { packages } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Packages() {
  return (
    <section id="packages" className="section">
      <div className="container">
        <SectionHeader
          tag="Pricing"
          heading={
            <>
              Transparent
              <br />
              <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
                packages.
              </em>
            </>
          }
          sub="No surprise invoices. Every engagement starts with a clear scope, milestone structure, and agreed deliverables."
        />

        <div className="grid-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                background: "var(--card)",
                border: pkg.featured
                  ? "1.5px solid var(--highlight)"
                  : "1px solid var(--border)",
                borderRadius: "12px",
                padding: "2.2rem",
                position: "relative",
                boxShadow: "var(--shadow)",
              }}
            >
              {pkg.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--highlight)",
                    color: "#fff",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.28rem 0.9rem",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  marginBottom: "0.3rem",
                  color: "var(--text)",
                }}
              >
                {pkg.name}
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.82rem",
                  marginBottom: "1.8rem",
                  lineHeight: 1.5,
                }}
              >
                {pkg.description}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.2rem",
                  color: "var(--text)",
                  marginBottom: "0.25rem",
                }}
              >
                {pkg.price}
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.78rem",
                  marginBottom: "2rem",
                }}
              >
                {pkg.period}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                  marginBottom: "2rem",
                }}
              >
                {pkg.features.map((feature) => (
                  <li
                    key={feature.label}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: feature.included ? "var(--text2)" : "var(--muted)",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        minWidth: "16px",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2px",
                        fontSize: "9px",
                        fontWeight: 700,
                        background: feature.included
                          ? "var(--teal-light)"
                          : "var(--bg2)",
                        color: feature.included
                          ? "var(--teal)"
                          : "var(--muted)",
                        border: feature.included
                          ? "1px solid rgba(15,118,110,0.2)"
                          : "1px solid var(--border)",
                      }}
                    >
                      {feature.included ? "✓" : ""}
                    </span>
                    {feature.label}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  background: pkg.featured ? "var(--highlight)" : "transparent",
                  color: pkg.featured ? "#fff" : "var(--text)",
                  border: pkg.featured ? "none" : "1.5px solid var(--border2)",
                  transition: "opacity 0.2s",
                }}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            fontSize: "0.82rem",
            marginTop: "2rem",
          }}
        >
          International pricing available in USD · Custom enterprise quotes on
          request
        </p>
      </div>
    </section>
  );
}
