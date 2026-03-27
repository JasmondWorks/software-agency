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
      className="section"
      style={{ background: "var(--bg2)" }}
    >
      <div className="container">
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

        <div className="grid-team">
          {team.map((member) => {
            const av = avatarColors[member.color];
            return (
              <div
                key={member.id}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.5rem 1.25rem",
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
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    margin: "0 auto 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
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
                      fontSize: "0.62rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "100px",
                      background: "var(--teal-light)",
                      color: "var(--teal)",
                      border: "1px solid rgba(15,118,110,0.2)",
                      marginBottom: "0.35rem",
                      fontWeight: 600,
                    }}
                  >
                    {member.badge}
                  </div>
                )}

                <h4
                  style={{
                    fontSize: "0.88rem",
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
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    marginBottom: "0.4rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {member.role}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.72rem",
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
                    gap: "0.3rem",
                    justifyContent: "center",
                    marginTop: "0.75rem",
                  }}
                >
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.62rem",
                        padding: "0.15rem 0.45rem",
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
