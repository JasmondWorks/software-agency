import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="py-8 sm:py-9 lg:py-10 px-5 sm:px-8 lg:px-10 border-t border-zinc-200 bg-white">
      <div className="max-w-[1100px] mx-auto w-full flex flex-wrap items-center justify-between gap-3">
        <div className="font-sans font-bold text-[1.2rem] text-zinc-950 tracking-[-0.02em]">
          Randora<span className="text-zinc-950">.</span>
        </div>

        <p className="text-zinc-500 text-[0.78rem]">
          © {new Date().getFullYear()} Randora Ltd. CAC Registered. Lagos,
          Nigeria.
        </p>

        <nav className="flex gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 text-[0.78rem] no-underline font-medium hover:text-zinc-950 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
