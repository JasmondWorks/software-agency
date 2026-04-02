import { stats } from "@/lib/data";

export function Stats() {
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 relative overflow-hidden bg-zinc-950">
      {/* Background glow leveraging the new primary blue color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 text-center md:text-left divide-x-0 md:divide-x divide-zinc-800">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col ${i !== 0 ? 'md:pl-8 lg:pl-10' : ''}`}>
              <div className="font-sans text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none mb-3 bg-clip-text text-transparent bg-linear-to-br from-white via-white to-blue-500 drop-shadow-sm">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-[0.8rem] tracking-wider uppercase font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
