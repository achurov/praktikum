import Block from "./block";

export default class Route {

    private pathname: String;
    private blockClass: Block;
    private block: Block;
    private props: unknown;

    constructor(pathname: String, view: Block, props: unknown) {
        this.pathname = pathname;
        this.blockClass = view;
        // this.block = null;
        this.props = props;
    }

    // navigate(pathname:String) {
    //     if (this.match(pathname)) {
    //         this._pathname = pathname;
    //         this.render();
    //     }
    // }

    leave() {
        if (this.block) {
            this.block.hide();
          }
    }

    match(pathname: String): Boolean {
        return this.isEqual(pathname, this.pathname);
    }

    isEqual(lhs: String, rhs: String): Boolean {
        return lhs === rhs;
    }

    render() {
        if (!this.block) {
            this.block = new this.blockClass();
        }

        this.block.show();
    }
}