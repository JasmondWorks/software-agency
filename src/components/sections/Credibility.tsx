import { credibilityItems } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Landmark, ShieldCheck, FileText, BarChart2, Zap, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "🏛": <Landmark className="w-6 h-6 text-blue-600" />,
  "🔒": <ShieldCheck className="w-6 h-6 text-teal-600" />,
  "📄": <FileText className="w-6 h-6 text-amber-600" />,
  "📊": <BarChart2 className="w-6 h-6 text-pink-600" />,
  "⚡": <Zap className="w-6 h-6 text-blue-600" />,
  "🌍": <Globe className="w-6 h-6 text-green-600" />,
};

export function Credibility() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-zinc-50">
      <div className="max-w-[1100px] mx-auto w-full">
        <SectionHeader
          tag="Why trust us"
          heading={
            <>
              Built to be
              <br />
              <em className="italic text-zinc-500">accountable.</em>
            </>
          }
          sub="We put our standards in writing — before the project starts and after it ends."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {credibilityItems.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                style={{ background: item.bg }}
              >
                {iconMap[item.icon] || <span className="text-xl">{item.icon}</span>}
              </div>
              <h4 className="font-bold text-[1.05rem] mb-3 text-zinc-950 relative z-10">
                {item.title}
              </h4>
              <p className="text-zinc-500 text-[0.9rem] leading-relaxed font-light relative z-10">
                {item.description}
              </p>
              
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 p-16 bg-linear-to-bl from-blue-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
