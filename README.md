# ☕ Sip Happens Café — Feedback Widget

A small, fully typed React application for collecting customer feedback. Users rate the café's service as **Good**, **Neutral** or **Bad**, and the app instantly calculates and displays live statistics.

**🔗 Live demo:** [02-react-cafe-mu-sooty.vercel.app](https://02-react-cafe-mu-sooty.vercel.app/)
**📦 Repository:** [github.com/mrkorzun/02-react-cafe](https://github.com/mrkorzun/02-react-cafe)

---

## Features

- **One-click voting** — three rating options update the statistics in real time.
- **Live statistics** — total number of votes and the share of positive feedback (%).
- **Conditional rendering** — a "No feedback yet" message is shown until the first vote; statistics appear afterwards.
- **Smart Reset button** — rendered only when there is something to reset.
- **Derived state** — totals and percentages are computed from state, not stored in it (single source of truth, no sync bugs).
- **Cross-browser consistency** — styles are normalized with `modern-normalize`.

## Tech Stack

| Area         | Tools                                                                  |
| ------------ | ---------------------------------------------------------------------- |
| UI           | React 19 (function components, hooks)                                  |
| Language     | TypeScript 6 (strict mode)                                             |
| Build        | Vite 8, React Compiler (Babel plugin)                                  |
| Styling      | CSS Modules, `clsx`, `modern-normalize`                                |
| Code quality | ESLint (flat config, `typescript-eslint`, React Hooks rules), Prettier |
| Deployment   | Vercel                                                                 |

## Architecture

The app follows a **"smart container, presentational children"** pattern: all state lives in `App`, child components receive data and callbacks through typed props.

```
App  (state: votes, handlers: handleVote / resetVotes)
├── CafeInfo        — static header and description
├── VoteOptions     — voting buttons + conditional Reset   ← onVote, onReset, canReset
├── VoteStats       — statistics block                     ← votes, totalVotes, positiveRate
└── Notification    — empty-state message (when totalVotes === 0)
```

**Data flow:** button click → `onVote(type)` → state update in `App` → recalculated `totalVotes` / `positiveRate` → re-render of `VoteStats`.

### Typing

Shared types are kept in one place and reused across components:

```ts
// src/types/votes.ts
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = "good" | "neutral" | "bad";
```

Component-specific props (`VoteOptionsProps`, `VoteStatsProps`) are declared next to their components. Using the `VoteType` union instead of a plain `string` means an invalid vote type is caught at compile time, not at runtime.

### Statistics logic

```ts
const totalVotes = votes.good + votes.neutral + votes.bad;
const positiveRate = totalVotes
  ? Math.round((votes.good / totalVotes) * 100)
  : 0;
```

The zero check prevents division by zero (`NaN%`) before the first vote.

## Project Structure

```
src/
├── components/
│   ├── App/            App.tsx, App.module.css
│   ├── CafeInfo/       CafeInfo.tsx, CafeInfo.module.css
│   ├── Notification/   Notification.tsx, Notification.module.css
│   ├── VoteOptions/    VoteOptions.tsx, VoteOptions.module.css
│   └── VoteStats/      VoteStats.tsx, VoteStats.module.css
├── types/
│   └── votes.ts        shared types
└── main.tsx            entry point
```

Each component is self-contained: its markup, logic and scoped styles live in one folder, which makes components easy to move, reuse or delete.

## Getting Started

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/mrkorzun/02-react-cafe.git
cd 02-react-cafe
npm install
npm run dev
```

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the dev server with HMR                  |
| `npm run build`   | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run ESLint                                     |

## What This Project Demonstrates

- Building a UI from isolated, reusable components
- Lifting state up and passing data/callbacks via props
- Immutable state updates with `useState`
- Derived data instead of duplicated state
- Conditional rendering
- Strict TypeScript typing: interfaces, union types, typed props and handlers
- Scoped styling with CSS Modules
- Clean tooling setup (Vite, ESLint, Prettier) and CI-free deployment to Vercel

## Author

**Romario Korzun** — Fullstack Developer (in training, GoIT Fullstack Bootcamp)
GitHub: [@mrkorzun](https://github.com/mrkorzun)

---

_Built as part of the GoIT Fullstack Developer program. Design and base styles were provided by GoIT; component logic, state management and typing were implemented by the author._
