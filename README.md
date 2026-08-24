# Olutomiwa Sanni — portfolio

Two routes: `/` and `/portfolio`. Same architecture as the Nosayaba site,
themed blue, with content from the IT Support CV.

## Run

```bash
npm install
npm run dev
```

## Where to edit

**All copy lives in `lib/data.ts`**: `person`, `proofLine`, `projects` (five
engagements — the three marked `flagship: true` appear on Home),
`capabilities`, `clients`, `certifications`, `education`, `contact`.

A few headline lines sit in components: the hero (`components/hero.tsx`),
the positioning line (`components/proof-line.tsx`), the intro paragraph
(`components/about.tsx`) and the pull quote (`components/selected-work.tsx`).

## Colours

The `@theme` block in `app/globals.css`:

- `--color-accent` `#3b82f6` — blue on dark surfaces
- `--color-accent-deep` `#1d4ed8` — blue on light surfaces
- `--color-ground` / `--color-ground-deep` — navy grounds
- `--color-paper` — the light surround

The hero light-burst is a canvas animation in
`components/warp-background.tsx`; its blues are rgba values in that file.

## Images

`public/projects/*.png` are generated network diagrams (mesh, racks, flow,
hub, grid) — one per engagement. Replace with photography or real diagrams
at roughly 4:3 and update the `image` paths in `lib/data.ts`.

## Before going live

- Confirm the dates: the CV lists Pinnacle Systems as "2021 – present" while
  Eboluw Consult runs 2024 – 2026 and Stellar Tech Hub 2022 – 2023. Overlapping
  roles are fine if concurrent, but the site states them as written.
- Add a LinkedIn URL — the one in `contact` is a guess at the handle.
