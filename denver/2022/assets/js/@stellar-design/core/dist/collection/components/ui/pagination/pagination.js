import { h } from "@stencil/core";
import { properties, blurringEase } from '../../../utils';
import Tunnel from '../../theme';
export class Pagination {
    constructor() {
        /**
         * Public: Sets the max cap of pages you can skip through
         */
        this.pages = 1;
        this.type = "full";
        this.current = 1;
        this.padding = 2;
        this.color = "gray";
        this.dark = false;
        this.url = "#page-{0}";
        this.__current = 1;
        this.__first = 1;
        this.__previous = false;
        this.__next = false;
        this.blur = 0;
        this.ease = blurringEase({
            end: 10,
            start: -1,
            duration: 125,
            tick: (args) => {
                this.blur = args.value;
            },
            complete: () => {
                this.blur = 0;
                this.ease.stop();
                this.affixDistance();
            },
        });
    }
    __firstPageUrl() { return ""; }
    __previousPageUrl() { return ""; }
    __nextPageUrl() { return ""; }
    __lastPageUrl() { return ""; }
    currentObserver(current) {
        this.current = current;
        this.__previous = (current > this.__first) ? current - 1 : false;
        this.__next = (current < this.pages) ? current + 1 : false;
        this.changed.emit(current);
        if (this.type === "full") {
            this.updateSurroundingPages();
        }
        this.ease.start();
    }
    componentWillLoad() {
        this.__first = 1;
        this.__current = this.current;
        this.__previous = (this.current > this.__first) ? this.current - 1 : false;
        this.__next = (this.current < this.pages) ? this.current + 1 : false;
        this.__last = this.pages;
        this.updateSurroundingPages();
    }
    componentDidLoad() {
        setTimeout(() => {
            this.affixDistance();
        }, 300);
    }
    affixDistance() {
        const distance = this.element.shadowRoot.querySelector('.current-number');
        if (distance) {
            properties.set({
                "--indicator-left": `${distance.offsetLeft}px`
            }, this.element);
        }
    }
    updateSurroundingPages() {
        // @ts-ignore
        const pages = Array(this.pages).fill(0).map((item, index) => {
            const number = index + 1;
            return {
                number: number,
                url: this.formatUrl(number),
                visible: this.isVisible(number),
                current: number === this.current
            };
        });
        this.__surroundingPages = pages;
    }
    isVisible(number) {
        var minPad = this.__current - this.padding;
        var maxPad = this.__current + this.padding;
        if (maxPad >= this.pages) {
            maxPad = this.pages;
        }
        if (minPad < 1) {
            minPad = 1;
        }
        return number >= minPad && number <= maxPad;
    }
    handleChange(event) {
        event.preventDefault();
        const target = event.currentTarget;
        this.__current = parseInt(target.value);
    }
    handleClick(event) {
        event.preventDefault();
        const target = event.currentTarget;
        this.__current = parseInt(target.dataset.page);
    }
    formatUrl(pageNumber) {
        return this.url.format(pageNumber);
    }
    renderFirstPageButton() {
        const hidden = (this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__firstPageUrl(), "data-page": this.__first, onClick: (event) => this.handleClick(event), class: "icon first", "data-hidden": hidden },
            h("stellar-asset", { name: "skip-backward", block: true })));
    }
    renderPreviousPageButton() {
        const hidden = (typeof this.__previous === "number" && this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__previousPageUrl(), "data-page": this.__previous, onClick: (event) => this.handleClick(event), class: "icon previous", "data-hidden": hidden },
            h("stellar-asset", { name: "rewind", block: true })));
    }
    renderNextPageButton() {
        const hidden = (typeof this.__next === "number" || this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__nextPageUrl(), "data-page": this.__next, onClick: (event) => this.handleClick(event), class: "icon next", "data-hidden": hidden },
            h("stellar-asset", { name: "fastforward", block: true })));
    }
    renderLastPageButton() {
        const hidden = (this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__lastPageUrl(), "data-page": this.__last, onClick: (event) => this.handleClick(event), class: "icon last", "data-hidden": hidden },
            h("stellar-asset", { name: "skip-forward", block: true })));
    }
    renderPagesList() {
        return this.__surroundingPages.map((page) => {
            return (h("a", { href: page.url, "data-page": page.number, "data-visible": page.visible, "data-current": page.current, onClick: (event) => this.handleClick(event), class: (page.number === this.__current || page.number === this.current) ? 'current-number number' : 'number' }, page.number));
        });
    }
    renderPagesPreviousEllipsis() {
        const hidden = ((this.__current - this.padding) > 1) ? "no" : "yes";
        return (h("div", { class: "ellipsis previous", "data-hidden": hidden }, "\u2026"));
    }
    renderPagesNextEllipsis() {
        const hidden = ((this.__current + this.padding + 1) < this.pages) ? "no" : "yes";
        return (h("div", { class: "ellipsis next", "data-hidden": hidden }, "\u2026"));
    }
    render() {
        if (this.type === "full") {
            return (h("span", { class: "pagination-container" },
                h("div", { class: "pagination-wrap" },
                    this.renderFirstPageButton(),
                    this.renderPreviousPageButton(),
                    h("div", { class: "pages" },
                        this.renderPagesPreviousEllipsis(),
                        this.renderPagesList(),
                        this.renderPagesNextEllipsis(),
                        h("stellar-blur", { horizontal: this.blur },
                            h("div", { class: "indicator" }))),
                    this.renderNextPageButton(),
                    this.renderLastPageButton())));
        }
        else if (this.type === "compact") {
            return (h("span", { class: "compact-pagination-container" },
                h("p", null, "Page"),
                h("stellar-input", { type: "number", size: "small", max: this.pages, value: this.__current, min: 1, onChange: (e) => { this.handleChange(e); } }),
                "of ",
                this.pages));
        }
    }
    static get is() { return "stellar-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["pagination.css"]
    }; }
    static get styleUrls() { return {
        "$": ["pagination.css"]
    }; }
    static get properties() { return {
        "pages": {
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
                "text": "Public: Sets the max cap of pages you can skip through"
            },
            "attribute": "pages",
            "reflect": true,
            "defaultValue": "1"
        },
        "type": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"full\"|\"compact\"",
                "resolved": "\"compact\" | \"full\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": true,
            "defaultValue": "\"full\""
        },
        "current": {
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
                "text": ""
            },
            "attribute": "current",
            "reflect": true,
            "defaultValue": "1"
        },
        "padding": {
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
                "text": ""
            },
            "attribute": "padding",
            "reflect": true,
            "defaultValue": "2"
        },
        "color": {
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
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"gray\""
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
        },
        "url": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "url",
            "reflect": false,
            "defaultValue": "\"#page-{0}\""
        }
    }; }
    static get states() { return {
        "__surroundingPages": {},
        "__current": {},
        "__first": {},
        "__previous": {},
        "__next": {},
        "__last": {},
        "blur": {},
        "ease": {}
    }; }
    static get events() { return [{
            "method": "changed",
            "name": "changed",
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
            "propName": "__current",
            "methodName": "currentObserver"
        }]; }
}
Tunnel.injectProps(Pagination, ['dark']);
