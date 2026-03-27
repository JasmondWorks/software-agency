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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className="navbar"
        style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}
      >
        <Link href="/" className="navbar-logo">
          Randora<span style={{ color: "var(--highlight)" }}>.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta-btn">
          <button className="btn btn-accent btn-accent--sm">
            Start a project
          </button>
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span style={{ width: "22px" }} />
          <span style={{ width: "22px" }} />
          <span style={{ width: "14px" }} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${open ? " sidebar-overlay--open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar${open ? " sidebar--open" : ""}`}>
        <div className="sidebar-header">
          <span className="navbar-logo">
            Randora<span style={{ color: "var(--highlight)" }}>.</span>
          </span>
          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sidebar-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{ textDecoration: "none", marginTop: "2rem" }}
        >
          <button className="btn btn-accent btn-accent--full">
            Start a project →
          </button>
        </a>
      </aside>
    </>
  );
}
