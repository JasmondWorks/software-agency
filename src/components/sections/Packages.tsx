import { packages } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Packages() {
  return (
    <section id="packages" className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto w-full">
        <SectionHeader
          tag="Pricing"
          heading={
            <>
              Transparent
              <br />
              <em className="italic text-zinc-500">packages.</em>
            </>
          }
          sub="No surprise invoices. Every engagement starts with a clear scope, milestone structure, and agreed deliverables."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-xl p-8 relative ${
                pkg.featured
                  ? "border-[1.5px] border-zinc-950"
                  : "border border-zinc-200"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}

              <div className="font-sans font-bold text-[1.4rem] tracking-tight mb-1.5 text-zinc-950">
                {pkg.name}
              </div>
              <div className="text-zinc-500 text-[0.82rem] mb-7 leading-relaxed">
                {pkg.description}
              </div>

              <div className="font-sans font-bold tracking-tight text-[2.2rem] text-zinc-950 mb-1">
                {pkg.price}
              </div>
              <div className="text-zinc-500 text-[0.78rem] mb-8">
                {pkg.period}
              </div>

              <ul className="list-none flex flex-col gap-3 mb-8 p-0">
                {pkg.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={`flex items-start gap-2.5 text-[0.875rem] ${
                      feature.included ? "text-zinc-700" : "text-zinc-400"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 min-w-[16px] rounded-full inline-flex items-center justify-center mt-[2px] text-[9px] font-bold ${
                        feature.included
                          ? "bg-zinc-100 text-zinc-900 border border-zinc-200"
                          : "bg-zinc-50 text-zinc-400 border border-zinc-200"
                      }`}
                    >
                      {feature.included ? "✓" : ""}
                    </span>
                    {feature.label}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full p-3 rounded-lg font-sans text-[0.875rem] font-semibold cursor-pointer tracking-[0.01em] transition-colors ${
                  pkg.featured
                    ? "bg-zinc-950 hover:bg-zinc-800 text-white border-none"
                    : "bg-transparent hover:bg-zinc-50 text-zinc-950 border-[1.5px] border-zinc-300"
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-[0.82rem] mt-8">
          International pricing available in USD · Custom enterprise quotes on
          request
        </p>
      </div>
    </section>
  );
}
