'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./_commonjsHelpers-3fc1f64e.js');
const eq_min = require('./eq.min-825e9b35.js');

const Grid = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.cols = "auto";
        this.compact = false;
        this.padding = false;
        this.align = "items-start";
        this.noresponsive = false;
    }
    async makeResponsive() {
        if (!this.noresponsive) {
            eq_min.eqjs.definePts(this.element, {
                "tiny": 320,
                "small": 480,
                "medium": 640,
                "large": 800,
                "massive": 1024
            });
            this.refresh();
        }
    }
    componentWillLoad() {
        this.makeResponsive();
    }
    componentDidLoad() {
        this.makeResponsive();
    }
    async refresh() {
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initEvent('resize', true, false);
        window.dispatchEvent(resizeEvent);
    }
    render() {
        return core.h(core.Host, { class: `${this.align}` }, core.h("slot", null));
    }
    get element() { return core.getElement(this); }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--grid-width:200px;--grid-gap:2rem;position:relative;display:-ms-flexbox;display:flex;display:grid;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:var(--grid-gap);grid-template-columns:repeat(auto-fit,minmax(var(--grid-width),1fr))}:host([padding]){padding:var(--grid-gap)}:host([noresponsive]){grid-template-columns:repeat(auto-fit,minmax(var(--grid-width),1fr))}:host([noresponsive][cols=\"1\"]){grid-template-columns:1fr}:host([noresponsive][cols=\"2\"]){grid-template-columns:repeat(2,1fr)}:host([noresponsive][cols=\"3\"]){grid-template-columns:repeat(3,1fr)}:host([noresponsive][cols=\"4\"]){grid-template-columns:repeat(4,1fr)}:host([noresponsive][cols=\"5\"]){grid-template-columns:repeat(5,1fr)}:host([noresponsive][cols=\"6\"]){grid-template-columns:repeat(6,1fr)}:host ::slotted(.width-all){grid-column:1/-1}:host ::slotted(.width-2){grid-column:auto/span 2}:host ::slotted(.width-3){grid-column:auto/span 3}:host ::slotted(.width-4){grid-column:auto/span 4}:host ::slotted(.width-5){grid-column:auto/span 5}:host ::slotted(.width-6){grid-column:auto/span 6}:host ::slotted(.height-all){grid-row:1/-1}:host ::slotted(.height-2){grid-row:auto/span 2}:host ::slotted(.height-3){grid-row:auto/span 3}:host ::slotted(.height-4){grid-row:auto/span 4}:host ::slotted(.height-5){grid-row:auto/span 5}:host ::slotted(.height-6){grid-row:auto/span 6}"; }
};

exports.stellar_grid = Grid;
