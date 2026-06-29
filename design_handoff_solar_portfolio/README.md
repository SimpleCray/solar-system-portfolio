# Handoff: Cray System — Solar Portfolio

## Overview
An interactive 3D portfolio where the visitor explores a photoreal solar system. Each celestial body maps to a section of Cray's portfolio: the **Sun** is Home/identity, planets are sections, **moons** are individual items (projects / jobs), and the **asteroid belt** is the skill stack. Visitors free-fly between planets or use prev/next for a guided tour from the Sun outward. The aesthetic is **"photoreal base + restrained glow"**: planets look real and calm; only the planet you are currently visiting gets a soft, color-tinted atmospheric halo.

This package documents the **2D UI chrome** (the overlay rendered on top of the 3D scene) plus the locked palette, typography, and per-planet color reference. The 3D scene itself (Three.js / React Three Fiber) is to be built by the developer; this handoff defines how the overlay and visual system should look and behave.

## About the Design Files
The file in this bundle — `Cray System.dc.html` — is a **design reference created in HTML**. It is a prototype showing the intended look, layout, color, typography, and interaction of the UI overlay, laid out as a pannable design canvas of eight frames. **It is not production code to copy directly.**

The task is to **recreate these designs in the target codebase's environment**. The intended target is a **React + Three.js / React Three Fiber** single-page app (the 3D canvas) with a **React DOM overlay** for the 2D chrome documented here. If no codebase exists yet, scaffold one with Vite + React + TypeScript + R3F (`@react-three/fiber`, `@react-three/drei`) and a DOM overlay layer. Use the codebase's established patterns for state, styling, and components — the HTML here is a visual spec, not the architecture.

> Note on the HTML reference: the prototype sets several styles imperatively via `data-*` attributes and a small `applyData()` pass (star fields, planet-color swatches, moon/dot active states). That is a prototyping shortcut to avoid CSS-class setup — **do not replicate that pattern**. In the real app, express these as normal component props / styled components / CSS.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, shadows, and copy are final and should be reproduced precisely for the 2D overlay. The 3D planet *rendering* in the prototype is approximated with CSS radial gradients — in the real build, replace these with lit spheres using NASA-style textures (see "3D scene notes"). The CSS gradient colors are accurate reference tones for texturing/tinting.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `space-0` | `#05060D` | Deepest background (vignette outer) |
| `space-1` | `#070912` | Mid background / panel base |
| `space-2` | `#0B1020` | Background highlight (radial center) |
| `accent` | `#5BD6C8` | **Locked.** Links, active state, prev/next, focus accents |
| `accent-amber` | `#E8B04B` | Alternate accent (comparison only — not used) |
| `accent-violet` | `#B59CFF` | Alternate accent (comparison only — not used) |
| `text-primary` | `#F4EFE6` | Headings, primary UI text (off-white) |
| `text-body` | `#C9D2E0` | Body copy inside panels |
| `text-muted` | `#9AA2B4` | Secondary / labels |
| `text-faint` | `#6B7283` | Tertiary (inactive dots, footer) |
| `accent-on` | `#05060D` | Text/icon color on top of accent fills |

Surfaces & lines:
- Panel fill (glass): `linear-gradient(180deg, rgba(18,22,38,.82), rgba(10,13,26,.88))` + `backdrop-filter: blur(14px)`
- Panel border: `1px solid rgba(255,255,255,.08)`
- Pill fill: `rgba(255,255,255,.06)`; pill border: `1px solid rgba(255,255,255,.1)`
- Hairline divider: `1px solid rgba(255,255,255,.07)`
- Background gradient (scene): `radial-gradient(120% 120% at <x> <y>, #0B1020 0%, #070912 55%, #05060D 100%)` — vary the focal point per screen.

### Star field
White pinpricks with occasional blue (`rgba(160,190,255,.9)`) and pink (`rgba(255,200,220,.8)`) tints; majority white at `rgba(255,255,255,.45–.95)`. Sparse, ~180 stars across a full screen. Keep understated; a faint distant nebula band is acceptable but subtle.

### Focus glow (the one dramatic element)
Applied **only** to the currently-visited planet. Soft, low-opacity halo tinted to that planet's own color. Reference (restrained level — locked):
```
box-shadow: 0 0 44px 8px rgba(<planet>,.30), 0 0 90px 26px rgba(<planet>,.14);
```
For the Sun, slightly stronger and gently pulsing (7s ease-in-out): inner `0 0 110–150px 36–52px rgba(255,140,66,.30→.40)`, outer `0 0 230–290px 90–120px rgba(253,184,19,.15→.20)`. A bloom, never neon.

### Per-planet reference tones (for 3D texturing / glow tint)
| Body | Base tone(s) | Maps to |
|---|---|---|
| Sun | `#FDB813` core, `#FF8C42` corona, `#FFF3C4` hot center | Home / identity |
| Mercury | `#8C7853` gray-brown (`#C8B48F` lit → `#5A4B34` terminator) | About |
| Venus | `#E8C57A` pale gold | AI Workflow |
| Earth | `#2B6CB0` ocean, `#4A9D5B` land | scenery |
| Mars | `#C1440E` rust | scenery |
| Jupiter | `#C9A877` / `#B07D4B` banded, `#D8C19A` light band, `#9C6B3E` dark band | Work (4 moons) |
| Saturn | `#E3C58A` pale gold + rings | Experience (5 moons) |
| Uranus | `#9FE3E0` pale cyan | scenery |
| Neptune | `#3B5BDB` deep blue (`#6E86F0` lit → `#21307F` shadow) | Contact |

### Typography
| Role | Family | Notes |
|---|---|---|
| Headings / nameplate | **Space Grotesk** | 400/500/600/700. Hero name 88px/700; section titles 34–46px/600; card titles 38px/600 |
| Body / UI | **Inter** | 400/500/600. Body 14.5–16px, line-height 1.5–1.6 |
| Tech tags / labels / metrics | **JetBrains Mono** | 400/500. 10–14px; uppercase eyebrows use letter-spacing .1–.14em |

Load (Google Fonts):
```
Space+Grotesk:wght@400;500;600;700 · Inter:wght@400;500;600 · JetBrains+Mono:wght@400;500
```

### Spacing, radius, shadow
- Panel padding: 34–38px. Card gap rhythm: 14–24px between blocks.
- Radius: buttons/pills `7–10px`; content panels `16px`; planet swatches `50%`.
- Panel shadow: `0 20px 60px rgba(0,0,0,.5)`. CTA shadow: `0 8px 30px rgba(91,214,200,.28)`.
- Hit targets: prev/next buttons 42–46px circles; CTAs ~13px vertical / 24px horizontal padding.

---

## Screens / Views
There are **6 UI states** plus a palette/type reference and a component sheet. All overlay a full-bleed 3D scene. The overlay panels slide in from the right on planet arrival.

### 1. Home / hero (at the Sun)
- **Purpose:** Landing identity. Free-fly starts here.
- **Layout:** Full-screen scene. Sun large at right edge (~440px, partially off-screen, pulsing glow). Small Earth drifting nearby (scenery). Hero copy left-aligned, vertically centered, max-width 560px.
- **Components:**
  - Nameplate (top-left): bordered pill, sun dot + `CRAY SYSTEM` (Space Grotesk 600, 12px, letter-spacing .16em).
  - Eyebrow: `SENIOR FULLSTACK ENGINEER` (JetBrains Mono 13px, accent).
  - Name: `Cray` (Space Grotesk 88px/700, line-height .98).
  - Tagline: `Building scalable products that ship.` (Space Grotesk 30px/500).
  - Sub: `Based in Ho Chi Minh City. Working with teams worldwide.` (Inter 16px, muted).
  - CTAs: primary `See my work` (accent fill, `#05060D` text); secondary `Contact me` (outline `rgba(255,255,255,.22)`).
  - Explore hint (bottom-left): `↕ Drag to explore · scroll to travel` (mono, muted).
  - Progress dots (bottom-center): 7 nav stops, active = Home.

### 2. Planet-focused panel (Mercury / About) — the slide-in template
- **Purpose:** Section content panel shown on arrival at any nav planet. About is the example.
- **Layout:** Planet (Mercury) at left-center with focus glow; glass content panel pinned right (560px wide, 40px inset top/bottom/right).
- **Components:**
  - Panel eyebrow: planet dot + `MERCURY · ABOUT` (mono, accent).
  - Title: `Senior Fullstack Engineer, 6+ years.` (Space Grotesk 34px/600).
  - Intro paragraph (Inter 14.5px, `#C9D2E0`, line-height 1.6) — see content appendix.
  - Three pillars: numbered `01/02/03` (mono accent) + title (Space Grotesk 15px/600) + body (13px muted).
  - Prev/next control (bottom-left) with "NEXT → Venus · AI Workflow" label.

### 3. Work — Jupiter + moons + project detail (INTERACTIVE)
- **Purpose:** Jupiter = Work. 4 moons = 4 projects. Clicking a moon opens that project's detail card.
- **Layout:** Left half = Jupiter stage (banded gas giant ~330px centered, with subtle light pole and a Great-Red-Spot-style oval) and 4 moons positioned around it at roughly: moon1 left:2%/top:22%, moon2 left:74%/top:6%, moon3 left:80%/top:64%, moon4 left:8%/top:76%. Right = 680px glass detail card.
- **Moon component:** 34px sphere (radial gradient from its tone) + name label below (mono). **Active state:** accent ring `0 0 0 3px rgba(91,214,200,.9)` + glow `0 0 22px 4px rgba(91,214,200,.45)`, label turns accent. Inactive: inset shadow, muted label. Clickable, cursor pointer.
- **Detail card:** eyebrow `JUPITER · WORK — MOON n/4` (left) + date meta (right); project name (Space Grotesk 38px/600); subtitle (17px/500 accent); description (14.5px body); bullet list (`▸` accent markers, 13.5px); tech-tag pills row. Content for all 4 projects in the appendix; **Zeligate is the default selection.**
- **Interaction:** Selecting a moon updates `selectedMoon` → swaps the card content and moves the accent ring. No layout shift.

### 4. Skills — asteroid belt
- **Purpose:** The tech stack as a ring of floating labels, sitting in the belt's real position between Mars and Jupiter.
- **Layout:** Centered ring system. Two faint dashed orbit circles slowly counter-rotating (80s / 120s linear). Center label: faint cyan glow dot + `Skills` (Space Grotesk 24px/600) + `25 technologies · between Mars & Jupiter` (mono muted).
- **Skill labels:** 26 mono pills (`rgba(10,13,26,.7)` fill, hairline border) positioned around two concentric radii (alternating 250px / 340px) so they don't overlap. In the prototype they're static for legibility; in 3D they can drift gently. Labels stay upright.

### 5. Contact — Neptune (edge of the system)
- **Purpose:** "Transmit a signal" contact panel.
- **Layout:** Neptune at right edge (~330px, blue focus glow). Copy left, vertically centered.
- **Components:**
  - Eyebrow `NEPTUNE · EDGE OF THE SYSTEM` (mono accent).
  - Headline `Building something ambitious? Let's talk.` (Space Grotesk 46px/600).
  - Contact rows: label (84px, mono muted) + value (Inter 16px), hairline dividers. Email, LinkedIn, GitHub, Phone, Location — see appendix.
  - CTA `⌁ Transmit a signal` (accent fill).
  - Footer `Designed & built with love · © 2026` (mono faint).

### 6. Component sheet (reference, not a screen)
Documents reusable parts: **prev/next control** (outline ‹ + accent ›, with NEXT label), **nameplate**, **progress dots** (7 stops, active accent + glow, larger), **tech-tag pills**, and the **loading screen**.

#### Loading screen
- Centered: glowing Sun seed (64px, orange bloom) → `Igniting the system…` (Space Grotesk 18px/600) → progress bar (340×6px, track `rgba(255,255,255,.08)`, fill `linear-gradient(90deg,#FDB813,#FF8C42)`) → big percentage in accent mono (`64%` style). Counts 0→100.

---

## Interactions & Behavior
- **Free-fly:** drag to orbit the camera, scroll to travel through space. Moons and the belt are discoverable on their own.
- **Prev / Next:** warps camera between nav stops in order:
  `Sun (Home) → Mercury (About) → Venus (AI) → Asteroid belt (Skills) → Jupiter (Work) → Saturn (Experience) → Neptune (Contact)`.
- **On arrival at a planet:** content panel slides in from the right; the planet gains its focus glow; its moons (if any) become clickable.
- **Moon click:** opens individual project/job detail; updates selection state and accent ring.
- **Orientation aids:** progress dots (row of 7) reflecting current stop; early hint "Drag to explore · scroll to travel".
- **Scenery planets** (Earth, Mars, Uranus) are fully rendered but are **not** nav stops — drift past them.
- **Transitions:** panel slide-in ~300–400ms ease-out; camera warps eased; glow fades in/out on focus change. Keep motion calm.
- **Loading:** ignition loader 0→100% before the scene is interactive.

## State Management
- `currentStop` (enum of the 7 nav stops) — drives camera target, active panel, active progress dot, which planet glows.
- `selectedMoon` (index, per planet that has moons; Jupiter 0–3, Saturn 0–4) — drives the open detail card; default 0.
- `cameraMode` (`free-fly` | `guided`) — whether user is dragging/scrolling or warping via prev/next.
- `loadProgress` (0–100) and `isReady` — for the ignition loader.
- `accent` — fixed `#5BD6C8` (amber/violet exist only as a comparison in the design; not a runtime toggle unless desired).
- Data is static portfolio content (no fetching required) — see appendix; load from a typed content module.

## Saturn — Experience (documented in brief, not mocked here)
Saturn = Experience, **5 moons = 5 jobs**, iconic rings double as a timeline ring. Reuse the Jupiter pattern (moons → detail card). Section headline: **"Built and shipped. Across domains."** — 6+ years across AI, SaaS, and enterprise integration. The 5 jobs (Zeligate, Upstream, Spritely Apps, Kodebaze, Cyberlogitec) are in the appendix.

## 3D scene notes (for the R3F build)
- Replace CSS-gradient planets with lit spheres + NASA-style textures (most free assets are CC-BY → **credits panel required**). Sun is emissive with bloom.
- True solar order and the belt between Mars and Jupiter; scenery planets rendered but non-interactive.
- Reserve drama: only the active planet glows (tinted halo / atmospheric shell). Everything else calm and naturally lit.
- DOM overlay (`position: fixed`, `pointer-events` only on interactive chrome) renders all the 2D states above on top of the `<canvas>`.
- **Credits panel:** attribution for 3D models and textures, linked from the UI.

## Assets
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (Google Fonts) — link in document head.
- **Planets/stars in the prototype:** pure CSS (radial gradients + box-shadow star field). No image assets shipped. For production, source planet textures (NASA/Solar System Scope, CC-BY) and credit them.
- **Icons:** none required; glyphs used are unicode (`‹ › ▸ ↕ ⌁`).

## Files
- `Cray System.dc.html` — the design reference (pannable canvas of all 8 frames). Open in a browser; pan/zoom to view each frame. The Jupiter frame is interactive (click moons).
- `solar-system-portfolio-design-brief.md` — original design brief with full metaphor map and all copy.
- `support.js` — runtime for the `.dc.html` prototype (so it opens standalone). Not part of the production app.

---

## Appendix — Content (exact copy)

### Sun — Home
Name **Cray** · Title **Senior Fullstack Engineer** · Tagline **Building scalable products that ship.** · Sub **Based in Ho Chi Minh City. Working with teams worldwide.** · CTAs **See my work** · **Contact me**

### Mercury — About
Intro: *I'm Cray — a Senior Fullstack Engineer with 6+ years of experience designing and delivering scalable, high-performance web applications across SaaS, AI, and enterprise integration domains. Proven track record of owning end-to-end development — from architecture to deployment — across complex systems including real-time platforms, CRM/ERP integrations, and data-intensive applications using React, Next.js, Node.js, and TypeScript. Experienced leading cross-functional teams and mentoring engineers, driving technical excellence and consistent delivery.*
Pillars: **Scalable systems design** — Architecting distributed platforms for high-throughput, real-time applications. · **Enterprise integration** — Designing high-performance, secure middleware across CRM, ERP, and multi-tenant ecosystems. · **Technical leadership** — Driving architecture standards, mentoring engineers, enabling predictable delivery.

### Venus — AI Workflow
Headline **Ship 10× faster. Same code quality.** Sub: *AI removes the toil around engineering judgment — never replaces the judgment itself.*
1. **Shipping Velocity — 10×** — AI handles scaffolding, refactors, and tests — humans review and steer architecture.
2. **Prototype to Production — Same sprint** — Feature prototypes built and validated within hours, then hardened to production-grade code in the same sprint — no throwaway work.
3. **From Concept to Code — Zero dead time** — AI accelerates the full pipeline — from planning and design system to boilerplate and docs.
4. **Ensured Quality — 100% reviewed** — AI output passes unit, integration, and e2e tests before a developer makes the final call. Same bar as fully human-written code.

### Asteroid belt — Skills (25)
React · Next.js · TypeScript · Node.js · Express.js · WebSocket · REST API · Webhooks · PostgreSQL · MySQL · MongoDB · AWS · Docker · CI/CD · Redux · TanStack Query · Zustand · Tailwind CSS · Material UI · Framer Motion · Jest · Playwright · Claude AI · Cursor AI · HTML5 · CSS3

### Jupiter — Work (4 moons = 4 projects)
**Zeligate — AI Hiring Platform** · *2024–2026 · Frontend Lead* — Led frontend architecture for an AI hiring platform. Built a streaming LLM assistant optimized for long-lived sessions and high-frequency state updates, improving stream smoothness ~3×. Real-time interview experiences with video, live chat, and assessment flows via Amazon Chime SDK. Bullets: Real-time AI hiring workflows in production · Optimized streaming LLM rendering ~3× smoother · Interview rooms via Chime SDK + Heygen avatar · Frontend architecture standards adopted team-wide. Tech: React · Next.js · TypeScript · Zustand · TanStack Query · WebSockets · Chime SDK.

**Shade Systems — ERP Integration** · *2025–2026 · Architect & Fullstack* — Middleware for reliable bidirectional sync between HarmoniQ ERP and Monday.com. Webhook-driven pipelines with Bull, Redis, AWS SQS; modular entity controllers, OAuth 2.0, multi-tenant subscriptions. Bullets: Bidirectional sync HarmoniQ ↔ Monday.com · Webhook pipelines + Bull/Redis queues · Modular controllers with validation & logging · OAuth 2.0 + multi-tenant subscriptions. Tech: Node.js · Express · Bull · Redis · OAuth 2.0 · Webhooks · MySQL · Docker.

**Monday Sinch — SMS Platform** · *2023–2026 · Architect & Fullstack* — Full-stack Monday.com app for two-way SMS via Sinch and MessageMedia. Real-time embedded chat with threads, delivery states, unread sync; BullMQ + MySQL messaging. Bullets: Board-embedded real-time SMS · Socket.IO flows with delivery states & threading · Webhook orchestration for reliable delivery · MySQL-backed conversation services. Tech: React · TypeScript · MUI · Socket.IO · Node.js · BullMQ · MySQL.

**Aarsleff — Construction CMS** · *2021–2022 · Frontend Developer* — React/Next.js scheduling platform for workforce and heavy equipment across construction projects. Drag-and-drop scheduling, calendar planning, optimized state sync. Bullets: Drag-and-drop scheduling with optimistic updates · Calendar interfaces over complex maps · Optimized performance for large datasets · Enterprise scheduling at scale. Tech: React · TypeScript · TanStack Query · DnD Kit · Framer Motion.

### Saturn — Experience (5 moons = 5 jobs)
Headline **Built and shipped. Across domains.** — 6+ years across AI, SaaS, and enterprise integration.
- **Zeligate** · Mar 2024–Mar 2026 · Senior Frontend Engineer / Frontend Lead · Full-time · Gold Coast, Australia · Remote. Tech: React · TypeScript · Vite · Zustand · TanStack Query · WebSockets · MUI · AWS Chime.
- **Upstream** · Aug 2022–Apr 2026 · Fullstack Developer / Frontend Lead · Contract · Fyshwick, Australia · Remote. Tech: Node.js · React · TypeScript · Bull · Redis · AWS SQS · Socket.IO · MySQL · TanStack Query.
- **Spritely Apps** · Nov 2022–Jan 2024 · Frontend Developer · Contract · Robina, Australia · Remote. Tech: React · TypeScript · MUI · TanStack Query · Redux · Jest.
- **Kodebaze** · Oct 2021–Nov 2022 · Frontend Developer · Full-time · Copenhagen, Denmark · Remote. Tech: React · Next.js · Framer Motion · DnD Kit · Azure Fluent UI.
- **Cyberlogitec** · May 2020–Sep 2021 · Web Developer · Full-time · Ho Chi Minh City, Vietnam · On-site. Tech: React · Node.js · REST API · PostgreSQL · MUI.

### Neptune — Contact
Headline **Building something ambitious? Let's talk.** · Email **ngochaiitech@gmail.com** · LinkedIn **linkedin.com/in/simplecray** · GitHub **github.com/simplecray** · Phone **(+84) 375-911-341** · Location **Ho Chi Minh City, Vietnam** · Footer **Designed & built with love, © 2026**

### Theme dressing
Loading: "Igniting the system… 0–100%". Nameplate: station sign **"Cray System"**, top-left. Credits panel: attribution for 3D models & textures (CC-BY), linked from UI. UI copy tone: sentence case, concise, confident.
