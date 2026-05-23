---
name: Etheric Leadership
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e6'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecfa'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effd'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4c42e9'
  primary: '#493ee5'
  on-primary: '#ffffff'
  primary-container: '#635bff'
  on-primary-container: '#fefaff'
  inverse-primary: '#c3c0ff'
  secondary: '#835500'
  on-secondary: '#ffffff'
  secondary-container: '#feae2c'
  on-secondary-container: '#6b4500'
  tertiary: '#974100'
  on-tertiary: '#ffffff'
  tertiary-container: '#be5400'
  on-tertiary-container: '#fffaf9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#321ed2'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb955'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68f'
  on-tertiary-fixed: '#331100'
  on-tertiary-fixed-variant: '#773200'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  display-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style

The brand personality is **Transcendental, Sophisticated, and Deeply Human**. It moves away from the sterile utility of traditional management software and the dated aesthetics of institutional religious platforms. Instead, it embraces a "cinematic editorial" feel that honors the weight of leadership and the lightness of spiritual growth.

The design system utilizes a **refined Glassmorphism** style. The UI is built on a foundation of "Atmospheric Layers"—translucent surfaces that feel like fine linen or frosted crystal suspended over soft, luminous gradients.

**Visual Principles:**
- **Luminosity over Flatness:** Use light as a material. Surfaces should feel backlit or glowing.
- **Cinematic Pacing:** Ample whitespace and high-contrast typography evoke the feeling of a premium print magazine.
- **Emotional Precision:** Every interaction should feel intentional and calm, using soft transitions and organic depth rather than rigid, shadowed boxes.

## Colors

The color palette is anchored in **Warm Neutrals** and **Atmospheric Pastels**. 

- **Foundation:** Warm White and Soft Ivory provide a human, organic alternative to pure digital white.
- **Accentuation:** Lavender and Peach highlights are used for interactive states and emotional emphasis. 
- **Detailing:** Rose Gold is reserved for "Divine Details"—icons, thin borders, or royal accents (like crowns or leadership markers).
- **Gradients:** Use the `ethereal-dawn` gradient for background blurs and primary call-to-action buttons. These should never be harsh; they represent the transition of a sunrise.

## Typography

This system uses a **High-Contrast Serif/Sans pairing** to balance authority with modernity.

- **The Serif (Libre Caslon Text):** Used for large headers and display text. It brings a sense of history, wisdom, and premium editorial quality. Use it sparingly to create focus.
- **The Sans (Manrope):** A refined, modern sans-serif used for body text, UI labels, and data. It ensures clarity and professional performance within the "Leadership OS" modules.
- **Styling Note:** For small section headers, use Manrope in All-Caps with generous letter spacing to evoke a sense of "quiet luxury."

## Layout & Spacing

The layout philosophy is **"Floating Composition."** Avoid rigid, boxy grids that feel like a spreadsheet.

- **Grid Model:** A 12-column fluid grid for desktop with 24px gutters. Use wide margins (40px+) to allow the content to "breathe" in the center of the screen.
- **Vertical Rhythm:** Use an 8px base unit. Components should have generous internal padding (typically 24px or 32px) to maintain the premium feel.
- **Mobile Adaptivity:** On mobile, shift to a single-column layout with 20px side margins. Elements like cards should use horizontal scrolling "carousels" to showcase progress or members, maintaining a cinematic flow.

## Elevation & Depth

Depth is achieved through **Optical Translucency** rather than traditional drop shadows.

- **The Backdrop:** Backgrounds feature large, soft, animated blurs of lavender and peach.
- **Surface Layers:** Surfaces use a white-to-transparent gradient (60%–80% opacity) with a `backdrop-filter: blur(20px)`.
- **Borders:** Instead of shadows, use "Light-Leaking Borders"—a 1px solid stroke in `Soft Ivory` or `Rose Gold` with very low opacity (10-20%). This defines the edge while letting light pass through.
- **Hover States:** When interacting, increase the background opacity slightly or add a soft internal glow to make the element "lift" toward the user.

## Shapes

The shape language is **Organic and Welcoming**. 

- Use a consistent `rounded-lg` (1rem / 16px) for main containers and cards to soften the interface.
- **Interactive Elements:** Buttons and tags should use even more generous rounding (24px+) or full pill shapes to feel "human-centric" and touchable.
- **Imagery:** Profile photos and featured training images should use soft-corners or circular masks to avoid the "sharpness" of institutional software.

## Components

- **Buttons:** Primary buttons use the `ethereal-dawn` gradient with white text. Secondary buttons are "Ghost" style with a `rose-gold` thin border.
- **Glass Cards:** All containers (Dashboard widgets, Academy lessons) must use the blurred glass effect. No solid backgrounds.
- **Status Chips:** Use soft pastels for status (e.g., a soft green glow for "Active"). Avoid harsh, saturated "traffic light" colors.
- **Input Fields:** Minimalist. Only a bottom border in `Rose Gold` that glows when focused.
- **Navigation:** A sidebar (desktop) or bottom-bar (mobile) with high-transparency backgrounds. Icons should be thin-line (2pt stroke) and use `Rose Gold` for the active state.
- **Spiritual Growth Trackers:** Use circular progress rings with soft gradients to visualize "Formation" progress, avoiding linear bars that feel like "work tasks."