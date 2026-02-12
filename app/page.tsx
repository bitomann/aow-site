"use client";

import Image from "next/image";

const TOKENS = {
  bg: "#0b0b0c",
  fg: "#e8e3d7",
  muted: "rgba(255,255,255,0.65)",
  hairStrong: "rgba(255,255,255,0.16)",
  red: "#b11226",
};

function DividerStrong() {
  return <div className="w-full h-px" style={{ background: TOKENS.hairStrong }} />;
}

function Label({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <div
      className="text-[18px] md:text-[19.5px] uppercase tracking-[0.38em]"
      style={{ color: red ? TOKENS.red : "rgba(255,255,255,0.55)" }}
    >
      {children}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="p-9 md:p-10 border"
      style={{ borderColor: TOKENS.hairStrong, background: "rgba(255,255,255,0.02)" }}
    >
      <h3 className="text-[27px] md:text-[30px] font-medium tracking-tight">{title}</h3>
      <p className="mt-3 text-2xl leading-snug" style={{ color: TOKENS.muted }}>
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
<div className="aow-ghost" />









  {/* CONTENT - centered */}
  <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-12 py-20 md:py-32 space-y-20 flex flex-col items-center text-center">
    {/* HERO */}
    <header className="space-y-6">
      <Label>Arithmetic of War</Label>

      <h1 className="text-[72px] md:text-[108px] font-semibold uppercase tracking-[-0.085em] leading-[0.88]">
        Discipline.
        <br />
        Mortality.
        <br />
        Intent.
      </h1>

      <p className="max-w-2xl mx-auto text-2xl leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
        Time Is <span style={{ color: TOKENS.red }}>Finite</span>. Assume Scarcity.
        Calculate Intensity. Signal Over Noise.
      </p>

      <div className="pt-2">
        <Label red>Limited runs</Label>
      </div>
    </header>

    {/* ...rest of your sections unchanged... */}
  </div>
</main>

  );
}
