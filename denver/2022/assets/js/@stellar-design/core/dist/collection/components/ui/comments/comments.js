import { h } from "@stencil/core";
export class Comments {
    render() {
        return (h("section", null,
            h("slot", null)));
    }
    static get is() { return "stellar-comments"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["comments.css"]
    }; }
    static get styleUrls() { return {
        "$": ["comments.css"]
    }; }
    static get states() { return {
        "comments": {}
    }; }
}
