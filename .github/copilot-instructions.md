# Copilot / AI Agent Instructions for mindletr-app

Purpose: give a succinct, actionable orientation so an AI coding agent can be productive quickly.

**Big Picture**
- **Type:** Create React App (React + TypeScript) single-page app. Entry points: `src/index.tsx` → `src/App.tsx`.
- **UI:** All UI strings and comments are primarily in Turkish — preserve language unless asked to localize.
- **State + Data:** App logic and game state live mostly in `src/App.tsx`. Question data is static under `src/data/` and transformed by utilities in `src/utils/`.
- **Backend/integration:** Uses Firebase Realtime Database + Firebase Auth. Config is in `src/firebase.ts`. Leaderboard uses DB paths: `daily_scores/{date}`, `weekly_scores/{weekId}`, `monthly_scores/{monthId}`.

**Key Files / Patterns (quick lookup)**
- `src/App.tsx` — heavy single-file game logic, timers, share buttons, leaderboard subscriptions. Small changes should avoid large rewrites here.
- `src/firebase.ts` — initialization; contains the Firebase config and exports `db` and `auth`.
- `src/data/questions.ts`, `src/data/categories.ts` — canonical question + category data structures (IDs, category names, `options`, `correct` index).
- `src/utils/dailyQuestions.ts` — seed-based daily selection logic. If modifying selection or seed, test with multiple dates.
- `src/utils/*` — helpers for date, username generation, and selection. Use these rather than inlining logic.
- `src/components/*` — UI components (e.g., `CookieBanner.tsx`, `Leaderboard.tsx`, `Footer.tsx`). Keep visual changes here.

**Dev & CI commands**
- Start dev server: `npm start` (uses `react-scripts start`).
- Run tests: `npm test` (CRA interactive runner; `src/App.test.tsx` exists).
- Build for production: `npm run build` -> outputs to `build/` (do not edit build/ directly).
- Eject (not recommended): `npm run eject`.

Note: This project uses Create React App (react-scripts). DevDependencies include webpack/babel tools but the standard CRA scripts are used.

**Project-specific conventions and gotchas**
- Date/seeding: `getDailyQuestions` and `getGlobalSeed` use date-derived seeds (`getTodayString()` returns `Date.toDateString()`). Changing formats will affect reproducible daily questions.
- LocalStorage keys (used across the app): `lastPlayedDate`, `lastScore`, `selectedAnswers`, `mindle_user_history`, `mindletr_cookies`.
- Firebase DB shape: entries under `daily_scores/{date}/{uid}` store `{ username, score, time, timestamp }`. Weekly/monthly entries store cumulative `score` and `time` per UID.
- The code has many Turkish console messages and UX text — preserve or mirror them when adding features.
- `App.tsx` wires Firebase realtime listeners with `onValue` and calls `set`/`get` for updates. Keep async behavior and unsubscribes when refactoring.

**Editing guidance for AI agents**
- Small fixes: prefer targeted edits (fix function, adjust seed, tweak UI) and keep changes isolated to components/utilities.
- Large refactors: extract pieces from `src/App.tsx` into `src/components/` or `src/hooks/` and run `npm test` and `npm start` to validate behavior.
- When editing data selection: add unit tests around `src/utils/dailyQuestions.ts` and `src/utils/dateHelpers.ts` to ensure deterministic output.
- When touching Firebase rules or structure, coordinate changes in both `src/firebase.ts` and any DB path usages in `src/App.tsx`.

**Examples (copyable snippets)**
- Dev server (PowerShell):
```
npm install
npm start
```
- Build production: `npm run build`
- Test once after change: `npm test`

**When you see these files, pay attention**
- `src/App.tsx` — complex game flow and timers.
- `src/utils/dailyQuestions.ts` — deterministic selection logic.
- `src/firebase.ts` — external integration config (contains API key and DB URL).
- `src/data/questions.ts` — bulk content; editing here changes the app content directly.

If you alter behavior that affects user-visible daily content, verify by running the app locally and checking the `build/` output for static asset integrity. After edits, run `npm test` and start the dev server to smoke-test interactive flows.

If anything in this doc is unclear or you'd like more examples (e.g., typical PR checklist, preferred branch names, or formatting rules), tell me what to add.
