import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        padding: "2.5rem 2.5rem",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.2rem",
            color: "var(--text)",
          }}
        >
          Randora<span style={{ color: "var(--highlight)" }}>.</span>
        </div>

        <p style={{ color: "var(--muted)", fontSize: "0.78rem" }}>
          © {new Date().getFullYear()} Randora Ltd. CAC Registered. Lagos, Nigeria.
        </p>

        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted)",
                fontSize: "0.78rem",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
