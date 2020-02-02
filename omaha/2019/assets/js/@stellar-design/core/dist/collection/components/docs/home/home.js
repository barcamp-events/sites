import { h } from "@stencil/core";
export class DocsHome {
    render() {
        return (h("div", null,
            h("stellar-docs-header", null),
            h("stellar-layout", { size: "large", type: "sidebar" },
                h("aside", null,
                    h("stellar-docs-navigation", null)),
                h("main", null,
                    h("h1", null, "Home!")))));
    }
    static get is() { return "stellar-docs-home"; }
}
