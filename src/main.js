import { el } from './dom.js';
import { createLayout } from './ui.js';

const ui = createLayout();

for (let i = 0; i < 16; i++) {
    ui.board.append(el('button', { class: 'card', type: 'button' }));
}