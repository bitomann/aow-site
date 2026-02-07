"use client";

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
      className="text-[12px] md:text-[13px]
 uppercase tracking-[0.38em]"
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
      className="p-6 md:p-7 border"
      style={{ borderColor: TOKENS.hairStrong, background: "rgba(255,255,255,0.02)" }}
    >
      <h3 className="text-lg md:text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-3 leading-snug" style={{ color: TOKENS.muted }}>
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: TOKENS.bg, color: TOKENS.fg }}>
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24 space-y-14">

        {/* HERO */}
        <header className="space-y-6">
          <Label>Arithmetic of War</Label>

          {/* Headline A */}
          <h1 className="text-5xl md:text-7xl font-semibold uppercase tracking-[-0.085em] leading-[0.88]">
            Discipline.
            <br />
            Mortality.
            <br />
            Intent.
          </h1>

          {/* Body A */}
          <p className="max-w-2xl leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
  Time is <span style={{ color: TOKENS.red }}>finite</span>. Assume scarcity. Calculate intensity. Signal over noise.
</p>


          <div className="pt-2">
            <Label red>Limited runs</Label>
          </div>
        </header>

        <DividerStrong />

        {/* MANIFESTO (Body C allowed) */}
        <section className="space-y-3 max-w-3xl">
          <Label>Manifesto</Label>
          <p className="leading-snug" style={{ color: "rgba(255,255,255,0.80)" }}>
            Time is finite. Spend it.
            <br />
            Discipline is subtraction.
            <br />
            Restraint outlasts intensity.
            <br />
            Precision over noise.
          </p>
        </section>

        <DividerStrong />

        {/* WHAT WE MAKE */}
        <section className="space-y-8">
          <Label>What we make</Label>
          <div className="grid md:grid-cols-3 gap-6">
            <Card title="Apparel">
              Minimal, durable, intentional. Built to age with use.
            </Card>
            <Card title="Training Systems">
              Strength without theatrics. Longevity without softness.
            </Card>
            <Card title="Recovery">
              Cold. Heat. Stillness. Measured, not marketed.
            </Card>
          </div>
        </section>

        <DividerStrong />

        {/* SCARCITY */}
        <section className="space-y-3 max-w-3xl">
          <Label>Scarcity</Label>
          <p className="leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
            We produce in limited runs. Nothing here is urgent.
            Everything here is intentional.
          </p>
        </section>

        <DividerStrong />

        {/* EMAIL (still local-only) */}
        <section className="space-y-6 max-w-md">
          <Label>Join the ledger</Label>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Received.");
            }}
            className="flex gap-4"
          >
            <input
              type="email"
              placeholder="you@domain.com"
              className="flex-1 bg-transparent border px-4 py-3 text-[#e8e3d7] placeholder-[rgba(255,255,255,0.35)]"
              style={{ borderColor: TOKENS.hairStrong }}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 border uppercase tracking-[0.22em] text-[12px]"
              style={{ borderColor: TOKENS.fg }}
            >
              Enter
            </button>
          </form>

          <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
            Drops are rare. Noise is not.
          </p>
        </section>

      </div>
    </main>
  );
}
