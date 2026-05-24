import Link from 'next/link';
import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = { title: 'Más' };

const sections = [
  { label: 'Mi perfil', href: '#' },
  { label: 'Mi formación', href: '/formacion' },
  { label: 'Ministerios', href: '#' },
  { label: 'Reporte de clases', href: '#' },
  { label: 'Configuración', href: '#' },
  { label: 'Notificaciones', href: '#' },
  { label: 'Privacidad', href: '#' },
  { label: 'Ayuda y soporte', href: '#' },
];

export default function MasPage() {
  return (
    <>
      <AtmosphericBackdrop />
      <main className="mx-auto max-w-md px-5 pt-10 pb-32 safe-top">
        <section className="glass flex items-center gap-4 p-5">
          <div
            className="h-14 w-14 rounded-full border-2 border-white shadow-glass"
            style={{ backgroundImage: 'linear-gradient(135deg,#c3c0ff,#635bff)' }}
            aria-hidden
          />
          <div className="flex-1">
            <span className="label-tiny">Pastor</span>
            <p className="font-serif text-xl text-ink">Pastor Adari</p>
            <p className="text-xs text-ink-variant">Líder · Comunidad Doce</p>
          </div>
          <Link
            href="/login"
            className="rounded-full bg-brand-fixed px-3 py-1.5 text-xs font-semibold text-brand-deep"
          >
            Editar
          </Link>
        </section>

        <section className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: 'Líderes', value: '19' },
            { label: 'Clases', value: '65' },
            { label: 'Activos', value: '265' },
          ].map((s) => (
            <div key={s.label} className="glass p-4 text-center">
              <p className="font-serif text-2xl text-ink">{s.value}</p>
              <p className="label-tiny mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        <nav className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-white/55 backdrop-blur-xl">
          {sections.map((s, i) => (
            <Link
              key={s.label}
              href={s.href}
              className={`flex items-center justify-between px-5 py-4 text-sm text-ink transition hover:bg-white/60 ${
                i !== sections.length - 1 ? 'border-b border-white/60' : ''
              }`}
            >
              <span>{s.label}</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-variant" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="mt-6 block w-full rounded-full border border-rose/40 bg-white/40 px-5 py-3.5 text-center text-sm font-semibold text-rose backdrop-blur transition hover:bg-white/70"
        >
          Cerrar sesión
        </Link>

        <p className="mt-6 text-center text-xs text-ink-variant/70">
          Comunidad Doce · v1.0.0 · PWA
        </p>
      </main>
      <BottomNav />
    </>
  );
}
