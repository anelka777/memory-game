# Memory Game

Card-matching game: flip two cards at a time and find all 8 pairs in as few moves as possible.

**Live demo:** <https://rss-memory-game.netlify.app>

## Features

- 16 cards shuffled with Fisher-Yates on every load and new game
- Move and pair counters
- Mismatched pair flips back after 1 second
- Victory modal with the final move count
- Leaderboard (top 10) saved in `localStorage`
- Reusable modal component (Close button, backdrop click, Escape)

## Run locally

```bash
git clone https://github.com/<your-username>/memory-game.git
cd memory-game
git checkout memory-game
npx serve .
```

Open the address shown in the terminal (usually `http://localhost:3000`).

The app uses ES modules, so it must be served over HTTP: opening `index.html` directly will not work. Any local server is fine, for example the built-in server in WebStorm or the Live Server extension in VS Code.

## Tech

Vanilla HTML, CSS and JavaScript (ES modules). No libraries or build step. All markup is created with `document.createElement`.