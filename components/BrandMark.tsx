import { cn } from '@/lib/cn';

export function BrandMark({
  size = 'md',
  variant = 'gradient',
  className,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gradient' | 'ghost' | 'ink';
  className?: string;
}) {
  const dims = { sm: 36, md: 56, lg: 88, xl: 132 }[size];
  const numSize = { sm: 18, md: 28, lg: 44, xl: 64 }[size];
  const wordSize = { sm: 6, md: 8, lg: 11, xl: 14 }[size];

  const bg =
    variant === 'gradient'
      ? 'bg-[linear-gradient(135deg,#635bff_0%,#493ee5_55%,#ffb68f_130%)] text-white shadow-glow'
      : variant === 'ghost'
        ? 'bg-white/35 backdrop-blur-xl border border-white/60 text-brand'
        : 'bg-ink text-white';

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center rounded-2xl',
        bg,
        className
      )}
      style={{ width: dims, height: dims }}
      aria-label="Comunidad Doce"
    >
      <span
        className="font-serif leading-none"
        style={{ fontSize: numSize, letterSpacing: '-0.05em' }}
      >
        12
      </span>
      <span
        className="mt-0.5 font-semibold uppercase opacity-90"
        style={{ fontSize: wordSize, letterSpacing: '0.22em' }}
      >
        Comunidad
      </span>
    </div>
  );
}
