'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./index-9d31ce96.js');
const theme$1 = require('./theme-6129a8c3.js');
require('./_commonjsHelpers-3fc1f64e.js');
const index$1 = require('./index-5a80c644.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');

const Card = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Renders a shadow on the card
         */
        this.shadow = "medium";
        /**
         * Let's a card be flippable
         */
        this.flippable = false;
        /**
         * Renders a flipped card
         */
        this.flipped = false;
        /**
         * Sets the padding inside of the button. Can be small, medium, or large.
         */
        this.padding = "medium";
        /**
         * Sets the element to render the card as - an anchor tag, a button, or a div.
         */
        this.tag = "div";
        /**
         * Sets the href if the card is a link.
         */
        this.href = "#";
        /**
         * Sets the name if the card is a button.
         */
        this.name = "";
        /**
         * Sets the value if the card is a button.
         */
        this.value = "#";
        /**
         * Sets the href on the anchor tag if the button is a link.
         */
        this.flip_icon = "cog";
        this.dark = false;
        this.flip = core.createEvent(this, "flip", 7);
    }
    componentDidLoad() {
        this.updateFlippableCardHeight();
        this.addResizeObserver();
    }
    addResizeObserver() {
        this.ro = new index$1.ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                cssCustomProperties_min.properties.set({ '--card-width': `${width}px` }, entry.target);
            }
        });
        this.ro.observe(this.element);
    }
    updateFlippableCardHeight() {
        if (this.flippable) {
            const front = this.element.shadowRoot.querySelector('.front');
            const front_height = front.offsetHeight;
            cssCustomProperties_min.properties.set({ '--min-height': `${front_height}px` }, this.element);
            const back = this.element.shadowRoot.querySelector('.back');
            const back_height = back.scrollHeight;
            cssCustomProperties_min.properties.set({ '--flipped-min-height': `${back_height + 50}px` }, this.element);
        }
    }
    async click() {
        if (this.for) {
            const target = this.for.split(":");
            if (target[0] === "modal") {
                // @ts-ignore
                const modal = document.querySelector(`stellar-modal[name="${target[1]}"]`);
                modal.open();
            }
        }
        return true;
    }
    async flip_card(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.flippable) {
            this.flipped = !this.flipped;
            this.flip.emit();
        }
    }
    render() {
        const childProps = {
            href: this.href,
            url: this.href,
            name: this.name,
            value: this.value,
            type: this.type
        };
        // @ts-ignore
        return (core.h(this.tag, Object.assign({}, childProps, { class: "stencil-route-link" !== this.tag ? "wrap" : "", anchorClass: "stencil-route-link" === this.tag ? "wrap" : "", onClick: (e) => { this.click(e); } }), this.flippable && [
            core.h("stellar-button", { tag: "button", ghost: true, class: "flip-button", onClick: (e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e); } }, core.h("stellar-asset", { name: this.flipped ? "close" : this.flip_icon, class: "ma0" })),
            core.h("div", { class: "front" }, core.h("slot", null)),
            core.h("div", { class: "back" }, core.h("slot", { name: "back" }))
        ], !this.flippable && core.h("slot", null)));
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;background:var(--background);border-radius:var(--border-radius);height:100%;--border:1px solid var(--gray1);--background:var(--white);--background-active:var(--theme-base0);--flipped-background:var(--white);--flipped-min-height:var(--flipped-min-height,20rem);--border-radius:var(--border-radius-sm);--padding:3rem;--min-height:10rem;--card-width:auto}:host([padding=none]){--padding:0rem}:host([padding=tiny]){--padding:0.5rem}:host([padding=small]){--padding:1rem}:host([padding=medium]){--padding:2rem}:host([padding=large]){--padding:4rem}:host .wrap{-moz-appearance:none;appearance:none;-webkit-appearance:none!important;display:block;border:var(--border);width:var(--card-width);height:100%;text-decoration:none;outline:none;display:grid;border-radius:var(--border-radius);background:var(--background);text-align:inherit;font-size:inherit;color:inherit}:host([flippable]) .wrap .back,:host([flippable]) .wrap .front,:host .wrap{padding:0;grid-template-columns:var(--padding) 1fr var(--padding);grid-template-rows:auto var(--padding) 1fr var(--padding) auto;grid-template-areas:\"header header header\" \". . .\" \". section .\" \". . .\" \"footer footer footer\";min-height:var(--min-height)}:host([flippable]) .wrap .back,:host([flippable]) .wrap .front{height:auto;display:grid}:host .wrap ::slotted(*),:host .wrap ::slotted(section){grid-area:section;max-width:calc(var(--card-width) - (var(--padding) * 2))}:host .wrap ::slotted(.flush),:host .wrap ::slotted(section.flush){grid-column:1/span 3;width:100%!important;max-width:100%!important;grid-row:1/span 4;padding:1rem}:host .wrap ::slotted(header){padding:1rem var(--padding);border-bottom:var(--border);border-radius:var(--border-radius) var(--border-radius) 0 0;grid-area:header!important;width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host .wrap ::slotted(header.subhead){background:var(--theme-base8)}:host .wrap ::slotted(header.sticky){position:-webkit-sticky;position:sticky;top:0;z-index:999999}:host .wrap ::slotted(footer){grid-area:footer!important;padding:1rem var(--padding);border-top:var(--border);width:calc(var(--card-width) - 2px);max-width:calc(var(--card-width) - 2px)}:host([has*=header][has*=footer]){grid-template-columns:1rem auto 1rem;grid-template-rows:1fr auto 1fr}:host stencil-route-link.wrap a{text-decoration:none}:host a.wrap:active,:host button.wrap:active,:host stencil-route-link.wrap:active{background:var(--background-active)}:host([shadow=light]){-webkit-box-shadow:0 .8rem 3rem -2rem var(--gray1);box-shadow:0 .8rem 3rem -2rem var(--gray1)}:host([shadow=heavy]){-webkit-box-shadow:0 .8rem 3rem -1rem var(--gray1);box-shadow:0 .8rem 3rem -1rem var(--gray1)}:host([rounded=true]){border-radius:1rem}:host([flippable]){-webkit-perspective:3000px;perspective:3000px;background:transparent}:host([flippable]) .wrap{display:block;background:var(--background);-webkit-transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s;transition:all .5s var(--ease,ease-in-out) 0s,background-color 0s ease 0s}:host([flippable]) .wrap .front{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important;z-index:1;opacity:1;height:100%}:host([flippable]) .wrap .back *,:host([flippable]) .wrap .front{-webkit-backface-visibility:hidden;backface-visibility:hidden}:host([flippable]) .wrap .back{top:0;left:0;position:absolute;height:100%;width:100%;z-index:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);overflow-y:none;pointer-events:none;opacity:0}:host([flippable]) .wrap .back,:host([flippable][flipped]) .wrap .front{-webkit-transition:min-height .35s linear 0s,opacity .15s linear 0s!important;transition:min-height .35s linear 0s,opacity .15s linear 0s!important}:host([flippable][flipped]) .wrap .back{-webkit-transition:min-height .35s linear 0s,opacity .15s linear .3s!important;transition:min-height .35s linear 0s,opacity .15s linear .3s!important}:host([flippable]) .wrap .flip-button{position:absolute;right:.5rem;top:.5rem;z-index:1;-webkit-transform:translateZ(1px);transform:translateZ(1px)}:host([flippable][flipped]){--background:var(--flipped-background,#fff)!important;--min-height:var(--flipped-min-height)!important;z-index:1}:host([flippable][flipped]) .wrap{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host([flippable][flipped]) .wrap .flip-button{-webkit-transform:translateZ(-1px);transform:translateZ(-1px)}:host([flippable][flipped]) .wrap .back,:host([flippable][flipped]) .wrap .front{min-height:var(--min-height)}:host([flippable][flipped]) .wrap .front{pointer-events:none;opacity:0}:host([flippable][flipped]) .wrap .back{pointer-events:auto;overflow-y:initial;opacity:1}:host([dark]){--border:1px solid var(--gray8);--background:var(--gray9);--background-active:var(--gray8);--flipped-background:var(--gray9)}"; }
};
theme$1.Tunnel.injectProps(Card, ['dark']);

exports.stellar_card = Card;
