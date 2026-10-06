# Blueprint: Hello DEVGEN ($HELLO)

## What it is

A one-page static "hello" website for the Hello DEVGEN project. It shows:

- the project name and ticker (**Hello DEVGEN**, **$HELLO**)
- a one-line description
- a short plan of three milestones, each with a status (done / in progress / planned)

## Who it is for

- People who follow the $HELLO project and want to see what is being built and how far along it is.
- The DEVGEN builder itself: the page is a small, verifiable test of the build-in-public workflow.

## Shape of the first version

- **Stack:** Vite + React + TypeScript + Tailwind CSS, built to static files in `dist/`.
- **Fully static:** no backend, no wallet code, no runtime network calls, no tracking.
- **Structure:**
  - `src/project.ts`: name, ticker and description
  - `src/plan.ts`: the three milestones and their statuses
  - `src/App.tsx`: renders the header and the plan list
  - `src/App.test.tsx`: checks that the name, ticker and three milestones render
- **Quality bar:** `npm test` and `npm run build` both pass.

## Out of scope

Wallets, prices, trading data, forms, accounts, analytics, and any runtime data fetching.
