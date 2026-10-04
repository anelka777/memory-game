import { CARDS } from './cards.js';

export function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export function createDeck() {
    const doubled = CARDS.flatMap((card) => [{ ...card }, { ...card }]);
    return shuffle(doubled).map((card, index) => ({
        ...card,
        uid: index,
        open: false,
        matched: false,
    }));
}