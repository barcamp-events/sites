import { Host, h } from "@stencil/core";
export class Clock {
    constructor() {
        this.size = 200;
    }
    componentWillLoad() {
        this.handleTime();
        this.handleBetween();
    }
    componentDidLoad() {
        this.handleBetween();
    }
    handleTime() {
        if (typeof this.time === "string") {
            this.time = new Date(this.time);
        }
        else if (!this.time) {
            this.time = new Date();
        }
        this.hourAngle = 360 * this.time.getHours() / 12;
        this.minuteAngle = 360 * this.time.getMinutes() / 60;
        this.secondAngle = 360 * this.time.getSeconds() / 60;
    }
    handleBetween() {
        if (typeof this.between === "string") {
            this.between = new Date(this.between);
        }
        if (this.element.shadowRoot.querySelector("stellar-chart")) {
            this.element.shadowRoot.querySelector("stellar-chart").options(this.chartConfig);
        }
    }
    get duration() {
        if (this.time.constructor === Date && this.between.constructor === Date) {
            // @ts-ignore
            return this.between.getHours() - this.time.getHours();
        }
    }
    get offset() {
        if (this.time.constructor === Date) {
            // @ts-ignore
            const minutes = this.time.getMinutes();
            // @ts-ignore
            return this.getHours12(this.time) + (minutes === 0 ? 0 : minutes / 60);
        }
    }
    getHours12(time) {
        return (time.getHours() + 11) % 12 + 1; // edited.
    }
    getMeridian(time) {
        return time.getHours() > 12 ? 'pm' : 'am';
    }
    formatted(time) {
        return this.getHours12(time) + this.getMeridian(time);
    }
    get rotation() {
        return this.offset * 30;
    }
    get chartConfig() {
        return {
            chart: {
                type: 'pie',
                margin: 0,
                padding: 0,
                plotShadow: false,
                plotBackgroundColor: "transparent",
                backgroundColor: "transparent",
                height: this.size,
                width: this.size,
            },
            title: false,
            tooltip: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: false,
                    animation: false
                },
                pie: {
                    size: (this.size * .975),
                    startAngle: this.rotation
                }
            },
            series: [{
                    name: 'Brands',
                    data: [
                        {
                            y: this.duration,
                            color: "var(--theme-base5)",
                            borderColor: "var(--black)",
                            borderWidth: this.size * .0125
                        }, {
                            color: "transparent",
                            borderColor: "transparent",
                            y: 12 - this.duration
                        }
                    ]
                }]
        };
    }
    render() {
        return (h(Host, { style: { "--size": `${this.size}px` } },
            h("svg", { viewBox: `0 0 ${this.size} ${this.size}` },
                h("g", null,
                    h("circle", { id: "circle", style: { "stroke": "var(--theme-base5)", "stroke-width": `${this.size * .02}px`, "fill": "var(--theme-base0)" }, cx: this.size / 2, cy: this.size / 2, r: this.size / 2 * .95 })),
                Array(12).fill("").map((_, i) => h("line", { x1: this.size / 2, y1: (this.size / 100) + (this.size / 8), x2: this.size / 2, y2: (this.size / 100) + (this.size / 30), transform: `rotate(${30 * i} ${this.size / 2} ${this.size / 2})`, style: { "stroke": "#000", "stroke-width": `${this.size / 80}px` } }))),
            h("stellar-chart", { type: "pie", id: "chart", class: this.between ? "db" : "dn" }),
            h("svg", { class: "above", viewBox: `0 0 ${this.size} ${this.size}` },
                h("g", null,
                    h("line", { x1: this.size / 2, y1: this.size / 2, x2: this.size / 2, y2: this.size * .7, transform: `rotate(${this.hourAngle - 180} ${this.size / 2} ${this.size / 2})`, style: { "stroke-width": `${this.size * .03}px`, "stroke": "var(--theme-base9)" }, id: "hourhand" }),
                    h("line", { x1: this.size / 2, y1: this.size / 2, x2: this.size / 2, y2: this.size * .8, transform: `rotate(${this.minuteAngle - 180} ${this.size / 2} ${this.size / 2})`, style: { "stroke-width": `${this.size * .04}px`, "stroke": "var(--theme-base7)" }, id: "minutehand" }),
                    h("line", { x1: this.size / 2, y1: this.size / 2, x2: this.size / 2, y2: this.size * .9, transform: `rotate(${this.secondAngle - 180} ${this.size / 2} ${this.size / 2})`, style: { "stroke-width": `${this.size * .02}px`, "stroke": "var(--theme-base3)" }, id: "secondhand" })),
                h("circle", { id: "center", style: { "fill": "var(--theme-base0)", "stroke": "var(--theme-base3)", "stroke-width": `5px` }, cx: this.size / 2, cy: this.size / 2, r: this.size * .02 })),
            h("stellar-tooltip", { align: "bottom-center" },
                !this.between && (typeof this.time === "object") && this.time.toLocaleTimeString('en-US'),
                this.between && (typeof this.time === "object" && typeof this.between === "object") && `From ${this.formatted(this.time)} to ${this.formatted(this.between)}`)));
    }
    static get is() { return "stellar-clock"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["clock.css"]
    }; }
    static get styleUrls() { return {
        "$": ["clock.css"]
    }; }
    static get properties() { return {
        "time": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string|Date",
                "resolved": "Date | string",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "time",
            "reflect": false
        },
        "between": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string|Date",
                "resolved": "Date | string",
                "references": {
                    "Date": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "between",
            "reflect": false
        },
        "size": {
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
            "attribute": "size",
            "reflect": false,
            "defaultValue": "200"
        },
        "animated": {
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
            "attribute": "animated",
            "reflect": false
        }
    }; }
    static get states() { return {
        "hourAngle": {},
        "minuteAngle": {},
        "secondAngle": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "time",
            "methodName": "handleTime"
        }, {
            "propName": "between",
            "methodName": "handleBetween"
        }, {
            "propName": "size",
            "methodName": "handleBetween"
        }, {
            "propName": "time",
            "methodName": "handleBetween"
        }]; }
}
