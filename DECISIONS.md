# Decisions

One entry per decision: date, decision, why.

## 2026-10-06: Request accepted as written

- **Decision:** Build the request in PROJECT.md as described, with no alternative needed.
- **Why:** The request is a one-page static site. It shows the project name, ticker, a description and a three-milestone plan. It has no backend, no wallet code, no runtime network calls, no collection of user data, and no financial claims. All of it sits inside the safety perimeter.

## 2026-10-06: Plan content lives in source, not fetched

- **Decision:** The milestones shown on the page come from a typed module (`src/plan.ts`), bundled at build time.
- **Why:** The request says no network calls at runtime. A static module keeps the page fully offline and easy to test.

## 2026-10-06: Tailwind CSS v4 through the Vite plugin

- **Decision:** Use `tailwindcss` v4 with `@tailwindcss/vite`, and Vitest with Testing Library for tests.
- **Why:** This is the smallest setup for the starter stack: no PostCSS config, and tests share Vite's config.

## 2026-10-06: Vitest 5 instead of Vitest 3

- **Decision:** Pin `vitest@^5.0.3` (and `vite@^6.4.0`, which it requires).
- **Why:** `npm audit` flagged Vitest 3's dependencies: `tinypool` (critical, prototype pollution leading to RCE: GHSA-5gmw-xhrv-c9v3, GHSA-85c8-ppgw-ccpr) and `@vitest/mocker` (moderate, path traversal: GHSA-82fw-gwwq-j7x9). Vitest 5.0.3 supports Vite 6.4+ and Node 22.12+, which this project uses. After the upgrade, `npm audit` reports 0 vulnerabilities. Vitest `globals: true` is on so Testing Library cleans up between tests.
