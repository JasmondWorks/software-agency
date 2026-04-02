import { processSteps } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto w-full">
        <SectionHeader
          tag="Our process"
          heading={
            <>
              From idea
              <br />
              <em className="italic text-zinc-500">to production.</em>
            </>
          }
          sub="A consistent, documented process means you know exactly what's happening at every stage — no black boxes, no surprises."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="p-8 bg-zinc-50 border border-zinc-200 rounded-xl relative overflow-hidden group hover:border-zinc-300 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-zinc-950 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="font-sans font-bold text-5xl text-zinc-300 leading-none mb-4 tracking-[-0.02em]">
                {step.num}
              </div>
              <h4 className="font-bold text-[0.95rem] mb-2 text-zinc-950">
                {step.title}
              </h4>
              <p className="text-zinc-600 text-[0.85rem] leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
