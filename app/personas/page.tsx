import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BottomNav } from '@/components/BottomNav';

export const metadata: Metadata = { title: 'Personas' };

const groups = [
  { label: 'Discipulado', count: 24, color: '#635bff' },
  { label: 'Bienvenida', count: 18, color: '#ffb68f' },
  { label: 'Liderazgo', count: 12, color: '#feae2c' },
  { label: 'Ministerios', count: 31, color: '#be5400' },
];

const people = [
  { name: 'Daniela Reyes', stage: 'Discipulado · sem. 4', av: 'linear-gradient(135deg,#ffddb4,#ffb68f)' },
  { name: 'Carlos Méndez', stage: 'Bienvenida · primer encuentro', av: 'linear-gradient(135deg,#c3c0ff,#635bff)' },
  { name: 'Sofía Vargas', stage: 'Formación · módulo 2', av: 'linear-gradient(135deg,#e2dfff,#feae2c)' },
  { name: 'Mateo Hernández', stage: 'Servicio · ministerio niños', av: 'linear-gradient(135deg,#ffb955,#be5400)' },
  { name: 'Lucía Romero', stage: 'Discipulado · sem. 2', av: 'linear-gradient(135deg,#c3c0ff,#feae2c)' },
  { name: 'Andrés Quintero', stage: 'Liderazgo · mentoría', av: 'linear-gradient(135deg,#635bff,#be5400)' },
];

export default function PersonasPage() {
  return (
    <>
      <AtmosphericBackdrop />
      <main className="mx-auto max-w-md px-5 pt-10 pb-32 safe-top">
        <span className="label-tiny">Comunidad</span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-ink">
          Personas en <em className="not-italic text-brand-deep">camino.</em>
        </h1>

        <div className="mt-6">
          <label className="relative block">
            <span className="sr-only">Buscar persona</span>
            <input
              type="search"
              placeholder="Buscar por nombre o etapa…"
              className="w-full rounded-full border border-white/60 bg-white/60 px-12 py-3 text-sm text-ink placeholder:text-ink-variant/70 backdrop-blur-xl focus:border-brand focus:outline-none"
            />
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-variant"
              fill="none"
            >
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </label>
        </div>

        <div className="scroll-snap-x mt-6 flex gap-3 overflow-x-auto pb-1">
          {groups.map((g) => (
            <div key={g.label} className="glass w-36 flex-none p-4">
              <div className="flex items-center justify-between">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: g.color }}
                  aria-hidden
                />
                <span className="label-tiny">{g.count}</span>
              </div>
              <p className="mt-3 font-serif text-base text-ink">{g.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 space-y-3">
          {people.map((p) => (
            <article
              key={p.name}
              className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/55 p-3.5 backdrop-blur-xl"
            >
              <div
                className="h-11 w-11 flex-none rounded-full border-2 border-white shadow-sm"
                style={{ backgroundImage: p.av }}
                aria-hidden
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink">{p.name}</p>
                <p className="text-xs text-ink-variant">{p.stage}</p>
              </div>
              <span className="chip">Activo</span>
            </article>
          ))}
        </section>
      </main>
      <BottomNav />
    </>
  );
}
