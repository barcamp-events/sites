'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const AsyncContent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.content = '';
    }
    componentWillLoad() {
        if (this.documentLocation != null) {
            return this.fetchNewContent(this.documentLocation);
        }
    }
    fetchNewContent(newDocumentLocation) {
        return fetch(newDocumentLocation)
            .then(response => response.text())
            .then(data => {
            this.content = data;
        });
    }
    render() {
        return (core.h("div", { innerHTML: this.content }));
    }
    static get watchers() { return {
        "documentLocation": ["fetchNewContent"]
    }; }
};

exports.stencil_async_content = AsyncContent;
