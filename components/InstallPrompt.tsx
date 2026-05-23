'use client';

import { useEffect, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const seen = window.localStorage.getItem('doce-install-dismissed');
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      if (!seen) setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', onPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onPrompt);
  }, []);

  if (!visible || !deferred) return null;

  return (
    <div className="fixed inset-x-3 bottom-24 z-50 animate-rise">
      <div className="glass-strong flex items-center gap-3 px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ethereal-dawn text-white shadow-glow font-serif">
          12
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-ink">Instalar Comunidad Doce</p>
          <p className="text-xs text-ink-variant">Acceso rápido y modo sin conexión.</p>
        </div>
        <button
          type="button"
          className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white"
          onClick={async () => {
            await deferred.prompt();
            const { outcome } = await deferred.userChoice;
            window.localStorage.setItem('doce-install-dismissed', outcome);
            setVisible(false);
            setDeferred(null);
          }}
        >
          Instalar
        </button>
        <button
          type="button"
          aria-label="Descartar"
          className="rounded-full p-1 text-ink-variant hover:bg-white/60"
          onClick={() => {
            window.localStorage.setItem('doce-install-dismissed', '1');
            setVisible(false);
          }}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
