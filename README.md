# Comunidad Doce

> Formamos vidas, levantamos líderes y extendemos el Reino.

PWA del ecosistema de liderazgo y crecimiento espiritual **Comunidad Doce**,
basada en el sistema de diseño *Etheric Leadership* (glassmorphism, gradientes
de amanecer y tipografía editorial Libre Caslon + Manrope).

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3** con tokens del design system
- **PWA**: Web App Manifest, Service Worker propio, prompt de instalación,
  página de modo sin conexión
- **Deploy**: Vercel

## Desarrollo

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Iconos

Los iconos se generan a partir de `public/icons/icon.svg`:

```bash
node scripts/generate-icons.mjs
```

## Estructura

```
app/
  page.tsx          # Splash
  welcome/          # Bienvenida + visión + pilares
  login/            # Login y registro
  dashboard/        # Inicio (resumen, crecimiento, seguimiento)
  formacion/        # Academia y rutas de formación
  personas/         # Comunidad y seguimiento
  crear/            # Acciones rápidas
  mas/              # Perfil y configuración
  offline/          # Página offline servida por el SW
  not-found.tsx
components/
  AtmosphericBackdrop.tsx
  BottomNav.tsx
  BrandMark.tsx
  InstallPrompt.tsx
public/
  manifest.webmanifest
  sw.js
  icons/
```

## Diseño

Los assets originales y la guía de marca están en
`comunidad cistiana/stitch_doce_leadership_ecosystem/`.
