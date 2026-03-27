"use client";

import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--bg2)" }}
    >
      <div className="container">
        <SectionHeader
          tag="What we do"
          heading={
            <>
              Built for real scale.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
                Secured by default.
              </em>
            </>
          }
          sub="We don't just ship features — we architect systems that grow with you. Every product leaves our hands production-ready."
        />

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.num}
              style={{
                background: "var(--card)",
                padding: "2rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--bg2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--card)")
              }
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  color: "var(--muted)",
                  marginBottom: "1.2rem",
                }}
              >
                {service.num}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.6rem",
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {service.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "1.2rem",
                }}
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "100px",
                      border: "1px solid var(--border2)",
                      color: "var(--muted)",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
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
}
