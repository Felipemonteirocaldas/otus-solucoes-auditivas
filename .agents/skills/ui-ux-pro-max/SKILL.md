---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile interfaces. Guides page layout, design systems, typography pairings, color harmonies, WCAG accessibility, touch interactions, micro-interactions, responsive behavior, and production-grade polish."
version: 2.1.0
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design intelligence system for high-conversion, accessible, and visually stunning web interfaces.

## Core Rule Priorities

| Priority | Category | Impact | Must Have Checks | Anti-Patterns to Avoid |
|---|---|---|---|---|
| 1 | **Accessibility (WCAG AA)** | CRITICAL | Contrast ≥ 4.5:1, semantic HTML5, aria-labels on icon buttons, visible `:focus-visible` styles. | Unstyled focus removal, poor contrast gray-on-gray, icon buttons without text labels. |
| 2 | **Touch & Interaction** | CRITICAL | Hit targets ≥ 44x44px, safe padding (min 8px separation), immediate visual feedback on tap/click. | Tiny mobile tap zones, desktop hover-only interactions, instant un-eased state changes (0ms). |
| 3 | **Performance & CLS** | HIGH | WebP/AVIF formats, `loading="lazy"` on below-the-fold images, width/height aspect ratios declared. | Layout shifting during load (CLS > 0.1), heavy unoptimized images, layout thrashing. |
| 4 | **Style & Hierarchy** | HIGH | Cohesive visual language matching sector (Acoustic Health / Medical Luxury), custom SVG icons with consistent stroke weight. | Mismatched visual weights, emojis as icons, random border radii (e.g. mixing 4px, 20px, pill). |
| 5 | **Layout & Responsive** | HIGH | Fluid sizing (`clamp()`), mobile-first stacking, zero horizontal overflow (`overflow-x: hidden`). | Fixed pixel widths, horizontal clipping on mobile, squished flex rows on narrow viewports. |
| 6 | **Typography & Color** | MEDIUM | Base font 16px+, line-height 1.5–1.7 for body, semantic CSS variables, deliberate font pairing. | Body text < 14px, raw hex codes scattered across CSS, poor line-length (> 80 characters). |
| 7 | **Motion & Animation** | MEDIUM | Context-aware timing (200-500ms), smooth bezier curves, respectful of `prefers-reduced-motion`. | Janky CPU animation on `width/height/top`, excessive jarring entrances, one generic duration for everything. |
| 8 | **Forms & Conversion** | HIGH | Explicit visible labels, clear error states, floating WhatsApp/Phone affordance with respectful z-index. | Placeholder-only inputs, disorienting modals, broken link targets. |

## Typography Combinations for Premium Health / Medical Luxury
- **Hero / Display:** Playfair Display, Cormorant Garamond, or Outfit Display.
- **Editorial Subheadings:** Medium-contrast serif italic or tracked clean grotesque sans.
- **Body:** Inter, Plus Jakarta Sans, or Geist with crisp rendering (`-webkit-font-smoothing: antialiased`).

## Color Strategy for Clinical Luxury
- **Primary Anchor:** Deep Wine / Burgundy (`#7A1C2C` to `#5C141D`) - symbolizes authority, warmth, and human prestige.
- **Secondary Accent:** Champagne / Warm Amber (`#D49B53` or `#C58B43`) - acoustic warmth, luxury resonance.
- **Canvas / Background:** Warm off-white / Alabaster (`#FAF8F5` or `#F7F4EF`) - avoids sterile hospital starkness while maintaining clinical cleanliness.
- **Deep Contrast:** Rich Slate / Midnight Blue (`#101A28`) - grounds the page with confidence and legibility.
