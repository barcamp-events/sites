import { r as registerInstance, h, H as Host, g as getElement } from './core-36452501.js';

const Clock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { style: { "--size": `${this.size}px` } }, h("svg", { viewBox: `0 0 ${this.size} ${this.size}` }, h("g", null, h("circle", { id: "circle", style: { "stroke": "var(--theme-base5)", "stroke-width": `${this.size * .02}px`, "fill": "var(--theme-base0)" }, cx: this.size / 2, cy: this.size / 2, r: this.size / 2 * .95 })), Array(12).fill("").map((_, i) => h("line", { x1: this.size / 2, y1: (this.size / 100) + (this.size / 8), x2: this.size / 2, y2: (this.size / 100) + (this.size / 30), transform: `rotate(${30 * i} ${this.size / 2} ${this.size / 2})`, style: { "stroke": "#000", "stroke-width": `${this.size / 80}px` } }))), h("stellar-chart", { type: "pie", id: "chart", class: this.between ? "db" : "dn" }), h("svg", { class: "above", viewBox: `0 0 ${this.size} ${this.size}` }, h("g", null, h("line", { x1: this.size / 2, y1: this.size / 2, x2: this.size / 2, y2: this.size * .7, transform: `rotate(${this.hourAngle - 180} ${this.size / 2} ${this.size / 2})`, style: { "stroke-width": `${this.size * .03}px`, "stroke": "var(--theme-base9)" }, id: "hourhand" }), h("line", { x1: this.size / 2, y1: this.size / 2, x2: this.size / 2, y2: this.size * .8, transform: `rotate(${this.minuteAngle - 180} ${this.size / 2} ${this.size / 2})`, style: { "stroke-width": `${this.size * .04}px`, "stroke": "var(--theme-base7)" }, id: "minutehand" }), h("line", { x1: this.size / 2, y1: this.size / 2, x2: this.size / 2, y2: this.size * .9, transform: `rotate(${this.secondAngle - 180} ${this.size / 2} ${this.size / 2})`, style: { "stroke-width": `${this.size * .02}px`, "stroke": "var(--theme-base3)" }, id: "secondhand" })), h("circle", { id: "center", style: { "fill": "var(--theme-base0)", "stroke": "var(--theme-base3)", "stroke-width": `5px` }, cx: this.size / 2, cy: this.size / 2, r: this.size * .02 })), h("stellar-tooltip", { align: "bottom-center" }, !this.between && (typeof this.time === "object") && this.time.toLocaleTimeString('en-US'), this.between && (typeof this.time === "object" && typeof this.between === "object") && `From ${this.formatted(this.time)} to ${this.formatted(this.between)}`)));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "time": ["handleTime", "handleBetween"],
        "between": ["handleBetween"],
        "size": ["handleBetween"]
    }; }
    static get style() { return ":host{display:inline-block;position:relative}:host,:host stellar-chart{width:var(--size);height:var(--size)}:host stellar-chart{position:absolute;top:0;left:0;display:none;--background:transparent!important}:host .above,:host stellar-chart.db{display:block}:host .above{position:absolute;top:0;left:0;height:var(--size);width:var(--size)}"; }
};

export { Clock as stellar_clock };
