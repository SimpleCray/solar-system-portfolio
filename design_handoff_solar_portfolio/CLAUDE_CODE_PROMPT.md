# Prompt for Claude Code

Paste the text below into Claude Code, with the `design_handoff_solar_portfolio/` folder available in the working directory.

---

I'm building an interactive 3D portfolio — a photoreal solar system you fly through, where each celestial body is a section of my portfolio. I've attached a design handoff folder. **Read `design_handoff_solar_portfolio/README.md` in full before writing any code** — it is the source of truth for layout, colors, typography, copy, interactions, and state. `Cray System.dc.html` is the visual reference (open it in a browser; pan/zoom the canvas, click the Jupiter moons to see the interaction). `solar-system-portfolio-design-brief.md` is the original brief.

**Important:** the HTML file is a *design reference*, not code to copy. It uses prototyping shortcuts (imperative `data-*` styling, a single-file component runtime) — do not replicate those. Recreate the designs cleanly in a real codebase.

## Stack
Scaffold a new app (nothing exists yet):
- Vite + React + TypeScript
- React Three Fiber (`@react-three/fiber`) + `@react-three/drei` for the 3D scene
- A React DOM overlay layer (`position: fixed`) for all 2D UI chrome, with `pointer-events` only on interactive elements
- Zustand (or React context) for the small global state
- Plain CSS modules or styled-components — your call, but centralize the design tokens from the README

## Build order (incremental — show me each milestone before moving on)
1. **Project scaffold** + design tokens (colors, fonts, spacing) wired up. Load Space Grotesk, Inter, JetBrains Mono.
2. **Scene shell:** R3F canvas, deep-space background, a sparse tinted star field, OrbitControls-style free-fly (drag to orbit, scroll to travel). Placeholder spheres in true solar order with the belt between Mars and Jupiter.
3. **DOM overlay framework:** nameplate, progress dots (7 nav stops), prev/next control, and the ignition loading screen (0→100%).
4. **Nav + camera:** prev/next warps the camera between the 7 stops in order; arriving at a planet slides in its content panel and applies the tinted focus glow (only the active planet glows).
5. **Section panels:** Home (Sun), About (Mercury), AI Workflow (Venus), Skills (asteroid belt ring), Work (Jupiter + clickable moons → project detail), Experience (Saturn + moons → job detail), Contact (Neptune). All copy is in the README appendix — use it verbatim.
6. **Photoreal pass:** replace placeholder spheres with lit, textured planets (NASA-style / Solar System Scope textures, CC-BY — wire up a **credits panel** linked from the UI). Emissive Sun with bloom. Keep the glow restrained.
7. **Polish:** transitions (calm easing), responsive overlay, accessibility on interactive chrome.

## Constraints / fidelity
- This is **high-fidelity**: match the overlay's colors, type, spacing, radii, and shadows precisely (exact values in the README's Design Tokens).
- Accent is locked to `#5BD6C8`. Mood: real, calm, deep, credible — one moment of focus-drama on the active planet only. No neon.
- Scenery planets (Earth, Mars, Uranus) are rendered but are **not** nav stops — you drift past them.
- Content is static — no backend. Put it in a typed content module.

Start with step 1, set up the repo, and confirm the token values against the README before building UI. Ask me if anything in the handoff is ambiguous.
