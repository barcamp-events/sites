'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const Reveal = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Direction the element moves when animating in
         */
        this.direction = 'up';
        /**
         * How long to delay the animation (ms)
         */
        this.delay = 0;
        /**
         * How long the animation runs (ms)
         */
        this.duration = 500;
        /**
         * How far the element moves in the animation (% of element width/height)
         */
        this.animationDistance = '30%';
        /**
         * How much of the element must be visible before it animates (% of element height)
         */
        this.triggerDistance = '33%';
    }
    componentDidLoad() {
        const animationDistance = this.direction === 'right' || this.direction === 'down' ? '-' + this.animationDistance : this.animationDistance;
        this.element.querySelector('.reveal').style.setProperty('--distance', animationDistance);
    }
    in() {
        this.element.querySelector('.reveal').classList.add(`slide-${this.direction}`);
    }
    render() {
        return (core.h("div", { class: "reveal", style: {
                animationDuration: `${this.duration}ms`,
                animationDelay: `${this.delay}ms`
            } }, core.h("slot", null), core.h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), margin: this.triggerDistance })));
    }
    get element() { return core.getElement(this); }
    static get style() { return "\@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-up{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@keyframes slide-down{0%{-webkit-transform:translateY(var(--distance));transform:translateY(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-right{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}\@keyframes slide-left{0%{-webkit-transform:translateX(var(--distance));transform:translateX(var(--distance))}to{opacity:1}}.reveal{opacity:0;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-duration:.5s;animation-duration:.5s}.slide-up{-webkit-animation-name:slide-up;animation-name:slide-up}.slide-down{-webkit-animation-name:slide-down;animation-name:slide-down}.slide-left,.slide-right{-webkit-animation-name:slide-right;animation-name:slide-right}"; }
};

exports.stellar_reveal = Reveal;
