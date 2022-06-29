import { r as registerInstance, h, g as getElement, e as createEvent } from './core-36452501.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-e9450bee.js';
import './_commonjsHelpers-ae1b5db5.js';
import { b as blurringEase, d as delay } from './index-5afdd7fa.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';

const Content = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
        this.ease = blurringEase({
            end: 6,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async handleActive(event) {
        this.parent = event.detail.parent;
        const contents = await this.parent.contents();
        if (event.detail.name !== this.element.id) {
            contents.forEach((element) => {
                element.open = element.id === event.detail.name;
                if (element.open) {
                    this.ease.start();
                }
            });
        }
    }
    render() {
        return (h("div", { class: "wrap", role: "tabpanel", "aria-hidden": !this.open ? "true" : "false" }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:none;-webkit-animation-name:fadeInUp;animation-name:fadeInUp;-webkit-animation-timing-function:var(--ease);animation-timing-function:var(--ease);-webkit-animation-duration:.35s;animation-duration:.35s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0);opacity:0}:host([open]){display:block;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}"; }
};

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.open = false;
        this.dark = false;
        this.notifications = false;
        this.tag = "button";
        /**
        * Sets the href on the anchor tag if the button is a link.
        */
        this.href = '#';
        /**
         * Sets the target on the anchor tag if the button is a link.
         */
        this.target = '_self';
        this.vertical = false;
        this.contentChange = createEvent(this, "contentChange", 7);
    }
    componentWillLoad() {
        this.parent = this.element.closest('stellar-tabs');
    }
    handleResize() {
        this.handleIndicatorPosition();
    }
    componentDidLoad() {
        this.handleIndicatorPosition();
    }
    async handleClick(e) {
        const tabs = await this.parent.tabs();
        tabs.forEach((element) => {
            element.open = false;
        });
        this.open = true;
        this.handleIndicatorPosition();
        if (!this.disabled) {
            e.preventDefault();
            if (this.tag === "button") {
                this.contentChange.emit({
                    parent: this.parent,
                    name: this.name.replace(/[#]/g, "")
                });
            }
            else if (this.tag === "link") {
                await delay(350);
                window.location.href = this.href;
            }
        }
    }
    handleIndicatorPosition() {
        if (this.open && this.parent && this.parent.nodeName === "STELLAR-TABS") {
            // this.parent.blurring()
            if (this.parent.vertical) {
                properties.set({
                    "--tab-top": `${this.element.offsetTop}px`,
                    "--tab-height": `${this.element.offsetHeight}px`
                }, this.parent);
            }
            else {
                properties.set({
                    "--tab-left": `${this.element.offsetLeft}px`,
                    "--tab-width": `${this.element.offsetWidth}px`
                }, this.parent);
            }
        }
    }
    renderNotifications() {
        return this.notifications && h("stellar-tag", null, this.notifications);
    }
    renderTitle() {
        return h("span", { class: "title" }, h("slot", null));
    }
    renderButton() {
        return (h("button", { role: "tab", type: "button", disabled: this.disabled, "aria-selected": this.open ? "true" : "false", "aria-setsize": this.tabCount, "aria-posinset": this.order, tabindex: "0", class: "tab-button", onClick: (e) => this.handleClick(e) }, this.renderNotifications(), this.renderTitle()));
    }
    renderLink() {
        return (h("a", { role: "tab", href: this.href, target: this.target, class: "tab-button", "data-disabled": this.disabled, onClick: (e) => { this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    }
    renderAppLink() {
        return (h("stencil-route-link", { role: "tab", url: this.href, anchorClass: "tab-button", "data-disabled": this.disabled, onClick: (e) => { this.handleClick(e); } }, this.renderNotifications(), this.renderTitle()));
    }
    render() {
        return h("div", { class: "tab-wrap" }, this.tag === "button" && this.renderButton(), this.tag === "link" && this.renderLink(), this.tag === "route-link" && this.renderAppLink());
    }
    get element() { return getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--theme-base7);--focus-color:var(--theme-base8);--active-color:var(--theme-base9);--font-size:1rem;--font-weight:600;--height:100%;--button-padding:0 0.25em;display:block;z-index:2;font-family:inherit}:host,:host .tab-wrap{position:relative;font-size:var(--font-size);height:var(--height)}:host .tab-wrap{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:-1px .25em;padding:var(--padding);color:var(--color)}:host .tab-wrap stellar-tag{position:absolute;top:1px;right:-10px}:host .tab-wrap .tab-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;font-size:var(--font-size);position:relative;-ms-flex-pack:center;justify-content:center;-webkit-transition:color .2s;transition:color .2s;outline:none;padding:var(--button-padding);text-decoration:none;line-height:var(--ms1);color:var(--color);width:100%;height:100%;cursor:pointer;font-family:inherit}:host .tab-wrap .tab-button,:host .tab-wrap stencil-route-link{display:-ms-inline-flexbox;display:inline-flex}:host .tab-wrap .tab-button:focus,:host .tab-wrap .tab-button:hover{color:var(--focus-color)}:host([open]) .tab-wrap .tab-button{color:var(--active-color)}:host .tab-wrap .tab-button span{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:1;font-size:var(--font-size);font-weight:var(--font-weight)}:host([vertical]) .tab-wrap .tab-button span{width:100%;height:100%;text-align:left;-ms-flex-pack:start;justify-content:flex-start}:host .tab-wrap .tab-button span ::slotted(stellar-asset){line-height:0;margin-right:.25em}:host .tab-wrap .tab-button span ::slotted(stellar-avatar){line-height:0;margin:-1.175em .5em -1.075em -.5em}:host([disabled=true]) .tab-wrap{cursor:not-allowed;color:var(--theme-color-disabled)}:host([disabled=true]) .tab-wrap *{cursor:not-allowed}:host([disabled=true]) .tab-wrap .notifications{background:var(--theme-color-disabled)}:host([dark]) .tab-wrap .tab-button{color:var(--theme-base2)}:host([dark]) .tab-wrap .tab-button:focus,:host([dark]) .tab-wrap .tab-button:hover{color:var(--theme-base0)}:host([open][dark]) .tab-wrap .tab-button{color:var(--white)}"; }
};
Tunnel.injectProps(Tab, ['dark']);

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noanimation = false;
        this.block = false;
        this.vertical = false;
        this.dark = false;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
        this.blur = 0;
    }
    async tabs() {
        if (!this.tabsList || this.tabsList.length === 0) {
            this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
        }
        return this.tabsList;
    }
    async contents() {
        this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
        return this.contentsList;
    }
    async blurring() {
        this.ease.start();
    }
    async componentWillLoad() {
        await this.tabs();
        await this.contents();
        this.tabsList.forEach((tab) => {
            if (this.dark) {
                tab.dark = this.dark;
            }
            if (this.vertical) {
                tab.vertical = this.vertical;
            }
        });
    }
    handleDark() {
        this.tabsList.forEach((tab) => {
            tab.dark = this.dark;
        });
    }
    async componentDidLoad() {
        if (!this.noanimation) {
            setTimeout(() => {
                // @ts-ignore
                window.dispatchEvent(new Event('resize'));
                this.element.shadowRoot.querySelector('.indicator').classList.add('ready');
            }, 100);
        }
        const tabs = await this.tabs();
        const tabCount = tabs.length;
        tabs.forEach((tab, index) => {
            tab.order = index + 1;
            tab.tabCount = tabCount;
        });
    }
    render() {
        return (h("div", { class: "tab-wrap" }, h("div", { class: "tab-list", role: "tablist" }, h("slot", null), h("stellar-blur", { horizontal: !this.vertical ? this.blur : 0, vertical: this.vertical ? this.blur : 0 }, h("div", { class: "indicator" })))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "dark": ["handleDark"]
    }; }
    static get style() { return ":host{--font-size:var(--ms0);--padding:calc(var(--ms-1) + 0.4em) var(--ms-1);--indicator-color:var(--theme-base5);--overflow:auto hidden;--justify-content:space-evenly;font-size:var(--font-size);display:block;position:relative;margin:0;width:auto;overflow:var(--overflow);-webkit-overflow-scrolling:touch;-webkit-scroll-snap-type:mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;-webkit-scroll-snap-points-x:repeat(10%);-ms-scroll-snap-points-x:repeat(10%);scroll-snap-points-x:repeat(10%);font-family:var(--font-primary);border-bottom:1px solid var(--theme-base1);background:var(--white)}:host([size=tiny]){--font-size:var(--ms-2);--padding:calc(var(--ms-3) + 0.45em) var(--ms-3)}:host([size=small]){--font-size:var(--ms-1);--padding:calc(var(--ms-2) + 0.5em) var(--ms-2)}:host([size=medium]){--font-size:var(--ms1);--padding:calc(var(--ms0) + 0.25em) var(--ms0)}:host([size=large]){--font-size:var(--ms2);--padding:calc(var(--ms1) + 0.1em) var(--ms1)}:host stellar-blur{position:absolute;width:100%;height:100%;left:0;bottom:0}:host .indicator{display:block;position:absolute;bottom:-.1em;left:var(--tab-left,0);background:var(--indicator-color);width:var(--tab-width,0);height:.4em}:host([flip-indicator]) .indicator{top:-.1em;bottom:auto}:host .indicator.ready{-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host .tab-wrap{max-width:1200px;margin:auto;height:100%}:host .tab-list{display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:0;list-style:none;text-align:center;white-space:nowrap;height:100%;width:100%}:host .tab-wrap[height=flex],:host .tab-wrap[height=flex] .tab-list,:host .tab-wrap[height=flex] ::slotted(stellar-tab){height:100%}:host(:not([vertical])) ::slotted(stellar-tab+stellar-tab){margin-left:1em}:host([block]){overflow:var(--overflow);border:1px solid var(--theme-base0);width:100%}:host([block]) .tab-wrap{overflow:var(--overflow);height:100%}:host([block]) .tab-list,:host([block]) .tab-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:var(--justify-content);justify-content:var(--justify-content)}:host([block]) .tab-list{width:100%;margin:0 3px}:host([block]) ::slotted(stellar-tab[open=true]){color:var(--theme-base5)!important}:host([block-indicator]) .indicator{height:calc(100% - 6px);background:var(--theme-base1);top:3px;bottom:3px;-webkit-transition:all .35s var(--ease);transition:all .35s var(--ease)}:host([vertical]){height:auto;border-right:1px solid var(--theme-base1);border-bottom:0}:host([vertical]) .indicator{width:.4em;top:var(--tab-top);height:var(--tab-height)}:host([vertical]) .tab-list{-ms-flex-direction:column;flex-direction:column}:host([vertical]) .tab-list ::slotted(stellar-tab){height:auto}:host([height=auto]){height:100%}:host([dark]){border-color:var(--theme-base9);background:var(--black)}:host([dark]) .indicator{background:var(--theme-base5)}:host([block][dark]){border:1px solid var(--theme-base9)}"; }
};
Tunnel.injectProps(Tabs, ['dark']);

export { Content as stellar_content, Tab as stellar_tab, Tabs as stellar_tabs };
