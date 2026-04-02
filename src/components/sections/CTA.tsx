export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-10 bg-zinc-950"
    >
      <div className="max-w-[680px] mx-auto text-center">
        <div className="inline-block text-[0.72rem] uppercase tracking-widest text-white/40 font-semibold mb-4">
          Let&apos;s work together
        </div>

        <h2 className="font-sans text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-4">
          Ready to build something{" "}
          <em className="italic text-white/50">serious?</em>
        </h2>

        <p className="text-white/60 text-base font-light mb-10 leading-relaxed">
          Whether you have a fully-formed brief or just a problem worth solving
          — start with a conversation. Discovery sprints are available
          immediately.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white hover:bg-zinc-100 text-zinc-950 font-bold px-8 py-3.5 rounded-lg text-[0.95rem] tracking-wide transition-colors">
            Start a project →
          </button>
          <button className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium px-8 py-3.5 rounded-lg text-[0.95rem] tracking-wide transition-colors">
            Schedule a call
          </button>
        </div>

        <div className="inline-flex items-center gap-2 border border-white/20 rounded-md px-4 py-2.5 text-xs text-white/50 mt-10">
          ✓ CAC Registered &nbsp;·&nbsp; Milestone billing &nbsp;·&nbsp; Full IP transfer
        </div>
      </div>
    </section>
  );
}
