import { createLayout, renderBoard, setCardOpen } from './ui.js';
import { createDeck } from './game.js';
import { saveResult } from './storage.js';
import { showLeaderboard, showVictory } from './modals.js';

const CLOSE_DELAY = 1000;
const TOTAL_PAIRS = 8;

const ui = createLayout();

let deck = [];
let firstCard = null;
let locked = false;
let timerId = null;
let moves = 0;
let pairs = 0;

function updateCounters() {
    ui.movesEl.textContent = moves;
    ui.pairsEl.textContent = pairs;
}

function startNewGame() {
    clearTimeout(timerId);
    timerId = null;
    firstCard = null;
    locked = false;
    moves = 0;
    pairs = 0;
    deck = createDeck();
    renderBoard(ui.board, deck);
    updateCounters();
}

function handleBoardClick(event) {
    const button = event.target.closest('.card');
    if (!button) return;

    const card = deck[Number(button.dataset.uid)];
    if (locked || card.open || card.matched) return;

    card.open = true;
    setCardOpen(ui.board, card.uid, true);

    if (!firstCard) {
        firstCard = card;
        return;
    }

    moves += 1;
    const secondCard = card;

    if (firstCard.id === secondCard.id) {
        firstCard.matched = true;
        secondCard.matched = true;
        pairs += 1;
        firstCard = null;
        updateCounters();
        if (pairs === TOTAL_PAIRS) {
            saveResult(moves);
            showVictory(moves, startNewGame);
        }
        return;
    }

    const pair = [firstCard, secondCard];
    firstCard = null;
    locked = true;
    updateCounters();
    timerId = setTimeout(() => {
        pair.forEach((c) => {
            c.open = false;
            setCardOpen(ui.board, c.uid, false);
        });
        locked = false;
        timerId = null;
    }, CLOSE_DELAY);
}

ui.board.addEventListener('click', handleBoardClick);
ui.newGameBtn.addEventListener('click', startNewGame);
ui.leaderboardBtn.addEventListener('click', showLeaderboard);
startNewGame();