"use client";

import { team } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const avatarColors: Record<string, { bg: string; color: string }> = {
  navy: { bg: "#e8eaf6", color: "#3949ab" },
  teal: { bg: "#e0f2f1", color: "#00796b" },
  coral: { bg: "#fbe9e7", color: "#bf360c" },
  blue: { bg: "#e3f2fd", color: "#1565c0" },
  rose: { bg: "#fce4ec", color: "#c62828" },
  amber: { bg: "#fff8e1", color: "#e65100" },
  green: { bg: "#e8f5e9", color: "#2e7d32" },
};

export function Team() {
  return (
    <section
      id="team"
      style={{ background: "var(--bg2)", padding: "6rem 2.5rem" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader
          tag="The team"
          heading={
            <>
              Specialists.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--highlight)" }}>
                Not generalists.
              </em>
            </>
          }
          sub="A bench of senior practitioners across every discipline — each a specialist, working together as one team."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {team.map((member) => {
            const av = avatarColors[member.color];
            return (
              <div
                key={member.id}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.8rem",
                  textAlign: "center",
                  boxShadow: "var(--shadow)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    background: av.bg,
                    color: av.color,
                  }}
                >
                  {member.initials}
                </div>

                {/* Founder badge */}
                {member.badge && (
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      padding: "0.15rem 0.55rem",
                      borderRadius: "100px",
                      background: "var(--teal-light)",
                      color: "var(--teal)",
                      border: "1px solid rgba(15,118,110,0.2)",
                      marginBottom: "0.4rem",
                      fontWeight: 600,
                    }}
                  >
                    {member.badge}
                  </div>
                )}

                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "0.2rem",
                    color: "var(--text)",
                  }}
                >
                  {member.name}
                </h4>
                <div
                  style={{
                    color: "var(--highlight)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {member.role}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.75rem",
                    lineHeight: 1.4,
                  }}
                >
                  {member.bio}
                </div>

                {/* Skills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    justifyContent: "center",
                    marginTop: "0.8rem",
                  }}
                >
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.67rem",
                        padding: "0.18rem 0.5rem",
                        borderRadius: "100px",
                        background: "var(--highlight-light)",
                        color: "var(--highlight)",
                        border: "1px solid rgba(37,99,235,0.15)",
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
