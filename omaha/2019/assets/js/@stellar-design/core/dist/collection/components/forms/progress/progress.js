import { h } from "@stencil/core";
import { blurringEase } from '../../../utils';
import Tunnel from '../../theme';
export class Progress {
    constructor() {
        /**
         * Renders if this element is slender or not
         */
        this.slender = false;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.max = 100;
        /**
         * Sets the maximum cap for steps in the progress bar
         */
        this.indeterminate = false;
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
        /**
         * Allows the progress bar to be clicked on, to help the user to navigate through the progressing content.
         */
        this.editable = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.noease = false;
        /**
         * eliminates the easing in the css so you can apply value updates without jitter.
         */
        this.rounded = false;
        /**
         * Sets the value of the progress bar
         */
        this.value = 0;
        /**
         * Sets the value of the progress bar
         */
        this.secondary = 0;
        this.blurable = true;
        this.wrapper = "stellar-blur";
        this.blur = 0;
        this.ease = blurringEase({
            end: 20,
            start: -1,
            duration: 200,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
            },
        });
    }
    componentWillLoad() {
        if (!this.blurable) {
            this.wrapper = "div";
        }
    }
    observeValue() {
        if (!this.indeterminate && this.blurable) {
            this.ease.start();
        }
    }
    handleClick(e) {
        if (this.editable) {
            var bounding = this.element.getBoundingClientRect();
            var widthClicked = e.pageX - bounding.left;
            var totalWidth = bounding.width;
            var calc = (widthClicked / totalWidth * this.max);
            var rounded = Math.round(calc * 1e2) / 1e2;
            if (this.rounded) {
                rounded = Math.ceil(rounded);
            }
            this.value = rounded;
            this.update.emit({
                value: this.value
            });
        }
    }
    progress(secondary) {
        if (secondary) {
            let progress = (this.secondary / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
        else {
            let progress = (this.value / this.max) * 100;
            progress = progress < 100 ? progress : 100;
            progress = progress > 0 ? progress : 0;
            return progress;
        }
    }
    render() {
        if (this.indeterminate) {
            return h("svg", { viewBox: "0 0 100 100" },
                h("circle", { cx: "50", cy: "50", r: "20", "stroke-width": "4", fill: "none", "stroke-linecap": "round" }));
        }
        // @ts-ignore
        return (h(this.wrapper, { class: "progress", horizontal: this.blur, onClick: (e) => { this.handleClick(e); } },
            h("div", { class: "status", style: { transform: `translate(${this.progress()}%, 0)` } }),
            this.secondary ? h("div", { class: "secondary", style: { transform: `translate(${this.progress(true)}%, 0)` } }) : ""));
    }
    static get is() { return "stellar-progress"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["progress.css"]
    }; }
    static get styleUrls() { return {
        "$": ["progress.css"]
    }; }
    static get properties() { return {
        "slender": {
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
                "text": "Renders if this element is slender or not"
            },
            "attribute": "slender",
            "reflect": true,
            "defaultValue": "false"
        },
        "max": {
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
                "text": "Sets the maximum cap for steps in the progress bar"
            },
            "attribute": "max",
            "reflect": true,
            "defaultValue": "100"
        },
        "indeterminate": {
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
                "text": "Sets the maximum cap for steps in the progress bar"
            },
            "attribute": "indeterminate",
            "reflect": true,
            "defaultValue": "false"
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
                "text": "Sets the button or link as an outlined button."
            },
            "attribute": "dark",
            "reflect": true,
            "defaultValue": "false"
        },
        "editable": {
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
                "text": "Allows the progress bar to be clicked on, to help the user to navigate through the progressing content."
            },
            "attribute": "editable",
            "reflect": true,
            "defaultValue": "false"
        },
        "noease": {
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
                "text": "eliminates the easing in the css so you can apply value updates without jitter."
            },
            "attribute": "noease",
            "reflect": true,
            "defaultValue": "false"
        },
        "rounded": {
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
                "text": "eliminates the easing in the css so you can apply value updates without jitter."
            },
            "attribute": "rounded",
            "reflect": true,
            "defaultValue": "false"
        },
        "value": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the value of the progress bar"
            },
            "attribute": "value",
            "reflect": true,
            "defaultValue": "0"
        },
        "secondary": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the value of the progress bar"
            },
            "attribute": "secondary",
            "reflect": true,
            "defaultValue": "0"
        },
        "blurable": {
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
            "attribute": "blurable",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "wrapper": {},
        "blur": {},
        "ease": {}
    }; }
    static get events() { return [{
            "method": "update",
            "name": "update",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "observeValue"
        }]; }
}
Tunnel.injectProps(Progress, ['dark']);
