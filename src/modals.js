import { el } from './dom.js';
import { openModal } from './modal.js';
import { loadResults } from './storage.js';

function formatDate(timestamp) {
    const d = new Date(timestamp);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}.${d.getFullYear()}`;
}

function closeButton(close) {
    return el('button', { class: 'btn', type: 'button', onClick: close }, 'Close');
}

export function showLeaderboard() {
    openModal((close) => {
        const results = loadResults();

        const content = results.length
            ? el(
                'table',
                { class: 'results' },
                el(
                    'thead',
                    {},
                    el('tr', {}, el('th', {}, 'Place'), el('th', {}, 'Moves'), el('th', {}, 'Date')),
                ),
                el(
                    'tbody',
                    {},
                    ...results.map((r, i) =>
                        el(
                            'tr',
                            {},
                            el('td', {}, String(i + 1)),
                            el('td', {}, String(r.moves)),
                            el('td', {}, formatDate(r.timestamp)),
                        ),
                    ),
                ),
            )
            : el('p', {}, 'No results yet');

        return [
            el('h2', { class: 'modal-title' }, 'Leaderboard'),
            content,
            el('div', { class: 'modal-actions' }, closeButton(close)),
        ];
    });
}

export function showVictory(moves, onNewGame) {
    openModal((close) => [
        el('h2', { class: 'modal-title' }, 'You won!'),
        el('p', {}, `Total moves: ${moves}`),
        el(
            'div',
            { class: 'modal-actions' },
            el(
                'button',
                {
                    class: 'btn',
                    type: 'button',
                    onClick: () => {
                        close();
                        onNewGame();
                    },
                },
                'New Game',
            ),
            closeButton(close),
        ),
    ]);
}