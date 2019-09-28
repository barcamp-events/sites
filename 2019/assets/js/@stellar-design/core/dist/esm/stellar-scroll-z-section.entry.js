import { r as registerInstance, h, g as getElement } from './core-8f5ef0c7.js';

const ScrollZSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("slot", null);
    }
    get element() { return getElement(this); }
};

export { ScrollZSection as stellar_scroll_z_section };
