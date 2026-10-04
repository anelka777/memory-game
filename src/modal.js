import { el } from './dom.js';

export function openModal(render) {
    const dialog = el('dialog', { class: 'modal' });

    const close = () => dialog.close();

    dialog.append(el('div', { class: 'modal-content' }, ...render(close)));

    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) close();
    });

    dialog.addEventListener('close', () => {
        dialog.remove();
        document.body.classList.remove('no-scroll');
    });

    document.body.append(dialog);
    document.body.classList.add('no-scroll');
    dialog.showModal();
}