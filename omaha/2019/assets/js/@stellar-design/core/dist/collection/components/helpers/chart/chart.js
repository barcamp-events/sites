import { h } from "@stencil/core";
import Tunnel from '../../theme';
import Highcharts from 'highcharts';
import Data from 'highcharts/modules/data';
import merge from 'deepmerge';
import { theme, HighchartsModel } from './options';
Data(Highcharts);
export class Chart {
    constructor() {
        this.__options = {};
        this.__data = {};
        this.config = new HighchartsModel;
        this.dark = false;
    }
    handleConfig() {
        this.options(this.config);
    }
    handleAttrs() {
        this.options({});
    }
    componentDidLoad() {
        this.options(theme);
        this.refresh();
    }
    async options(newOptions) {
        this.__options = Object.assign(Object.assign(Object.assign(Object.assign({}, this.__options), { chart: {
                type: this.type
            }, data: {
                table: this.for
            }, series: [] }), { xAxis: { categories: [] } }), { yAxis: { categories: [] } });
        this.__options = merge.all([this.__options, newOptions, theme]);
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        this.refresh();
    }
    async get_options() {
        return this.__options;
    }
    async refresh() {
        this.__chart = this.element.shadowRoot.querySelector('.highchart');
        if (this.__chart) {
            this.__highchart = Highcharts.chart(this.__chart, this.__options);
        }
    }
    render() {
        return h("div", { class: "highchart" });
    }
    static get is() { return "stellar-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["chart.css"]
    }; }
    static get styleUrls() { return {
        "$": ["chart.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"area\"|\"areaspline\"|\"bar\"|\"bubble\"|\"column\"|\"line\"|\"pie\"|\"polygon\"|\"scatter\"|\"spline\"|\"waterfall\"",
                "resolved": "\"area\" | \"areaspline\" | \"bar\" | \"bubble\" | \"column\" | \"line\" | \"pie\" | \"polygon\" | \"scatter\" | \"spline\" | \"waterfall\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false
        },
        "remote": {
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
            "attribute": "remote",
            "reflect": false
        },
        "for": {
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
            "attribute": "for",
            "reflect": false
        },
        "config": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HighchartsModel",
                "resolved": "HighchartsModel",
                "references": {
                    "HighchartsModel": {
                        "location": "import",
                        "path": "./options"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "new HighchartsModel"
        },
        "dark": {
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
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "__chart": {},
        "__options": {},
        "__data": {},
        "__highchart": {},
        "__informant": {}
    }; }
    static get methods() { return {
        "options": {
            "complexType": {
                "signature": "(newOptions: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "get_options": {
            "complexType": {
                "signature": "() => Promise<any>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "refresh": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
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
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "config",
            "methodName": "handleConfig"
        }, {
            "propName": "type",
            "methodName": "handleAttrs"
        }, {
            "propName": "for",
            "methodName": "handleAttrs"
        }]; }
}
Tunnel.injectProps(Chart, ['dark']);
