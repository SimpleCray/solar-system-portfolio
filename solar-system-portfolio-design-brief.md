# Solar System Portfolio — Design Brief

**For:** Claude Design
**Owner:** Cray (Duong Ngoc Hai / SimpleCray) — Senior Fullstack Engineer
**Goal:** Design an interactive 3D portfolio where the user explores a realistic solar system. Each planet is a section of the site; moons are individual items; the asteroid belt is the skill stack. Inspired by interactive-diorama portfolios (e.g. jesse-zhou.com) but with a space theme.

> This is a **design brief** — produce the moodboard, palette, and key screen mockups. The 3D build (Three.js / React Three Fiber) comes after design is locked.

---

## 1. Concept in one line

A photoreal solar system floating in deep space. Visitors free-fly between planets to explore the portfolio, or use prev/next to take a guided tour from the Sun outward. Calm and credible by default; one tasteful moment of drama on the planet you're currently visiting.

---

## 2. The metaphor map (true solar order)

| Celestial body | Maps to | Notes |
|---|---|---|
| ☀️ **Sun** (center) | **Home / identity** | "I'm Cray, Senior Fullstack Engineer." Everything orbits this. Free-fly starts here. |
| **Mercury** | **About** | Bio + the three pillars. |
| **Venus** | **AI Workflow** | The "ship 10× faster" story. |
| 🌍 Earth | *scenery* | Optional subtle "you are here — Ho Chi Minh City" pin. |
| **Mars** | *scenery* | Flythrough only. |
| ☄️ **Asteroid belt** | **Skills** | ~25 technologies as a ring of floating labels, in its real position between Mars and Jupiter. |
| **Jupiter** | **Work** | 4 moons = 4 projects. Gas giant with many moons — realistic and fitting. |
| 🪐 **Saturn** | **Experience** | 5 moons = 5 jobs. Iconic rings double as a timeline ring. |
| Uranus | *scenery* | Flythrough only. |
| **Neptune** | **Contact** | The edge of the system — "transmit a signal." |

**Scenery planets** (Earth, Mars, Uranus) are fully rendered and beautiful but are not nav stops — you drift past them, which reinforces realism and the sense of a journey.

---

## 3. Navigation

- **Free-fly:** drag to orbit, scroll to move through space. Discover moons and the asteroid belt on your own.
- **Prev / Next:** warps the camera between nav stops in order:
  `Sun (Home) → Mercury (About) → Venus (AI) → Asteroid belt (Skills) → Jupiter (Work) → Saturn (Experience) → Neptune (Contact)`
- **On arrival at a planet:** a content panel slides in (the 2D overlay) with that section's content. Moons become clickable to open individual project/job detail.
- **Orientation aids:** a small progress indicator (a row of planet dots showing where you are), plus an early hint like "Drag to explore · Scroll to travel."

---

## 4. Visual direction — "photoreal base + restrained glow"

The chosen direction. Planets look real (NASA-style textures on lit spheres, true-to-life colors). The drama is reserved: only the planet you're **currently visiting** gets a soft atmospheric glow / halo. Everything else stays calm and natural.

**Mood words:** real, calm, deep, credible — with one moment of focus-drama.

### Background & space
- Deep space: near-black to very dark navy. Suggested range `#05060D` → `#0B1020`.
- Star field: mostly white pinpricks with subtle blue/pink tints; sparse, not busy. A faint distant nebula band is fine but keep it understated.

### Focus glow (the one dramatic element)
- Applied only to the active planet: a soft, low-opacity atmospheric halo, ideally tinted to that planet's own color (Earth blue, Jupiter amber, etc.).
- Keep it subtle — a gentle bloom, not neon. Lock the exact intensity on the canvas.

### Planet reference colors (for texturing)
| Body | Base tone(s) |
|---|---|
| Sun | `#FDB813` core, `#FF8C42` corona |
| Mercury | `#8C7853` gray-brown |
| Venus | `#E8C57A` pale gold |
| Earth | `#2B6CB0` ocean blue, `#4A9D5B` land green |
| Mars | `#C1440E` rust |
| Jupiter | `#C9A877` / `#B07D4B` banded |
| Saturn | `#E3C58A` pale gold + ring system |
| Uranus | `#9FE3E0` pale cyan |
| Neptune | `#3B5BDB` deep blue |

### Interface accent (the 2D chrome)
- One signature accent for links, the active state, and prev/next controls. Suggested: a cool cyan/teal (e.g. `#5BD6C8`) — techy and calm, sits well over dark space. Lock the final hex on the canvas.
- UI text: off-white primary `#F4EFE6`, secondary/muted `#9AA2B4`.

---

## 5. Theme dressing

- **Loading screen:** "Igniting the system… 0–100%" (the space equivalent of a playful loader). A growing star or a fuel/ignition gauge.
- **Nameplate:** a small station-style sign reading **"Cray System"**, top-left.
- **Credits panel:** attribution for 3D models and textures (most free assets are CC-BY and require credit). Include a link to this from the UI.
- **Tone of UI copy:** sentence case, concise, confident. Match the existing site's voice.

---

## 6. UI chrome to design (2D overlay over the 3D scene)

Please mock up these states:

1. **Home / hero (at the Sun):** name, title, tagline, two CTAs ("See my work", "Contact me"), and the explore hint.
2. **Planet-focused state:** the content panel that slides in when you land on a planet (use the **About** content as the example).
3. **Work planet with moons:** Jupiter + 4 labeled moons; plus the **project detail** card that opens when a moon is clicked (use **Zeligate** as the example).
4. **Skills asteroid belt:** the ring-of-labels treatment for the tech stack.
5. **Contact (Neptune):** the "transmit a signal" panel with the contact links.
6. **Component sheet:** prev/next controls, progress dots, nameplate, tech-tag pills, loading screen.

### Typography suggestion
- Headings / nameplate: a geometric techy sans (e.g. Space Grotesk) — fits the space theme.
- Body / UI: a clean neutral sans (e.g. Inter).
- Tech tags: a mono (e.g. JetBrains Mono) for a subtle engineering feel.
- Confirm final choices on the canvas.

---

## 7. Deliverables from Claude Design

- A moodboard for the "photoreal base + restrained glow" direction.
- A locked color palette (real hex values: background, stars, accent, UI text, per-planet tones, focus-glow intensity).
- The 6 mockup states listed in section 6.
- Final typography selections.

---

# Appendix — Full site content

All copy below is the real content to place into the corresponding planet/section.

## ☀️ Sun — Home

- **Name:** Cray
- **Title:** Senior Fullstack Engineer
- **Tagline:** Building scalable products that ship.
- **Sub:** Based in Ho Chi Minh City. Working with teams worldwide.
- **CTAs:** "See my work" · "Contact me"

## Mercury — About

Intro:
> I'm Cray — a Senior Fullstack Engineer with 6+ years of experience designing and delivering scalable, high-performance web applications across SaaS, AI, and enterprise integration domains.
>
> Proven track record of owning end-to-end development — from architecture to deployment — across complex systems including real-time platforms, CRM/ERP integrations, and data-intensive applications using React, Next.js, Node.js, and TypeScript.
>
> Experienced leading cross-functional teams and mentoring engineers, driving technical excellence and consistent delivery across multiple projects.

Three pillars:
1. **Scalable systems design** — Architecting distributed platforms for high-throughput, real-time applications.
2. **Enterprise integration** — Designing high-performance and secure middleware across CRM, ERP, and multi-tenant ecosystems.
3. **Technical leadership** — Driving architecture standards, mentoring engineers, enabling predictable delivery.

## Venus — AI Workflow

Headline: **Ship 10× faster. Same code quality.**
Sub: AI removes the toil around engineering judgment — never replaces the judgment itself.

1. **Shipping Velocity — 10×** — AI handles scaffolding, refactors, and tests — humans review and steer architecture.
2. **Prototype to Production — Same sprint** — Feature prototypes built and validated within hours, then hardened to production-grade code in the same sprint — no throwaway work.
3. **From Concept to Code — Zero dead time** — AI accelerates the full pipeline — from planning and design system to boilerplate and docs — with no dead time between stages.
4. **Ensured Quality — 100% reviewed** — AI output passes through multiple quality layers — unit, integration, and e2e tests — before a real developer makes the final call. Same bar as fully human-written code.

## ☄️ Asteroid belt — Skills

React · Next.js · TypeScript · Node.js · Express.js · WebSocket · REST API · Webhooks · PostgreSQL · MySQL · MongoDB · AWS · Docker · CI/CD · Redux · TanStack Query · Zustand · Tailwind CSS · Material UI · Framer Motion · Jest · Playwright · Claude AI · Cursor AI · HTML5 · CSS3

## Jupiter — Work (4 moons = 4 projects)

### Moon 1 — Zeligate — AI Hiring Platform
*2024 — 2026 · Frontend Lead*
Led frontend architecture for an AI hiring platform. Built a streaming LLM assistant optimized for long-lived sessions and high-frequency state updates, reducing redundant renders and improving stream smoothness by ~3×. Delivered real-time interview experiences with video, live chat, and assessment flows using Amazon Chime SDK.
- Real-time AI hiring workflows built for production
- Optimized streaming LLM rendering for ~3× smoother session performance
- Built real-time interview rooms using Chime SDK and Heygen interactive avatar
- Defined frontend architecture standards and reusable design systems adopted team-wide

Tech: React · Next.js · TypeScript · Zustand · TanStack Query · WebSockets · Chime SDK

### Moon 2 — Shade Systems — ERP Integration
*2025 — 2026 · Architect & Fullstack*
Architected a middleware platform enabling reliable bidirectional synchronization between HarmoniQ ERP and Monday.com. Designed webhook-driven event pipelines with Bull, Redis, and AWS SQS for fault-tolerant propagation. Built modular entity controllers, OAuth 2.0 authentication flows, and a multi-tenant subscription system for scalable enterprise integrations.
- Real-time ERP synchronization for Monday.com
- Bidirectional sync: HarmoniQ ERP ↔ Monday.com
- Webhook pipelines + Bull/Redis queues for reliable propagation
- Modular entity controllers with validation, logging, error handling
- OAuth 2.0 + multi-tenant subscription system

Tech: Node.js · Express · Bull · Redis · OAuth 2.0 · Webhooks · MySQL · Docker

### Moon 3 — Monday Sinch — SMS Platform
*2023 — 2026 · Architect & Fullstack*
Designed and delivered a full-stack Monday.com application enabling two-way SMS communication via Sinch and MessageMedia. Built a real-time embedded chat experience with conversation threads, delivery states, and unread synchronization. Architected backend messaging workflows using BullMQ, webhooks, OAuth, and MySQL-backed conversation services.
- Real-time messaging embedded directly into workflow
- Built board-embedded real-time SMS communication inside Monday.com
- Implemented Socket.IO messaging flows with delivery states and conversation threading
- Architected background processing and webhook orchestration for reliable message delivery

Tech: React · TypeScript · MUI · Socket.IO · Node.js · BullMQ · MySQL

### Moon 4 — Aarsleff — Construction CMS
*2021 — 2022 · Frontend Developer*
Built a React and Next.js scheduling platform for coordinating workforce and heavy equipment across large construction projects. Delivered drag-and-drop scheduling flows, calendar-based planning interfaces, and optimized state synchronization for responsive interactions across complex operational datasets.
- Enterprise scheduling for large-scale construction operations
- Built drag-and-drop scheduling workflows with responsive optimistic updates
- Designed calendar interfaces handling complex worker, equipment, and date mappings
- Optimized frontend performance for large-scale scheduling datasets

Tech: React · TypeScript · TanStack Query · DnD Kit · Framer Motion

## 🪐 Saturn — Experience (5 moons = 5 jobs)

Section headline: **Built and shipped. Across domains.** — 6+ years across AI, SaaS, and enterprise integration.

### Moon 1 — Zeligate
*Mar 2024 — Mar 2026 · Senior Frontend Engineer / Frontend Lead · Full-time · Gold Coast, Australia · Remote*
AI-powered hiring platform. Led frontend architecture for a ChatGPT-style streaming assistant, real-time interview rooms via Chime SDK, and a design system adopted team-wide.
Tech: React · TypeScript · Vite · Zustand · TanStack Query · WebSockets · MUI · AWS Chime

### Moon 2 — Upstream
*Aug 2022 — Apr 2026 · Fullstack Developer / Frontend Lead · Contract · Fyshwick, Australia · Remote*
Led architecture and delivery for SaaS and integration platforms across CRM/ERP. Built webhook-driven pipelines, OAuth systems, and real-time sync between HarmoniQ ERP and Monday.com.
Tech: Node.js · React · TypeScript · Bull · Redis · AWS SQS · Socket.IO · MySQL · TanStack Query

### Moon 3 — Spritely Apps
*Nov 2022 — Jan 2024 · Frontend Developer · Contract · Robina, Australia · Remote*
Built and shipped production-grade web applications across advertising and real estate platforms, translating complex Figma designs into responsive, scalable user experiences.
Tech: React · TypeScript · MUI · TanStack Query · Redux · Jest

### Moon 4 — Kodebaze
*Oct 2021 — Nov 2022 · Frontend Developer · Full-time · Copenhagen, Denmark · Remote*
Built construction-management and employee-feedback platforms. Reusable UI systems from scratch, drag-and-drop scheduling for Aarsleff handling hundreds of jobs and fitters.
Tech: React · Next.js · Framer Motion · DnD Kit · Azure Fluent UI

### Moon 5 — Cyberlogitec
*May 2020 — Sep 2021 · Web Developer · Full-time · Ho Chi Minh City, Vietnam · On-site*
React.js SaaS for extracting shipment info from logistics documents. Node.js business logic for specialized shipping rules. First engineering role — shipped to enterprise clients.
Tech: React · Node.js · REST API · PostgreSQL · MUI

## Neptune — Contact

Headline: **Building something ambitious? Let's talk.**

- **Email:** ngochaiitech@gmail.com
- **LinkedIn:** linkedin.com/in/simplecray
- **GitHub:** github.com/simplecray
- **Phone:** (+84) 375-911-341
- **Location:** Ho Chi Minh City, Vietnam

Footer: Designed & built with love, © 2026
