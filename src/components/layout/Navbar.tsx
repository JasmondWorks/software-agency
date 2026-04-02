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
        className={`fixed top-0 left-0 right-0 z-[100] px-5 sm:px-10 py-3.5 sm:py-4 flex items-center justify-between bg-white/90 backdrop-blur-md border-b transition-colors duration-300 ${
          scrolled ? "border-zinc-200" : "border-transparent"
        }`}
      >
        <Link href="/" className="font-sans font-bold text-2xl text-zinc-950 no-underline tracking-[-0.04em] leading-none">
          Randora<span className="text-zinc-950">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-zinc-500 hover:text-zinc-950 text-sm font-medium tracking-[0.01em] transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:block">
          <button className="bg-zinc-950 hover:bg-zinc-800 text-white rounded-md px-5 py-2 text-sm font-semibold tracking-[0.01em] transition-colors duration-200">
            Start a project
          </button>
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent cursor-pointer p-1.5"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block h-[2px] w-[22px] bg-zinc-950 rounded-sm" />
          <span className="block h-[2px] w-[22px] bg-zinc-950 rounded-sm" />
          <span className="block h-[2px] w-[14px] bg-zinc-950 rounded-sm" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/35 z-[200] backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[min(300px,82vw)] bg-white z-[201] p-7 flex flex-col border-l border-zinc-200 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-zinc-100">
          <span className="font-sans font-bold text-2xl text-zinc-950 tracking-[-0.04em] leading-none">
            Randora<span className="text-zinc-950">.</span>
          </span>
          <button
            className="bg-transparent border border-zinc-200 hover:border-zinc-300 cursor-pointer w-[30px] h-[30px] rounded-md flex items-center justify-center text-[0.8rem] text-zinc-500 hover:text-zinc-950 transition-colors duration-200"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-950 hover:text-zinc-500 text-base font-medium py-3.5 border-b border-zinc-100 flex items-center justify-between tracking-[-0.01em] transition-colors duration-200 after:content-['→'] after:opacity-30 after:text-[0.85rem]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="no-underline mt-8 block"
        >
          <button className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold rounded-lg px-6 py-3.5 text-[0.95rem] tracking-[0.01em] transition-colors duration-200">
            Start a project →
          </button>
        </a>
      </aside>
    </>
  );
}
