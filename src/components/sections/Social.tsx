"use client";

import { socialLinks } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Social() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto w-full">
        <SectionHeader
          tag="Follow us"
          heading={
            <>
              We build
              <br />
              <em className="italic text-zinc-500">in public.</em>
            </>
          }
          sub="Technical breakdowns, behind-the-scenes builds, and real insights into how we work — across every platform."
        />

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 border border-zinc-200 rounded-lg text-zinc-600 text-[0.83rem] font-medium bg-white no-underline hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: link.color }}
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
