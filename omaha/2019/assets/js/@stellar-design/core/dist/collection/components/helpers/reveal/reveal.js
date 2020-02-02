import { h } from "@stencil/core";
export class Reveal {
    constructor() {
        /**
         * Direction the element moves when animating in
         */
        this.direction = 'up';
        /**
         * How long to delay the animation (ms)
         */
        this.delay = 0;
        /**
         * How long the animation runs (ms)
         */
        this.duration = 500;
        /**
         * How far the element moves in the animation (% of element width/height)
         */
        this.animationDistance = '30%';
        /**
         * How much of the element must be visible before it animates (% of element height)
         */
        this.triggerDistance = '33%';
    }
    componentDidLoad() {
        const animationDistance = this.direction === 'right' || this.direction === 'down' ? '-' + this.animationDistance : this.animationDistance;
        this.element.querySelector('.reveal').style.setProperty('--distance', animationDistance);
    }
    in() {
        this.element.querySelector('.reveal').classList.add(`slide-${this.direction}`);
    }
    render() {
        return (h("div", { class: "reveal", style: {
                animationDuration: `${this.duration}ms`,
                animationDelay: `${this.delay}ms`
            } },
            h("slot", null),
            h("stellar-intersection", { element: this.element, multiple: true, in: this.in.bind(this), margin: this.triggerDistance })));
    }
    static get is() { return "stellar-reveal"; }
    static get originalStyleUrls() { return {
        "$": ["reveal.css"]
    }; }
    static get styleUrls() { return {
        "$": ["reveal.css"]
    }; }
    static get properties() { return {
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'up' | 'down' | 'right' | 'left'",
                "resolved": "\"down\" | \"left\" | \"right\" | \"up\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Direction the element moves when animating in"
            },
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "'up'"
        },
        "delay": {
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
                "text": "How long to delay the animation (ms)"
            },
            "attribute": "delay",
            "reflect": false,
            "defaultValue": "0"
        },
        "duration": {
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
                "text": "How long the animation runs (ms)"
            },
            "attribute": "duration",
            "reflect": false,
            "defaultValue": "500"
        },
        "animationDistance": {
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
                "text": "How far the element moves in the animation (% of element width/height)"
            },
            "attribute": "animation-distance",
            "reflect": false,
            "defaultValue": "'30%'"
        },
        "triggerDistance": {
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
                "text": "How much of the element must be visible before it animates (% of element height)"
            },
            "attribute": "trigger-distance",
            "reflect": false,
            "defaultValue": "'33%'"
        }
    }; }
    static get elementRef() { return "element"; }
}
