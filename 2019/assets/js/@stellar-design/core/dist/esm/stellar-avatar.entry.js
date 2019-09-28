import { r as registerInstance, h, H as Host, g as getElement } from './core-36452501.js';
import { c as colors, t as titleCase } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';

const Avatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.notooltip = false;
        this.color = "auto";
        this.name = "Stellar";
        this.initials = "ST";
        this.shape = "square";
        this.processing = false;
        this.dark = false;
        this.colorAuto = false;
    }
    componentWillLoad() {
        this.colors = Object.keys(colors).filter((color) => {
            // @ts-ignore
            return !["base", "white", "black"].includes(color);
        });
        if (this.color === "auto") {
            this.colorAuto = true;
        }
        this.formatName();
    }
    formatName() {
        if (this.processing) {
            this.initials = "";
            return;
        }
        if (this.color === "auto" || this.colorAuto) {
            this.colorAuto = true;
            this.color = this.colors[this.name.length % this.colors.length];
        }
        if (!this.name.length) {
            this.initials = "ST";
        }
        else {
            var the_name = titleCase(this.name);
            if (this.size === "large" || this.size === "medium") {
                this.initials = the_name.replace(/[^A-Z]/g, '').substring(0, 2);
            }
            else {
                this.initials = the_name.substring(0, 1);
            }
        }
        if (this.shape === "star" || this.shape === "diamond") {
            this.initials = this.initials.substring(0, 1);
        }
    }
    render() {
        return h(Host, { class: `theme-${this.color}` }, h("button", { class: "wrapper", title: `You tabbed on an Avatar for ${this.name}`, onFocus: () => { this.focus = true; }, onBlur: () => { this.focus = false; } }, this.processing && h("div", { class: "processing" }, h("stellar-avatar", { src: "Loading" })), h("div", { class: "content" }, h("div", { class: "spacer" }), h("div", { class: "letter", title: this.name }, this.initials), this.src && h("img", { src: this.src, alt: this.name })), !this.notooltip && h("stellar-tooltip", { focused: this.focus }, this.name)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "name": ["formatName"]
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:inline-block;width:var(--avatar-size);max-height:var(--avatar-size);font-size:var(--avatar-font-size);--avatar-color:var(--theme-base7,var(--red7));--avatar-color-dark:var(--theme-base5,var(--red5));--avatar-font-color:var(--white);--avatar-size:var(--ms4);--avatar-font-size:var(--ms1);--avatar-text-shadow:0 0 0px hsla(0,0%,100%,0.4);-webkit-filter:drop-shadow(var(--drop-shadow));filter:drop-shadow(var(--drop-shadow))}:host([size=tiny]){--avatar-size:var(--ms1);--avatar-font-size:var(--ms-2)}:host([size=small]){--avatar-size:var(--ms3);--avatar-font-size:var(--ms-1)}:host([size=medium]){--avatar-size:var(--ms6);--avatar-font-size:var(--ms3)}:host([size=large]){--avatar-size:calc(var(--ms8) + 0.1em);--avatar-font-size:var(--ms5)}:host .wrapper{display:block;position:relative;z-index:0;width:100%;max-width:2.2em;font:inherit;font-size:var(--avatar-font-size);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0;background:transparent}:host .content{overflow:hidden;position:relative}:host .spacer{display:block;background:var(--avatar-color);background:linear-gradient(45deg,var(--avatar-color),var(--avatar-color-dark));padding-top:100%;width:100%;height:0}:host .letter{display:-ms-flexbox;display:flex;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;text-align:center;text-transform:lowercase;line-height:100%;padding:.35em .4em .2em;color:var(--avatar-font-color);font-size:var(--avatar-font-size);font-weight:600;text-shadow:var(--avatar-text-shadow)}:host .letter,:host img{position:absolute;z-index:1;width:100%}:host img{top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:inherit;background:var(--white);height:auto;color:transparent;-o-object-fit:cover;object-fit:cover}:host([shape=circle]) .content,:host([shape=circle]) .spacer,:host([shape=circle]) .wrapper{border-radius:100%}:host([shape=rectangle]) .spacer{padding-top:60%}:host([shape=diamond]) .spacer{-webkit-clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}:host([shape=hexagon]) .spacer{-webkit-clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)}:host([shape=star]) .spacer{-webkit-clip-path:polygon(50% 0,64% 27%,98% 35%,74% 57%,79% 91%,50% 76%,21% 91%,25% 57%,2% 35%,36% 28%);clip-path:polygon(50% 0,64% 27%,98% 35%,74% 57%,79% 91%,50% 76%,21% 91%,25% 57%,2% 35%,36% 28%)}:host([shape=message]) .spacer{-webkit-clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,75% 100%,50% 75%,0 75%);clip-path:polygon(0 0,100% 0,100% 75%,75% 75%,75% 100%,50% 75%,0 75%)}:host([processing]) .letter{background:url(spinner.svg) no-repeat 50% 50%/50% 50%;color:transparent}:host([processing][size=large]) .letter{background-size:32px}:host([processing][size=medium]) .letter{background-size:16px}:host([dark]){--avatar-color:var(--theme-base8,var(--red8));--avatar-color-dark:var(--theme-base6,var(--red6));--avatar-font-color:var(--black);--avatar-text-shadow:0 0 0px rgba(0,0,0,0.4)}"; }
};
Tunnel.injectProps(Avatar, ['dark']);

export { Avatar as stellar_avatar };
