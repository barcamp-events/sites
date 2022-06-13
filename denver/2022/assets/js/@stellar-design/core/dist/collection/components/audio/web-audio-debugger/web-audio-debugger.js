import { h } from "@stencil/core";
export class WebAudioDebugger {
    constructor() {
        this.history = [];
        this.count = 50;
    }
    async addHistory(string) {
        let our_history = [
            string,
            ...this.history
        ];
        if (our_history.length > this.count) {
            this.history = our_history.slice(1, this.count);
        }
        else {
            this.history = our_history;
        }
    }
    render() {
        return (h("div", null, this.history.map((log) => h("div", null,
            h("p", null, log)))));
    }
    static get is() { return "web-audio-debugger"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["web-audio-debugger.css"]
    }; }
    static get styleUrls() { return {
        "$": ["web-audio-debugger.css"]
    }; }
    static get properties() { return {
        "count": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "count",
            "reflect": false,
            "defaultValue": "50"
        }
    }; }
    static get states() { return {
        "history": {}
    }; }
    static get methods() { return {
        "addHistory": {
            "complexType": {
                "signature": "(string: History) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "History": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
