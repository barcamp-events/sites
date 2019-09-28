import { r as registerInstance, h } from './core-8f5ef0c7.js';

const DocsNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-profile' }, h("h1", null, "404")));
    }
    static get style() { return ""; }
};

export { DocsNotFound as stellar_docs_not_found };
