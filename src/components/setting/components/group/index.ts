import Block from '../../../../utils/block';
import { Props } from '../../../../utils/types'
import template from './template.pug';
import './style.scss';
import Card from '../card'

export default class Group extends Block {

    constructor(props: Props = {}) {

        super('div', props);

    }

    render() {

        return this.compile(template, this.props);

    }
}