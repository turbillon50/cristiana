'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BrandMark } from '@/components/BrandMark';

export default function SplashPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-between overflow-hidden px-6 pb-10 pt-16 safe-top">
      <AtmosphericBackdrop variant="dawn" />

      <div className="flex w-full flex-1 flex-col items-center justify-center text-center animate-rise">
        <BrandMark size="xl" variant="gradient" className="mb-8 animate-breathe" />
        <p className="label-tiny mb-3">Comunidad Doce</p>
        <h1 className="font-serif text-3xl leading-tight text-ink text-balance">
          Formamos vidas,
          <br />
          <em className="not-italic text-brand-deep">levantamos líderes.</em>
        </h1>
        <p className="mt-4 max-w-xs text-sm text-ink-variant">
          Un ecosistema de formación espiritual, comunidad y propósito.
        </p>

        <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-deep/60">
          <span className="h-px w-8 bg-brand-deep/30" />
          {ready ? 'listo' : 'cargando'}
          <span className="h-px w-8 bg-brand-deep/30" />
        </div>
      </div>

      <div className="w-full max-w-sm animate-rise [animation-delay:200ms]">
        <Link
          href="/welcome"
          className="btn-primary w-full"
          aria-disabled={!ready}
          style={!ready ? { opacity: 0.6, pointerEvents: 'none' } : undefined}
        >
          Entrar a la Comunidad
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <p className="mt-4 text-center text-xs text-ink-variant/70">
          Efesios 4:11–12 · &ldquo;Y Él mismo constituyó a unos, apóstoles…&rdquo;
        </p>
      </div>
    </main>
  );
}
