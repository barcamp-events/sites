'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./index-9d31ce96.js');
const theme = require('./theme-6129a8c3.js');

const Comment = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.dark = false;
        this.empty = false;
    }
    componentWillLoad() {
        this.empty = this.element.querySelectorAll('stellar-comment').length === 0;
    }
    componentDidLoad() {
        if (this.element.querySelector('stellar-avatar')) {
            // @ts-ignore
            this.element.querySelector('stellar-avatar').tabIndex = -1;
            this.name = this.element.querySelector('stellar-avatar').name;
        }
        this.content = this.element.querySelector('[slot="content"]').textContent.trim();
    }
    render() {
        return (core.h("div", { class: `comment ${this.empty ? "empty" : ""}`, "aria-label": `Comment by ${this.name}: ${this.content}`, tabindex: 0 }, core.h("div", { class: "content" }, core.h("slot", { name: "avatar" }), core.h("slot", { name: "content" })), core.h("div", { class: `thread`, "aria-label": `In reply to  ${this.name} saying ${this.content}` }, core.h("slot", null))));
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}:host stellar-avatar{margin-right:1rem;float:left}:host .comment>.content{position:relative;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1rem;background:#fff;border:1px solid var(--gray2)}:host .comment>.thread{margin:0 0 0 3rem;position:relative}:host .comment ::slotted([slot=avatar]){margin-right:1rem}:host .comment>.thread:after{content:\"\";width:.4rem;height:calc(100% - .5rem);position:absolute;left:-1.25rem;top:-1.5rem;z-index:0;background:var(--theme-complement4);background:linear-gradient(135deg,var(--theme-complement4),var(--theme-base4) calc(100% - 2rem),var(--theme-base4))}:host .comment>.thread:before{content:\"\";width:20rem;height:.4rem;position:absolute;left:-1.25rem;bottom:2rem;z-index:0;background:var(--theme-base4)}:host .comment.empty>.content{margin:0}:host .comment.empty>.thread{display:none!important}:host ::slotted(stellar-comment){margin-top:1rem}:host([dark]) .comment>.content{background:var(--gray9);border:1px solid var(--gray8)}:host([dark]) .comment>.thread:after{background:var(--theme-complement9);background:linear-gradient(135deg,var(--theme-complement9),var(--theme-base9) calc(100% - 2rem),var(--theme-base9))}:host([dark]) .comment>.thread:before{background:var(--theme-base9)}"; }
};
theme.Tunnel.injectProps(Comment, ['dark']);

exports.stellar_comment = Comment;
