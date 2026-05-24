'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

type Item = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const stroke = 'stroke-current';

const items: Item[] = [
  {
    href: '/dashboard',
    label: 'Inicio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3.5 11.5 12 4l8.5 7.5" className={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.5V19a1 1 0 0 0 1 1H10v-5h4v5h3.5a1 1 0 0 0 1-1v-8.5" className={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: '/personas',
    label: 'Personas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="9" r="3" className={stroke} strokeWidth="1.6" />
        <circle cx="17" cy="10" r="2.4" className={stroke} strokeWidth="1.6" />
        <path d="M3.5 19c.7-2.8 2.8-4.5 5.5-4.5s4.8 1.7 5.5 4.5" className={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.5 19c.4-1.8 1.7-3 3.5-3s3.1 1.2 3.5 3" className={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  { href: '/crear', label: 'Crear', icon: null },
  {
    href: '/formacion',
    label: 'Formación',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 7.5 12 4l9 3.5L12 11Z" className={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 9.5V14c0 1.7 2.7 3 6 3s6-1.3 6-3V9.5" className={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M21 7.5V14" className={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: '/mas',
    label: 'Más',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="6" cy="12" r="1.4" fill="currentColor" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        <circle cx="18" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed bottom-0 left-0 right-0 z-40 safe-bottom"
    >
      <div className="mx-auto max-w-md px-4">
        <div className="glass-strong relative flex items-end justify-between px-3 py-2.5">
          {items.map((item, idx) => {
            if (idx === 2) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label="Crear"
                  className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-glow transition active:scale-95"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #635bff 0%, #493ee5 60%, #ffb68f 130%)',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </Link>
              );
            }
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex w-16 flex-col items-center gap-1 rounded-xl py-1.5 transition',
                  active ? 'text-brand' : 'text-ink-variant hover:text-ink'
                )}
              >
                <span className={cn('transition', active && 'drop-shadow-[0_2px_8px_rgba(99,91,255,0.5)]')}>
                  {item.icon}
                </span>
                <span className="text-[11px] font-semibold tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
