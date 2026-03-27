interface SectionHeaderProps {
  tag: string;
  heading: React.ReactNode;
  sub?: string;
  centered?: boolean;
}

export function SectionHeader({ tag, heading, sub, centered }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: centered ? "center" : "space-between",
        flexDirection: centered ? "column" : "row",
        marginBottom: "3rem",
        gap: "2rem",
        flexWrap: "wrap",
        textAlign: centered ? "center" : "left",
      }}
    >
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
      {sub && (
        <p
          style={{
            color: "var(--text2)",
            maxWidth: "460px",
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
