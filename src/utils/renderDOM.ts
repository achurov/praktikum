import Block from '../utils/block';

export default function render(query: string, block: Block) {
    const root: HTMLElement = document.querySelector(query) as HTMLElement;
    root.append(block.getElement());
    
    return root;
}