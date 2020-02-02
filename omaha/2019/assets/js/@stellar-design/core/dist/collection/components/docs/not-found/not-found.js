import { h } from "@stencil/core";
export class DocsNotFound {
    render() {
        return (h("div", { class: 'app-profile' },
            h("h1", null, "404")));
    }
    static get is() { return "stellar-docs-not-found"; }
    static get originalStyleUrls() { return {
        "$": ["not-found.css"]
    }; }
    static get styleUrls() { return {
        "$": ["not-found.css"]
    }; }
}
