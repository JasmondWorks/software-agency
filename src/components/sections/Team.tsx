"use client";

import { team } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const avatarColors: Record<string, { bg: string; color: string }> = {
  navy: { bg: "#e8eaf6", color: "#3949ab" },
  teal: { bg: "#e0f2f1", color: "#00796b" },
  coral: { bg: "#fbe9e7", color: "#bf360c" },
  blue: { bg: "#e3f2fd", color: "#1565c0" },
  rose: { bg: "#fce4ec", color: "#c62828" },
  amber: { bg: "#fff8e1", color: "#e65100" },
  green: { bg: "#e8f5e9", color: "#2e7d32" },
};

export function Team() {
  return (
    <section
      id="team"
      className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-zinc-50"
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <SectionHeader
          tag="The team"
          heading={
            <>
              Specialists.
              <br />
              <em className="italic text-zinc-500">Not generalists.</em>
            </>
          }
          sub="A bench of senior practitioners across every discipline — each a specialist, working together as one team."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {team.map((member) => {
            const av = avatarColors[member.color];
            return (
              <div
                key={member.id}
                className="bg-white border border-zinc-200 rounded-xl p-6 text-center hover:border-zinc-300 transition-colors"
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center font-sans text-[0.9rem] font-bold"
                  style={{ background: av.bg, color: av.color }}
                >
                  {member.initials}
                </div>

                {/* Founder badge */}
                {member.badge && (
                  <div className="inline-block text-[0.62rem] uppercase tracking-[0.06em] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 mb-1.5 font-semibold">
                    {member.badge}
                  </div>
                )}

                <h4 className="text-[0.88rem] font-bold mb-1 text-zinc-950">
                  {member.name}
                </h4>
                <div className="text-zinc-600 text-[0.72rem] font-semibold mb-1.5 tracking-[0.02em]">
                  {member.role}
                </div>
                <div className="text-zinc-500 text-[0.72rem] leading-relaxed">
                  {member.bio}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 justify-center mt-3">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[0.62rem] px-2 py-0.5 rounded-full bg-zinc-50 text-zinc-600 border border-zinc-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
