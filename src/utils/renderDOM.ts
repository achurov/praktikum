import Block from '../utils/block';

export default function render(query: string, block: Block) {
    const root: HTMLElement = document.querySelector(query) as HTMLElement;
// console.log(block.getElement())
    // Можно завязаться на реализации вашего класса Block
    root.append(block.getElement());

    // block.dispatchComponentDidMount();

    return root;
}