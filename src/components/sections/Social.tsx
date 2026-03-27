"use client";

import { socialLinks } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Social() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          tag="Follow us"
          heading={
            <>
              We build
              <br />
              <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
                in public.
              </em>
            </>
          }
          sub="Technical breakdowns, behind-the-scenes builds, and real insights into how we work — across every platform."
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.6rem 1.1rem",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--text2)",
                fontSize: "0.83rem",
                fontWeight: 500,
                background: "var(--card)",
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.background = "var(--bg2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "var(--card)";
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: link.color,
                  flexShrink: 0,
                }}
              />
              {link.label}
              {link.handle ? ` — ${link.handle}` : ""}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
