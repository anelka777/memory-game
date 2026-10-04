import { el } from './dom.js';

export function createLayout() {
    const newGameBtn = el('button', { class: 'btn', type: 'button' }, 'New Game');
    const leaderboardBtn = el('button', { class: 'btn', type: 'button' }, 'Leaderboard');
    const movesEl = el('span', {}, '0');
    const pairsEl = el('span', {}, '0');
    const board = el('div', { class: 'board' });

    const header = el(
        'header',
        { class: 'header' },
        el('h1', { class: 'title' }, 'Memory Game'),
        el('div', { class: 'header-buttons' }, newGameBtn, leaderboardBtn),
    );

    const stats = el(
        'div',
        { class: 'stats' },
        el('span', {}, 'Moves: ', movesEl),
        el('span', {}, 'Pairs: ', pairsEl, ' of 8'),
    );

    document.body.append(header, el('main', { class: 'main' }, stats, board));

    return { newGameBtn, leaderboardBtn, movesEl, pairsEl, board };
}