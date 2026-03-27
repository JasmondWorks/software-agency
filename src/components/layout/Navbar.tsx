"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "border-color 0.3s",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.5rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        Randora<span style={{ color: "var(--highlight)" }}>.</span>
      </Link>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact">
        <button
          style={{
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            padding: "0.55rem 1.4rem",
            borderRadius: "6px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "0.01em",
          }}
        >
          Start a project
        </button>
      </a>
    </nav>
  );
}
