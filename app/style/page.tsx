"use client";

const TOKENS = {
  bg: "#0b0b0c",
  fg: "#e8e3d7",
  muted: "rgba(255,255,255,0.65)",
  hair: "rgba(255,255,255,0.10)",
  hairStrong: "rgba(255,255,255,0.16)",
  red: "#b11226", // blood red accent (controlled)
};

function Divider({ strong }: { strong?: boolean }) {
  return (
    <div
      className="w-full h-px"
      style={{ background: strong ? TOKENS.hairStrong : TOKENS.hair }}
    />
  );
}

function Label({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <div
      className="text-[11px] uppercase tracking-[0.38em]"
      style={{ color: red ? TOKENS.red : "rgba(255,255,255,0.55)" }}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] border"
      style={{ borderColor: TOKENS.hair, color: "rgba(255,255,255,0.65)" }}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  variant,
  children,
}: {
  title: string;
  variant: "thin" | "boxed";
  children: React.ReactNode;
}) {
  const base = "p-6 md:p-7";
  const styles =
    variant === "thin"
      ? { border: `1px solid ${TOKENS.hair}`, background: "transparent" }
      : { border: `1px solid ${TOKENS.hairStrong}`, background: "rgba(255,255,255,0.02)" };

  return (
    <div className={base} style={styles}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg md:text-xl font-medium tracking-tight">{title}</h3>
        <Pill>{variant}</Pill>
      </div>
      <p className="mt-3 leading-relaxed" style={{ color: TOKENS.muted }}>
        {children}
      </p>
    </div>
  );
}

export default function StyleSandbox() {
  return (
    <main
      className="min-h-screen"
      style={{ background: TOKENS.bg, color: TOKENS.fg }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24 space-y-14">
        {/* HEADER */}
        <header className="space-y-4">
          <Label>Style Sandbox</Label>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Arithmetic of War — violent minimal
          </h1>
          <p className="max-w-3xl leading-relaxed" style={{ color: TOKENS.muted }}>
            This page is your controlled lab. We choose a type system, spacing rhythm,
            divider density, card treatment, and a restrained blood-red accent.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Pill>no gradients</Pill>
            <Pill>no shadows</Pill>
            <Pill>tight rhythm</Pill>
            <Pill>red = signal</Pill>
          </div>
        </header>

        <Divider strong />

        {/* RED ACCENT RULES */}
        <section className="space-y-5">
          <Label red>Red Accent Rules</Label>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-6 border" style={{ borderColor: TOKENS.hair }}>
              <div className="text-xs uppercase tracking-[0.38em]" style={{ color: TOKENS.red }}>
                Approved
              </div>
              <ul className="mt-3 space-y-2 leading-relaxed" style={{ color: TOKENS.muted }}>
                <li>• labels: LIMITED / WARNING / CLASSIFIED</li>
                <li>• one key word in a sentence</li>
                <li>• scarcity indicator (drop, ledger)</li>
              </ul>
            </div>

            <div className="p-6 border" style={{ borderColor: TOKENS.hair }}>
              <div className="text-xs uppercase tracking-[0.38em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                Not Allowed
              </div>
              <ul className="mt-3 space-y-2 leading-relaxed" style={{ color: TOKENS.muted }}>
                <li>• big red blocks</li>
                <li>• red buttons as default</li>
                <li>• multiple red elements per section</li>
              </ul>
            </div>

            <div className="p-6 border" style={{ borderColor: TOKENS.hair }}>
              <div className="text-xs uppercase tracking-[0.38em]" style={{ color: TOKENS.red }}>
                Sample
              </div>
              <p className="mt-3 leading-relaxed" style={{ color: TOKENS.muted }}>
                Discipline is not motivation. It is{" "}
                <span style={{ color: TOKENS.red }}>arithmetic</span>.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* TYPOGRAPHY */}
        <section className="space-y-8">
          <Label>Typography</Label>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Headline A */}
            <div className="space-y-4">
              <Label>Headline A (tight / hostile)</Label>
              <h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-[-0.085em] leading-[0.9]">
                Discipline.
                <br />
                Mortality.
                <br />
                Intent.
              </h2>
              <p className="leading-snug" style={{ color: TOKENS.muted }}>
                Violence comes from compression, not volume.
              </p>
            </div>

            {/* Headline B */}
            <div className="space-y-4">
              <Label>Headline B (premium neutral)</Label>
              <h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-[-0.04em] leading-[0.98]">
                Discipline.
                <br />
                Mortality.
                <br />
                Intent.
              </h2>
              <p className="leading-relaxed" style={{ color: TOKENS.muted }}>
                Still expensive. Less aggressive.
              </p>
            </div>

            {/* Headline C */}
            <div className="space-y-4">
              <Label>Headline C (industrial)</Label>
              <h2 className="text-5xl md:text-6xl font-semibold uppercase tracking-[-0.10em] leading-[0.88]">
                DISCIPLINE
                <br />
                IS
                <br />
                ARITHMETIC
              </h2>
              <p className="leading-snug" style={{ color: TOKENS.muted }}>
                Cold metal. Use if you want it harsher.
              </p>
            </div>
          </div>

          <Divider />

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-3">
              <Label>Body A (tight)</Label>
              <p className="leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
                Everything costs time. Spend it like it’s scarce. Precision beats intensity.
                Quiet beats noise.
              </p>
            </div>

            <div className="space-y-3">
              <Label>Body B (neutral)</Label>
              <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Everything costs time. Spend it like it’s scarce. Precision beats intensity.
                Quiet beats noise.
              </p>
            </div>

            <div className="space-y-3">
              <Label>Body C (cut)</Label>
              <p className="leading-snug" style={{ color: "rgba(255,255,255,0.80)" }}>
                Time is finite. Spend it.
                <br />
                Discipline is subtraction.
                <br />
                Precision over noise.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* SPACING VISUALIZER (so you can actually see it) */}
        <section className="space-y-8">
          <Label>Spacing Visualizer</Label>
          <p className="max-w-3xl leading-relaxed" style={{ color: TOKENS.muted }}>
            Tailwind spacing classes only work when written correctly. Example:{" "}
            <span style={{ color: TOKENS.fg }}>space-y-8</span>. If you wrote{" "}
            <span style={{ color: TOKENS.red }}>space-y96</span> or{" "}
            <span style={{ color: TOKENS.red }}>space-y96</span> (missing hyphen),
            it will do nothing.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-6 border" style={{ borderColor: TOKENS.hair }}>
              <Label>space-y-2 (tight)</Label>
              <div className="mt-4 space-y-2">
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
              </div>
            </div>

            <div className="p-6 border" style={{ borderColor: TOKENS.hair }}>
              <Label>space-y-8 (default)</Label>
              <div className="mt-4 space-y-8">
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
              </div>
            </div>

            <div className="p-6 border" style={{ borderColor: TOKENS.hair }}>
              <Label>space-y-16 (loose)</Label>
              <div className="mt-4 space-y-16">
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
                <div className="h-8 border" style={{ borderColor: TOKENS.hair }} />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* CARDS */}
        <section className="space-y-8">
          <Label>Cards</Label>
          <div className="grid md:grid-cols-3 gap-6">
            <Card title="Apparel" variant="thin">
              Minimal, durable, intentional. Built to age with use.
            </Card>
            <Card title="Training Systems" variant="thin">
              Strength without theatrics. Longevity without softness.
            </Card>
            <Card title="Recovery" variant="boxed">
              Cold. Heat. Stillness. Measured, not marketed.
            </Card>
          </div>
        </section>

        <Divider />

        {/* CTA */}
        <section className="space-y-6">
          <Label>CTA styles</Label>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              className="px-6 py-3 border uppercase tracking-[0.22em] text-[12px]"
              style={{ borderColor: TOKENS.fg }}
            >
              Enter
            </button>

            <button
              className="px-6 py-3 border uppercase tracking-[0.22em] text-[12px]"
              style={{
                borderColor: TOKENS.hairStrong,
                color: TOKENS.fg,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              Join Ledger
            </button>

            <span className="text-[11px] uppercase tracking-[0.38em]" style={{ color: TOKENS.red }}>
              LIMITED RUNS
            </span>
          </div>
        </section>

        <Divider strong />

        <footer className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
          Open: <span style={{ color: TOKENS.fg }}>/style</span> — Pick: Headline (A/B/C),
          Body (A/B/C), Divider density (normal/strong), Cards (thin/boxed), Red usage (rare/moderate).
        </footer>
      </div>
    </main>
  );
}
