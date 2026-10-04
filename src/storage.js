const KEY = 'memory-game-results';
const MAX_RESULTS = 10;

export function loadResults() {
    try {
        const data = JSON.parse(localStorage.getItem(KEY));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

export function saveResult(moves) {
    const results = [...loadResults(), { moves, timestamp: Date.now() }]
        .sort((a, b) => a.moves - b.moves || a.timestamp - b.timestamp)
        .slice(0, MAX_RESULTS);
    localStorage.setItem(KEY, JSON.stringify(results));
}