import moment from 'moment';
export class Time {
    constructor() {
        this.format = "MMMM Do YYYY, h:mm:ss a";
        this.relative = false;
    }
    componentWillLoad() {
        this.prepareResult();
    }
    prepareResult() {
        this.instance = moment(this.value);
        if (this.relative) {
            this.result = this.instance.fromNow();
        }
        else {
            this.result = this.instance.format(this.format);
        }
    }
    render() {
        return this.result;
    }
    static get is() { return "stellar-time"; }
    static get originalStyleUrls() { return {
        "$": ["time.css"]
    }; }
    static get styleUrls() { return {
        "$": ["time.css"]
    }; }
    static get properties() { return {
        "value": {
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
            "attribute": "value",
            "reflect": false
        },
        "format": {
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
            "attribute": "format",
            "reflect": false,
            "defaultValue": "\"MMMM Do YYYY, h:mm:ss a\""
        },
        "relative": {
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
            "attribute": "relative",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "instance": {},
        "result": {}
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "prepareResult"
        }]; }
}
