import Link from 'next/link';
import type { Metadata } from 'next';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BrandMark } from '@/components/BrandMark';

export const metadata: Metadata = {
  title: 'Sin conexión',
  description: 'Sin conexión a internet. Tu camino sigue contigo.',
};

export default function OfflinePage() {
  return (
    <>
      <AtmosphericBackdrop variant="dawn" />
      <main className="mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center px-6 text-center">
        <BrandMark size="lg" variant="ghost" />
        <span className="label-tiny mt-6">Sin conexión</span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-ink">
          Tu camino sigue
          <br />
          <em className="not-italic text-brand-deep">contigo.</em>
        </h1>
        <p className="mt-3 max-w-xs text-sm text-ink-variant">
          No hay internet por ahora, pero las páginas que ya visitaste están guardadas
          para ti.
        </p>
        <Link href="/dashboard" className="btn-primary mt-8">
          Volver al inicio
        </Link>
      </main>
    </>
  );
}
