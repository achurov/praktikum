import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';

export default class Button extends Block {

    constructor(props: Props = {}) {

        super('button', props);

    }

    render() {

        return this.compile(template, this.props);

    }
}