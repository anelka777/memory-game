import { createLayout, renderBoard } from './ui.js';
import { createDeck } from './game.js';

const ui = createLayout();
let deck;

function startNewGame() {
    deck = createDeck();
    renderBoard(ui.board, deck);
    ui.movesEl.textContent = '0';
    ui.pairsEl.textContent = '0';
}

ui.newGameBtn.addEventListener('click', startNewGame);
startNewGame();