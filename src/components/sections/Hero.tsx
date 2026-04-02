import Image from "next/image";

export function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-5 sm:px-8 lg:px-10">
      <section className="relative flex flex-col items-start justify-center pt-24 pb-12 md:pt-28 md:pb-16 min-h-svh">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 text-xs text-zinc-950 font-semibold tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 block shrink-0" />
          CAC Registered · Lagos, Nigeria
        </div>

        {/* Heading */}
        <h1 className="font-sans text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight max-w-[700px] mb-5 text-zinc-950">
          We build digital products that{" "}
          <em className="italic text-zinc-600">actually</em>{" "}
          scale.
        </h1>

        {/* Subtext */}
        <p className="max-w-[520px] text-zinc-500 text-lg leading-relaxed mb-8 font-light">
          A multi-disciplinary team of engineers and designers building secure,
          AI-powered digital products for startups and enterprises across Africa
          and beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 flex-wrap">
          <a href="#contact">
            <button className="bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold tracking-wide transition-colors">
              Start a project →
            </button>
          </a>
          <a href="#services">
            <button className="bg-transparent border border-zinc-300 hover:border-zinc-400 text-zinc-950 px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold tracking-wide transition-colors">
              View our work
            </button>
          </a>
        </div>

        {/* Decorative circles and Illustration — desktop only */}
        <div
          className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 items-center justify-center w-[480px] h-[480px] pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full border border-zinc-200 opacity-50" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-zinc-300" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-zinc-100 border border-zinc-300/50" />
          <Image
            src="/images/Team-pana.svg"
            alt="Hero illustration"
            width={600}
            height={400}
            className="relative z-10 w-full max-w-[480px] h-auto drop-shadow-sm pointer-events-auto"
            priority
          />
        </div>
      </section>
    </div>
  );
}
