import Link from 'next/link';
import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = { title: 'Inicio' };

const stats = [
  { label: 'Miembros', value: '1.248', delta: '+12%', tone: 'brand' as const },
  { label: 'Líderes', value: '19', delta: '+3', tone: 'peach' as const },
  { label: 'Encuentros', value: '65', delta: 'este mes', tone: 'rose' as const },
  { label: 'Bautismos', value: '7', delta: 'esta semana', tone: 'brand' as const },
];

const followups = [
  { name: 'Daniela Reyes', stage: 'Discipulado · semana 4', avatar: 'linear-gradient(135deg,#ffddb4,#ffb68f)' },
  { name: 'Carlos Méndez', stage: 'Bienvenida · primer encuentro', avatar: 'linear-gradient(135deg,#c3c0ff,#635bff)' },
  { name: 'Sofía Vargas', stage: 'Formación · módulo 2', avatar: 'linear-gradient(135deg,#e2dfff,#feae2c)' },
  { name: 'Mateo Hernández', stage: 'Servicio · ministerio niños', avatar: 'linear-gradient(135deg,#ffb955,#be5400)' },
];

const lessons = [
  { title: 'Identidad en Cristo', length: '24 min', module: 'Formación I' },
  { title: 'El corazón del líder servidor', length: '32 min', module: 'Liderazgo' },
  { title: 'Vida en comunidad', length: '18 min', module: 'Fundamentos' },
];

export default function DashboardPage() {
  return (
    <>
      <AtmosphericBackdrop />
      <main className="mx-auto max-w-md px-5 pt-10 pb-32 safe-top">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-full border-2 border-white/70 shadow-glass"
              style={{ backgroundImage: 'linear-gradient(135deg,#c3c0ff,#635bff)' }}
              aria-hidden
            />
            <div>
              <p className="label-tiny">¡Buenos días,</p>
              <p className="font-serif text-lg text-ink">Pastor Adari!</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Notificaciones"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/55 backdrop-blur-xl text-ink-variant"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-peach" />
          </button>
        </header>

        <section className="mt-7 glass overflow-hidden p-5">
          <div className="flex items-center justify-between">
            <span className="label-tiny">Formación de hoy</span>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> En vivo 19:00
            </span>
          </div>
          <h2 className="mt-3 font-serif text-2xl leading-tight text-ink">
            “El corazón del líder servidor”
          </h2>
          <p className="mt-2 text-sm text-ink-variant">
            Encuentro semanal · 24 líderes confirmados · Sala 12
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Link href="/formacion" className="btn-primary text-xs">
              Unirme
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button className="btn-ghost text-xs">Material previo</button>
          </div>
        </section>

        <section className="mt-7">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-ink">Resumen</h3>
            <Link href="#" className="text-xs font-semibold text-brand">
              Ver detalle
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="glass p-4">
                <p className="label-tiny">{s.label}</p>
                <p className="mt-2 font-serif text-3xl text-ink">{s.value}</p>
                <p
                  className={
                    s.tone === 'brand'
                      ? 'mt-1 text-xs font-semibold text-brand'
                      : s.tone === 'peach'
                        ? 'mt-1 text-xs font-semibold text-peach-deep'
                        : 'mt-1 text-xs font-semibold text-rose'
                  }
                >
                  {s.delta}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-ink">Crecimiento</h3>
            <span className="chip">Últimas 8 semanas</span>
          </div>
          <div className="mt-4 glass p-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="label-tiny">Crecimiento semanal</p>
                <p className="mt-1 font-serif text-3xl text-ink">+12%</p>
                <p className="text-xs text-ink-variant">vs. semana anterior</p>
              </div>
              <svg viewBox="0 0 200 80" className="h-20 w-40">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#635bff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 60 L25 50 L50 55 L75 38 L100 42 L125 25 L150 30 L175 14 L200 18 L200 80 L0 80 Z"
                  fill="url(#g)"
                />
                <path
                  d="M0 60 L25 50 L50 55 L75 38 L100 42 L125 25 L150 30 L175 14 L200 18"
                  fill="none"
                  stroke="#493ee5"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="mt-5 flex justify-between text-[10px] uppercase tracking-wider text-ink-variant/70">
              {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'].map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-ink">Personas en seguimiento</h3>
            <Link href="/personas" className="text-xs font-semibold text-brand">
              Todas
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {followups.map((p) => (
              <article
                key={p.name}
                className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/55 p-3.5 backdrop-blur-xl"
              >
                <div
                  className="h-11 w-11 flex-none rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundImage: p.avatar }}
                  aria-hidden
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">{p.name}</p>
                  <p className="text-xs text-ink-variant">{p.stage}</p>
                </div>
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-fixed text-brand"
                  aria-label={`Abrir ficha de ${p.name}`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl text-ink">Continúa formándote</h3>
            <Link href="/formacion" className="text-xs font-semibold text-brand">
              Academia
            </Link>
          </div>
          <div className="scroll-snap-x mt-4 flex gap-4 overflow-x-auto pb-2">
            {lessons.map((l, i) => (
              <article
                key={l.title}
                className="glass relative w-64 flex-none overflow-hidden p-0"
              >
                <div
                  className="h-28 w-full"
                  style={{
                    backgroundImage:
                      i === 0
                        ? 'linear-gradient(135deg,#c3c0ff,#635bff)'
                        : i === 1
                          ? 'linear-gradient(135deg,#ffddb4,#ffb68f)'
                          : 'linear-gradient(135deg,#e2dfff,#feae2c)',
                  }}
                />
                <div className="p-4">
                  <span className="label-tiny">{l.module}</span>
                  <h4 className="mt-2 font-serif text-lg leading-tight text-ink">
                    {l.title}
                  </h4>
                  <p className="mt-1 text-xs text-ink-variant">{l.length}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/60 bg-white/40 px-5 py-6 text-center backdrop-blur-xl">
          <p className="font-serif text-lg italic leading-relaxed text-ink/90 text-balance">
            “Y Él mismo constituyó a unos, apóstoles; a otros, profetas; a otros,
            evangelistas; a otros, pastores y maestros.”
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-brand-deep/70">
            Efesios 4:11
          </p>
        </section>
      </main>
      <BottomNav />
    </>
  );
}
