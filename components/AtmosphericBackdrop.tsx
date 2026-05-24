export function AtmosphericBackdrop({ variant = 'default' }: { variant?: 'default' | 'dawn' | 'soft' }) {
  if (variant === 'dawn') {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-mountain-dawn" />
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-brand-fixed-dim/50 blur-3xl animate-breathe" />
        <div className="absolute right-[-10%] top-1/4 h-80 w-80 rounded-full bg-peach-fixed/60 blur-3xl animate-breathe [animation-delay:-3s]" />
        <svg
          aria-hidden
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 800 240"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c3c0ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fcf8ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffb68f" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fcf8ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,180 L80,120 L160,160 L260,80 L360,140 L460,90 L560,150 L660,110 L760,160 L800,140 L800,240 L0,240 Z" fill="url(#m2)" />
          <path d="M0,200 L120,150 L220,180 L320,130 L420,170 L520,140 L620,180 L720,150 L800,170 L800,240 L0,240 Z" fill="url(#m1)" />
        </svg>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-fixed-dim/40 blur-3xl animate-breathe" />
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-peach-fixed/45 blur-3xl animate-breathe [animation-delay:-3s]" />
      <div className="absolute bottom-[-20%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-soft/15 blur-3xl" />
    </div>
  );
}
