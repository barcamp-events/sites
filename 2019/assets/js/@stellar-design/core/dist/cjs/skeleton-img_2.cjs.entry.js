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

const SkeletonImg = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.width = 600;
        this.height = 300;
        this.block = false;
        this.loading = false;
        this.icon = false;
    }
    componentWillLoad() {
        if (this.block) ;
        else {
            cssCustomProperties_min.properties.set({
                '--width': `${this.width}px`,
                '--height': `${this.height}px`
            }, this.element);
        }
    }
    in() {
        this.element.classList.add('visible');
    }
    out() {
        this.element.classList.remove('visible');
    }
    render() {
        return [
            this.loading && this.icon && core.h("stellar-asset", { name: "spinning-bubbles", color: "gray25" }),
            core.h("svg", { width: this.width, height: this.height }, core.h("rect", { width: this.width, height: this.height })),
            core.h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), out: this.out.bind(this) })
        ];
    }
    get element() { return core.getElement(this); }
    static get style() { return "skeleton-img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;display:block;position:relative;margin-bottom:1rem;border-radius:4px;overflow:hidden;max-width:var(--width);max-height:var(--height)}skeleton-img svg{display:block;width:100%;height:auto;overflow:hidden}skeleton-img svg rect{fill:var(--theme-base5)}skeleton-img[loading]{position:relative}skeleton-img[loading]:before{content:\"\";display:block;position:absolute;top:0;right:0;bottom:0;left:-100%;background-color:var(--theme-base5);background-image:linear-gradient(45deg,var(--theme-base5),var(--theme-base5) 20%,var(--theme-base3) 40%,var(--theme-base4) 61%,var(--theme-base5) 80%,var(--theme-base5));width:300%;height:100%;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}skeleton-img[loading].visible:before{-webkit-animation:shimmer 1.25s linear 0s infinite forwards;animation:shimmer 1.25s linear 0s infinite forwards}skeleton-img stellar-asset{position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:var(--icon-width);height:var(--icon-height)}\@-webkit-keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}\@keyframes shimmer{0%{opacity:0;-webkit-transform:translateX(calc(var(--width) * -1.75));transform:translateX(calc(var(--width) * -1.75))}10%{opacity:1}90%{opacity:1}to{opacity:0;-webkit-transform:translateX(calc(var(--width) * 1.75));transform:translateX(calc(var(--width) * 1.75))}}"; }
};

const Progress = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Renders if this element is slender or not
         */
        this.slender = false;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.max = 100;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.indeterminate = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
         */
        this.editable = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.noease = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.rounded = false;
        /**
         * Sets the value of the progress bar
         */
        this.value = 0;
        /**
         * Sets the value of the progress bar
         */
        this.secondary = 0;
        this.blurable = true;
        this.wrapper = "stellar-blur";
        this.blur = 0;
        this.ease = index$1.blurringEase({
            end: 20,
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
        this.update = core.createEvent(this, "update", 7);
    }
    componentWillLoad() {
        if (!this.blurable) {
            this.wrapper = "div";
        }
    }
    observeValue() {
        if (!this.indeterminate && this.blurable) {
            this.ease.start();
        }
    }
    handleClick(e) {
        if (this.editable) {
            var bounding = this.element.getBoundingClientRect();
            var widthClicked = e.pageX - bounding.left;
            var totalWidth = bounding.width;
            var calc = (widthClicked / totalWidth * this.max);
            var rounded = Math.round(calc * 1e2) / 1e2;
            if (this.rounded) {
                rounded = Math.ceil(rounded);
            }
            this.value = rounded;
            this.update.emit({
                value: this.value
            });
        }
    }
    progress(secondary) {
        if (secondary) {
            let progress = (this.secondary / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
        else {
            let progress = (this.value / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
    }
    render() {
        if (this.indeterminate) {
            return core.h("svg", { viewBox: "0 0 100 100" }, core.h("circle", { cx: "50", cy: "50", r: "20", "stroke-width": "4", fill: "none", "stroke-linecap": "round" }));
        }
        // @ts-ignore
        return (core.h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: (e) => { this.handleClick(e); } }, core.h("div", { class: "status", style: { transform: `translate(${this.progress()}%, 0)` } }), this.secondary ? core.h("div", { class: "secondary", style: { transform: `translate(${this.progress(true)}%, 0)` } }) : ""));
    }
    get element() { return core.getElement(this); }
    static get watchers() { return {
        "value": ["observeValue"]
    }; }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;position:relative;overflow:hidden;--border-radius:0.3rem;--time:124;--negative-time:-124}:host .blur-content{display:block;height:100%}:host([editable]){cursor:pointer}:host .progress{display:block;position:relative;-webkit-transition:all .25s var(--ease) 0ms;transition:all .25s var(--ease) 0ms;background:var(--gray0);width:100%;height:.6rem;border-radius:var(--border-radius);overflow:hidden}:host([editable]:hover) .progress{height:2.4rem}:host .secondary,:host .status{position:absolute;top:0;right:0;bottom:0;left:-100%;-webkit-transition:all .35s var(--ease,ease-in-out) 0ms;transition:all .35s var(--ease,ease-in-out) 0ms;background:var(--theme-base5,var(--gray5));width:100%;z-index:2}:host .secondary{background:var(--theme-base3,var(--gray3));z-index:1}:host([slender]) .progress{border:0;height:.2rem}:host([slender][editable]:hover) .progress{height:.4rem}:host([noease]) .progress,:host([noease]) .secondary,:host([noease]) .status{-webkit-transition:none!important;transition:none!important}:host([indeterminate]){height:100px;width:100px}:host([indeterminate]) svg{-webkit-transform:rotate(0deg);transform:rotate(0deg);stroke:var(--theme-base5);-webkit-animation:rotate var(--ease) 9.2s infinite;animation:rotate var(--ease) 9.2s infinite}:host([indeterminate]) circle{stroke-dasharray:var(--time);stroke-dashoffset:var(--time);-webkit-animation:load var(--ease) 2.3s infinite;animation:load var(--ease) 2.3s infinite}:host([dark]) .progress{background:var(--theme-base9)}:host([dark]) .secondary{background:var(--theme-base7,var(--gray7));z-index:1}:host([dark]) circle{-webkit-animation:load-dark var(--ease) 2.3s infinite;animation:load-dark var(--ease) 2.3s infinite}\@-webkit-keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}\@keyframes load{0%{stroke:var(--theme-complement7)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-base3)}}\@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}25%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}75%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}\@keyframes load-dark{0%{stroke:var(--theme-complement5)}50%{stroke-dashoffset:0;stroke:var(--theme-base5)}75%{stroke:var(--theme-base7)}to{stroke-dashoffset:var(--negative-time);stroke:var(--theme-complement7)}}"; }
};
theme$1.Tunnel.injectProps(Progress, ['dark']);

exports.skeleton_img = SkeletonImg;
exports.stellar_progress = Progress;
