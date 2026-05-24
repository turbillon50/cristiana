import Link from 'next/link';
import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BottomNav } from '@/components/BottomNav';
import { InstallPrompt } from '@/components/InstallPrompt';

export const metadata: Metadata = {
  title: 'Bienvenido',
  description: 'Descubre la visión, los pilares y el camino de crecimiento de Comunidad Doce.',
};

const pillars = [
  {
    title: 'Amor Incondicional',
    body: 'Nos guiamos por el amor de Cristo, transformando corazones a través de la compasión y el servicio genuino a los demás.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    quote: '“Unidos por el mismo propósito.”',
  },
  {
    title: 'Formación Integral',
    body: 'Programas de academia diseñados para el desarrollo teológico y práctico de nuevos líderes.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M3 7.5 12 4l9 3.5L12 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 9.5V14c0 1.7 2.7 3 6 3s6-1.3 6-3V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    quote: '“Sabiduría que se vive, no solo que se aprende.”',
  },
  {
    title: 'Ministerios en Acción',
    body: 'Eficiencia en la coordinación de ministerios y servicios eclesiásticos, sirviendo con orden y propósito.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path d="M4 12a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6 12v6a2 2 0 0 0 2 2h2v-6H6Zm12 0v6a2 2 0 0 1-2 2h-2v-6h4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    quote: '“Cada don, una misión.”',
  },
];

export default function WelcomePage() {
  return (
    <>
      <AtmosphericBackdrop variant="default" />
      <main className="mx-auto max-w-md px-5 pt-12 pb-32 safe-top">
        <header className="flex items-center justify-between">
          <span className="label-tiny inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Bienvenido a casa
          </span>
          <Link
            href="/login"
            className="text-xs font-semibold text-ink-variant hover:text-brand"
          >
            Iniciar sesión
          </Link>
        </header>

        <section className="mt-8 animate-rise">
          <h1 className="font-serif text-[34px] leading-[1.1] text-ink text-balance">
            Formamos vidas,
            <br />
            <em className="not-italic">levantamos</em>
            <br />
            <span className="text-brand-deep">líderes.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-variant">
            Descubre una comunidad diseñada para el crecimiento espiritual profundo, la
            conexión humana genuina y el liderazgo con propósito.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Link href="/login" className="btn-primary">
              Empezar ahora
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="#pilares" className="btn-ghost">
              Nuestra visión
            </Link>
          </div>
        </section>

        <section className="mt-8 flex items-center justify-between rounded-2xl border border-white/60 bg-white/55 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="-ml-2 h-9 w-9 rounded-full border-2 border-white shadow-sm"
                style={{
                  marginLeft: i === 0 ? 0 : '-0.5rem',
                  backgroundImage:
                    i === 0
                      ? 'linear-gradient(135deg,#ffddb4,#ffb68f)'
                      : i === 1
                        ? 'linear-gradient(135deg,#c3c0ff,#635bff)'
                        : 'linear-gradient(135deg,#e2dfff,#feae2c)',
                }}
                aria-hidden
              />
            ))}
          </div>
          <div className="flex-1 pl-3">
            <p className="text-sm font-semibold text-ink">+1.200 miembros</p>
            <p className="text-xs text-ink-variant">Creciendo juntos esta semana</p>
          </div>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Activos
          </span>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-white/50 backdrop-blur-xl">
          <div className="relative aspect-[16/10] w-full">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(135deg,#e2dfff 0%,#c3c0ff 35%,#ffb68f 100%)',
              }}
            />
            <svg
              viewBox="0 0 320 200"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="40" y="40" width="240" height="120" rx="14" fill="rgba(255,255,255,0.35)" />
              <rect x="60" y="60" width="200" height="14" rx="6" fill="rgba(255,255,255,0.65)" />
              <rect x="60" y="84" width="140" height="10" rx="5" fill="rgba(255,255,255,0.5)" />
              {[0, 1, 2, 3, 4].map((i) => (
                <circle key={i} cx={70 + i * 24} cy={130} r="10" fill="rgba(255,255,255,0.7)" />
              ))}
              <path d="M0 200 Q160 160 320 200 Z" fill="url(#glow)" />
            </svg>
          </div>
          <div className="flex items-center justify-between gap-3 bg-brand/95 px-4 py-3 text-white">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] opacity-80">Crecimiento</p>
              <p className="text-xl font-semibold">12% esta semana</p>
              <p className="text-xs opacity-80">Impacto en la comunidad</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M5 17 11 11 14 14 19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </section>

        <section id="pilares" className="mt-12 text-center">
          <span className="label-tiny">Visión</span>
          <h2 className="mt-2 font-serif text-2xl text-ink">Nuestros pilares</h2>
          <div className="mx-auto mt-3 divider-soft" />
        </section>

        <section className="mt-6 space-y-4">
          {pillars.map((p) => (
            <article key={p.title} className="glass p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-fixed text-brand">
                {p.icon}
              </div>
              <h3 className="mt-3 font-serif text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-variant">{p.body}</p>
              <p className="mt-4 border-l-2 border-peach/70 pl-3 font-serif italic text-ink/80">
                {p.quote}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-white/60 bg-white/40 px-5 py-7 text-center backdrop-blur-xl">
          <p className="font-serif text-lg italic leading-relaxed text-ink/90">
            “Y Él mismo constituyó a unos, apóstoles; a otros, profetas; a otros,
            evangelistas; a otros, pastores y maestros…”
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-brand-deep/70">
            Efesios 4:11–12
          </p>
        </section>

        <section className="mt-10 text-center">
          <Link href="/login" className="btn-primary">
            Unirme a la comunidad
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </section>
      </main>
      <InstallPrompt />
      <BottomNav />
    </>
  );
}
