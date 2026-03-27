interface SectionHeaderProps {
  tag: string;
  heading: React.ReactNode;
  sub?: string;
  centered?: boolean;
}

export function SectionHeader({
  tag,
  heading,
  sub,
  centered,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "section-header--centered" : "section-header"}>
      <div>
        <div
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--muted)",
            fontWeight: 600,
            marginBottom: "0.6rem",
          }}
        >
          {tag}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          {heading}
        </h2>
      </div>
      {sub && <p className="section-header-sub">{sub}</p>}
    </div>
  );
}
