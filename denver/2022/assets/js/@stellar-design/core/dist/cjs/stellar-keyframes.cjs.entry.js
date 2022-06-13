'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./_commonjsHelpers-3fc1f64e.js');
require('./index-5a80c644.js');
const cssCustomProperties_min = require('./css-custom-properties.min-d46e7f9d.js');
require('./main-6214461c.js');
require('./moment-fd045425.js');

const Follow = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.width = 400;
        this.height = 400;
        this.frame = 1;
    }
    componentWillLoad() {
        this.update();
    }
    update() {
        cssCustomProperties_min.properties.set({
            '--width': `${this.width}px`,
            '--height': `${this.height}px`,
            '--aspect-ratio': `${this.width / this.height * 100}%`,
            '--position': `0 ${this.height * -(this.frame - 1)}px`
        }, this.element);
    }
    render() {
        return core.h("div", { class: "background", style: { "background-image": `url(${this.src})` } });
    }
    get element() { return core.getElement(this); }
    static get watchers() { return {
        "frame": ["update"]
    }; }
    static get style() { return ":host{--position:var(--position,0);display:block;width:100%;height:100%;max-width:var(--width);max-height:var(--height)}:host .background{background-position:var(--position);background-size:cover;width:var(--width);height:var(--height);display:block}"; }
};

exports.stellar_keyframes = Follow;
