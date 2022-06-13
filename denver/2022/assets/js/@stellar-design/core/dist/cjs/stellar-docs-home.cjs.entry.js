'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const DocsHome = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", null, core.h("stellar-docs-header", null), core.h("stellar-layout", { size: "large", type: "sidebar" }, core.h("aside", null, core.h("stellar-docs-navigation", null)), core.h("main", null, core.h("h1", null, "Home!")))));
    }
};

exports.stellar_docs_home = DocsHome;
