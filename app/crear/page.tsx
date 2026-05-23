import Link from 'next/link';
import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = { title: 'Crear' };

const actions = [
  { label: 'Registrar persona', desc: 'Inicia un nuevo proceso de bienvenida', href: '/personas' },
  { label: 'Nuevo encuentro', desc: 'Agenda una reunión, célula o servicio', href: '/dashboard' },
  { label: 'Lección de academia', desc: 'Publica una nueva sesión de formación', href: '/formacion' },
  { label: 'Anuncio a la comunidad', desc: 'Comparte una palabra o aviso pastoral', href: '/dashboard' },
];

export default function CrearPage() {
  return (
    <>
      <AtmosphericBackdrop />
      <main className="mx-auto max-w-md px-5 pt-10 pb-32 safe-top">
        <span className="label-tiny">Acciones</span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-ink">
          ¿Qué quieres <em className="not-italic text-brand-deep">crear?</em>
        </h1>
        <p className="mt-2 text-sm text-ink-variant">
          Construye comunidad, formación y servicio desde un solo lugar.
        </p>

        <div className="mt-8 grid gap-3">
          {actions.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="glass flex items-center gap-4 p-5 transition hover:bg-white/75"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-fixed text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-serif text-lg text-ink">{a.label}</p>
                <p className="text-xs text-ink-variant">{a.desc}</p>
              </div>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-variant" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
