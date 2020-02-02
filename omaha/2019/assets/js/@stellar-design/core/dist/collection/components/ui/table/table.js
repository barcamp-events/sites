import { h } from "@stencil/core";
export class Table {
    constructor() {
        this.upgrade = false;
        this.chart = false;
        this.striped = false;
    }
    tableChangeHandler() {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    }
    componentWillLoad() {
        if (this.chart) {
            this.element.querySelector('table').id = this.name;
        }
    }
    componentDidLoad() {
        if (this.chart) {
            this.element.querySelector('stellar-chart').refresh();
        }
    }
    render() {
        return [
            this.chart && h("stellar-chart", { for: this.name }),
            this.upgrade ? h("complete-table", { name: this.name },
                h("slot", null)) : h("slot", null)
        ];
    }
    static get is() { return "stellar-table"; }
    static get originalStyleUrls() { return {
        "$": ["table.css"]
    }; }
    static get styleUrls() { return {
        "$": ["table.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        },
        "upgrade": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "upgrade",
            "reflect": false,
            "defaultValue": "false"
        },
        "chart": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "chart",
            "reflect": false,
            "defaultValue": "false"
        },
        "striped": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "striped",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "change",
            "method": "tableChangeHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
