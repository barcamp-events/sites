'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const DocsNotFound = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: 'app-profile' }, core.h("h1", null, "404")));
    }
    static get style() { return ""; }
};

exports.stellar_docs_not_found = DocsNotFound;
