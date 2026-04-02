"use client";

import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-zinc-50"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <SectionHeader
          tag="What we do"
          heading={
            <>
              Built for real scale.
              <br />
              <em className="italic text-zinc-500">Secured by default.</em>
            </>
          }
          sub="We don't just ship features — we architect systems that grow with you. Every product leaves our hands production-ready."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-zinc-200 border border-zinc-200 rounded-xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-white p-8 hover:bg-zinc-50 transition-colors"
            >
              <div className="font-sans text-[1.1rem] font-bold text-zinc-400 mb-5 tracking-tight">
                {service.num}
              </div>
              <h3 className="text-base font-bold mb-2.5 text-zinc-950 tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="text-zinc-600 text-[0.875rem] leading-relaxed font-light">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.7rem] px-2.5 py-1 rounded-full border border-zinc-300 text-zinc-500 font-medium tracking-[0.02em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
