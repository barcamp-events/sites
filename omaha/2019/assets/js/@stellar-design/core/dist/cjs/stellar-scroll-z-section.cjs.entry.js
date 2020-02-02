'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const ScrollZSection = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("slot", null);
    }
    get element() { return core.getElement(this); }
};

exports.stellar_scroll_z_section = ScrollZSection;
