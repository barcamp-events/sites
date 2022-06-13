import { h } from "@stencil/core";
export class ScrollZSection {
    render() {
        return h("slot", null);
    }
    static get is() { return "stellar-scroll-z-section"; }
    static get elementRef() { return "element"; }
}
