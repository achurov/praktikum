import Block from '../utils/block';

export default function render(block: Block) {
    const root: HTMLElement = document.querySelector('#app') as HTMLElement;
    root.append(block.getElement());
    
    return root;
}