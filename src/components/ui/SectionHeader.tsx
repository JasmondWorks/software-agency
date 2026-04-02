interface SectionHeaderProps {
  tag: string;
  heading: React.ReactNode;
  sub?: string;
  centered?: boolean;
}

export function SectionHeader({
  tag,
  heading,
  sub,
  centered,
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 mb-10 md:mb-12 ${
        centered
          ? "items-center text-center"
          : "items-start md:flex-row md:items-end md:justify-between md:gap-8"
      }`}
    >
      <div>
        <div className="inline-block text-[0.72rem] uppercase tracking-[0.12em] text-zinc-500 font-semibold mb-2.5">
          {tag}
        </div>
        <h2 className="font-sans text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-zinc-950">
          {heading}
        </h2>
      </div>
      {sub && (
        <p className={`text-zinc-600 text-[0.95rem] font-light leading-[1.75] ${centered ? "w-full" : "max-w-[460px] w-full"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
