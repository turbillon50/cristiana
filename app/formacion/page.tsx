import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = { title: 'Formación' };

const tracks = [
  {
    name: 'Fundamentos',
    progress: 78,
    next: 'Identidad en Cristo · 24 min',
    gradient: 'linear-gradient(135deg,#c3c0ff,#635bff)',
  },
  {
    name: 'Liderazgo Servidor',
    progress: 42,
    next: 'El corazón del líder · 32 min',
    gradient: 'linear-gradient(135deg,#ffddb4,#ffb68f)',
  },
  {
    name: 'Teología Práctica',
    progress: 16,
    next: 'La oración como hábito · 28 min',
    gradient: 'linear-gradient(135deg,#e2dfff,#feae2c)',
  },
];

function Ring({ value }: { value: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <svg viewBox="0 0 60 60" className="h-14 w-14 -rotate-90">
      <circle cx="30" cy="30" r={r} fill="none" stroke="rgba(99,91,255,0.15)" strokeWidth="5" />
      <circle
        cx="30"
        cy="30"
        r={r}
        fill="none"
        stroke="url(#ring)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c - dash}`}
      />
      <defs>
        <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#635bff" />
          <stop offset="100%" stopColor="#ffb68f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function FormacionPage() {
  return (
    <>
      <AtmosphericBackdrop />
      <main className="mx-auto max-w-md px-5 pt-10 pb-32 safe-top">
        <span className="label-tiny">Academia</span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-ink">
          Formación <em className="not-italic text-brand-deep">integral.</em>
        </h1>
        <p className="mt-2 text-sm text-ink-variant">
          Avanza en tu camino de discipulado, liderazgo y servicio.
        </p>

        <section className="mt-8 space-y-4">
          {tracks.map((t) => (
            <article key={t.name} className="glass overflow-hidden">
              <div className="h-24 w-full" style={{ backgroundImage: t.gradient }} />
              <div className="flex items-center gap-4 p-5">
                <div className="relative">
                  <Ring value={t.progress} />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-ink">
                    {t.progress}%
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-lg text-ink">{t.name}</h2>
                  <p className="text-xs text-ink-variant">Siguiente: {t.next}</p>
                </div>
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white"
                  aria-label={`Continuar ${t.name}`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
      <BottomNav />
    </>
  );
}
