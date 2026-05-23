import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#fcf8ff',
          dim: '#dcd8e6',
          bright: '#fcf8ff',
          lowest: '#ffffff',
          low: '#f5f2ff',
          base: '#f0ecfa',
          high: '#eae6f4',
          highest: '#e4e1ee',
          variant: '#e4e1ee',
        },
        ink: {
          DEFAULT: '#1b1b24',
          variant: '#464555',
          inverse: '#f3effd',
        },
        outline: {
          DEFAULT: '#777587',
          variant: '#c7c4d8',
        },
        brand: {
          DEFAULT: '#493ee5',
          deep: '#321ed2',
          soft: '#635bff',
          tint: '#4c42e9',
          fixed: '#e2dfff',
          'fixed-dim': '#c3c0ff',
          inverse: '#c3c0ff',
          ink: '#0f0069',
        },
        peach: {
          DEFAULT: '#feae2c',
          deep: '#833f00',
          fixed: '#ffddb4',
          'fixed-dim': '#ffb955',
          ink: '#291800',
        },
        rose: {
          DEFAULT: '#be5400',
          deep: '#773200',
          fixed: '#ffdbca',
          'fixed-dim': '#ffb68f',
        },
        success: '#3f8a55',
        danger: '#ba1a1a',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Libre Caslon Text', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline-lg': ['32px', { lineHeight: '1.2' }],
        'headline-md': ['24px', { lineHeight: '1.3' }],
        'headline-sm': ['18px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'label-md': ['14px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' }],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      backgroundImage: {
        'ethereal-dawn':
          'linear-gradient(135deg, #c3c0ff 0%, #e2dfff 35%, #ffddb4 70%, #ffb68f 100%)',
        'dawn-soft':
          'radial-gradient(120% 80% at 50% 0%, #ffe8d4 0%, #f1ecff 45%, #fcf8ff 100%)',
        'mountain-dawn':
          'linear-gradient(180deg, #f1ecff 0%, #fbe7d4 60%, #d9c9d8 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px -8px rgba(73, 62, 229, 0.18), inset 0 1px 0 rgba(255,255,255,0.6)',
        glow: '0 12px 40px -12px rgba(99, 91, 255, 0.55)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.04)', opacity: '1' },
        },
        rise: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        breathe: 'breathe 6s ease-in-out infinite',
        rise: 'rise 0.6s ease-out both',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
