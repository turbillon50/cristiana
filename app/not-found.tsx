import Link from 'next/link';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BrandMark } from '@/components/BrandMark';

export default function NotFound() {
  return (
    <>
      <AtmosphericBackdrop variant="dawn" />
      <main className="mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center px-6 text-center">
        <BrandMark size="lg" variant="ghost" />
        <span className="label-tiny mt-6">Página no encontrada</span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-ink">
          Aquí no hay
          <br />
          <em className="not-italic text-brand-deep">camino.</em>
        </h1>
        <p className="mt-3 max-w-xs text-sm text-ink-variant">
          Lo que buscas no existe o fue movido. Regresa a casa y sigue caminando.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Ir al inicio
        </Link>
      </main>
    </>
  );
}
