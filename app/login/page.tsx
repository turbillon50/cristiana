'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AtmosphericBackdrop } from '@/components/AtmosphericBackdrop';
import { BrandMark } from '@/components/BrandMark';

type Mode = 'login' | 'register';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('login');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <AtmosphericBackdrop variant="default" />
      <main className="mx-auto flex min-h-[100dvh] max-w-md flex-col px-5 pt-10 pb-10 safe-top">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Volver"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/55 backdrop-blur-xl text-ink-variant hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path d="M14 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <BrandMark size="sm" variant="ghost" />
        </header>

        <section className="mt-10 animate-rise">
          <span className="label-tiny">
            {mode === 'login' ? 'Bienvenido de nuevo' : 'Bienvenido a casa'}
          </span>
          <h1 className="mt-2 font-serif text-3xl leading-tight text-ink">
            {mode === 'login' ? (
              <>
                Continúa tu
                <br />
                <em className="not-italic text-brand-deep">camino.</em>
              </>
            ) : (
              <>
                Empieza tu
                <br />
                <em className="not-italic text-brand-deep">historia.</em>
              </>
            )}
          </h1>
          <p className="mt-3 text-sm text-ink-variant">
            {mode === 'login'
              ? 'Ingresa para continuar formándote y sirviendo en comunidad.'
              : 'Únete a una comunidad que crece, aprende y sirve unida.'}
          </p>
        </section>

        <div className="mt-7 flex items-center gap-1 rounded-full border border-white/60 bg-white/55 p-1 backdrop-blur-xl">
          <button
            type="button"
            data-active={mode === 'login'}
            className="pill-tab flex-1"
            onClick={() => setMode('login')}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            data-active={mode === 'register'}
            className="pill-tab flex-1"
            onClick={() => setMode('register')}
          >
            Crear cuenta
          </button>
        </div>

        <form
          className="mt-8 flex flex-1 flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            window.setTimeout(() => router.push('/dashboard'), 700);
          }}
        >
          {mode === 'register' && (
            <label className="block animate-rise">
              <span className="label-tiny">Nombre completo</span>
              <input
                required
                autoComplete="name"
                placeholder="Tu nombre"
                className="input-line"
                type="text"
              />
            </label>
          )}

          <label className="block">
            <span className="label-tiny">Correo electrónico</span>
            <input
              required
              autoComplete="email"
              placeholder="tu@correo.com"
              className="input-line"
              type="email"
            />
          </label>

          <label className="block">
            <span className="label-tiny">Contraseña</span>
            <input
              required
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              placeholder="••••••••"
              className="input-line"
              type="password"
              minLength={6}
            />
          </label>

          {mode === 'login' && (
            <div className="flex items-center justify-between text-xs">
              <label className="inline-flex items-center gap-2 text-ink-variant">
                <input type="checkbox" className="h-3.5 w-3.5 accent-brand" /> Recuérdame
              </label>
              <Link href="#" className="font-semibold text-brand hover:text-brand-deep">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="btn-primary mt-2 w-full disabled:opacity-70"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Conectando…
              </>
            ) : mode === 'login' ? (
              <>
                Entrar
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            ) : (
              <>
                Crear mi cuenta
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </>
            )}
          </button>

          <div className="flex items-center gap-3 text-xs text-ink-variant/80">
            <span className="h-px flex-1 bg-outline/40" />
            o continúa con
            <span className="h-px flex-1 bg-outline/40" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="btn-ghost text-xs">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.5 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-2H12Z"
                />
              </svg>
              Google
            </button>
            <button type="button" className="btn-ghost text-xs">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M16.4 12.7c0-2.7 2.2-4 2.3-4-1.3-1.8-3.2-2.1-3.9-2.1-1.7-.2-3.3 1-4.2 1s-2.2-1-3.6-1c-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.4 1.4 11.1 1 1.3 2.1 2.8 3.6 2.8 1.4-.1 2-.9 3.7-.9s2.2.9 3.7.9c1.5 0 2.5-1.4 3.4-2.7 1.1-1.6 1.5-3 1.5-3.1-.1 0-2.9-1.1-2.9-4.3Zm-2.7-8c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5Z" />
              </svg>
              Apple
            </button>
          </div>

          <p className="mt-auto text-center text-xs text-ink-variant">
            Al continuar aceptas nuestros{' '}
            <Link href="#" className="font-semibold text-brand">
              Términos
            </Link>{' '}
            y{' '}
            <Link href="#" className="font-semibold text-brand">
              Privacidad
            </Link>
            .
          </p>
        </form>
      </main>
    </>
  );
}
