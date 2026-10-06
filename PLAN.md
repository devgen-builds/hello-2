# Plan

Each milestone ships something that works. Its acceptance criteria can be checked by running commands or opening the built page.

## M1: Starter page (status: done)

Ships: a static page with the project name, ticker and plan.

- [x] `npm install && npm run build` succeeds and writes `dist/index.html`.
- [x] `npm test` passes.
- [x] The page shows "Hello DEVGEN" and "$HELLO".
- [x] The page lists three milestones, each with a visible status.

## M2: Polish and accessibility (status: planned)

Ships: a readable, responsive and accessible version of the same page.

- [ ] The layout reads well at 360px and 1280px widths (manual check of `npm run preview`).
- [ ] Statuses are conveyed by text, not only by color (a test asserts the status text).
- [ ] The page has one `h1`, a `main` landmark, a `lang` attribute and a meta description (a test or an `index.html` check).
- [ ] Tests and build still pass.

## M3: Static deploy readiness (status: planned)

Ships: a build that works when served from any static host or sub-path.

- [ ] `vite.config.ts` uses a relative `base` so `dist/` works from a sub-path.
- [ ] The built `dist/` contains no runtime network requests to external origins (checked by a grep for `http` in the JS bundle, apart from comments and licence text).
- [ ] README documents `npm run build` / `npm run preview`.
- [ ] Tests and build still pass.
