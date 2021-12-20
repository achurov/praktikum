import Block from '../../utils/block';
import { Props } from '../../utils/types';
import template from './template.pug';

export default class Error500Page extends Block {

    constructor(props: Props = {}) {

        super('div', props);

    }

    render() {
        return this.compile(template, this.props);
    }

}

