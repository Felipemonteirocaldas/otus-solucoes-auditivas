---
name: frontend-design
description: "Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, layout rhythm, avoiding templated defaults and generic AI slop."
version: 1.2.0
---

# Frontend Design - Art Direction & Distinctive Identity

Approach every project as a Design Director at an elite creative studio known for giving every brand a distinctive visual presence that is impossible to mistake for a generic SaaS or template.

## Ground Your Design in the Subject Matter

- Ground visual metaphors in the actual physics and emotion of the product:
  - For **Hearing Health (OTUS Soluções Auditivas)**: The emotional joy of sound, acoustic wave physics, intimacy, voice clarity, rediscovering bird songs, music, conversations with grandchildren, precision micro-engineering (invisible hearing aids).
  - Use subtle acoustic waveforms, gentle concentric sound ripple animations, warm physical tactile cards, and editorial magazine typography.

## Core Design Principles

1. **The Hero Must Captivate:**
   - Open with an unforgettable, bespoke moment: asymmetric editorial typography, tactile photography with organic warm light, and clear, human-centric hierarchy.
   - Avoid the generic formula: standard centered headline + two identical pill buttons + floating cards.

2. **Typography as Voice:**
   - Display fonts must carry real personality. Pair an authoritative luxury serif (e.g. Playfair Display, editorial italic cuts) with an ultra-clean, legible modern sans-serif (Inter / Outfit).
   - Balance lines with `text-wrap: balance` or deliberate line breaks.
   - Avoid generic AI typographic tells:
     - Don't italicize just one random single word in an awkward way.
     - Don't plaster identical small uppercase letter-spaced badges over every single block.
     - Ensure reading length never exceeds 75 characters per line (`max-width: 65ch` on paragraphs).

3. **Break Free from the SaaS-Card Syndrome:**
   - Don't chop the whole page into identical rounded cards with 1px border and grey box-shadow.
   - Mix containers: open editorial columns, horizontal dividers with hairline craft, full-bleed textured moments, alternating rhythms, asymmetric grids.

4. **Intentional Motion & Micro-Interactions:**
   - Motion must answer physics: smooth easing (`cubic-bezier(0.16, 1, 0.3, 1)`), staggered reveals, magnetic button hovers, acoustic ripple glows, fluid accordion expansion without layout jumping.
   - Never use gratuitous, jarring animations that fatigue the visitor or slow down the page.

5. **Aesthetic Consistency & Token Rigor:**
   - Maintain strict design token discipline (spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px).
   - Unified border radiuses: choose a deliberate system (e.g., subtle 12px/16px cards with 100px pill buttons) and enforce it across all components.
