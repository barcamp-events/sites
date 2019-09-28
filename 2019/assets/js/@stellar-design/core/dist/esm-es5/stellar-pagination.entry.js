import { r as registerInstance, c as createEvent, h, g as getElement } from './core-8f5ef0c7.js';
import { b as blurringEase } from './index-9d3b27e3.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';
import './main-07539eea.js';
import './moment-b6827264.js';
import './index-9ff8bd5c.js';
import { T as Tunnel } from './theme-c32519f3.js';
var Pagination = /** @class */ (function () {
    function Pagination(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
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
            tick: function (args) {
                _this.blur = args.value;
            },
            complete: function () {
                _this.blur = 0;
                _this.ease.stop();
                _this.affixDistance();
            },
        });
        this.changed = createEvent(this, "changed", 7);
    }
    Pagination.prototype.__firstPageUrl = function () { return ""; };
    Pagination.prototype.__previousPageUrl = function () { return ""; };
    Pagination.prototype.__nextPageUrl = function () { return ""; };
    Pagination.prototype.__lastPageUrl = function () { return ""; };
    Pagination.prototype.currentObserver = function (current) {
        this.current = current;
        this.__previous = (current > this.__first) ? current - 1 : false;
        this.__next = (current < this.pages) ? current + 1 : false;
        this.changed.emit(current);
        if (this.type === "full") {
            this.updateSurroundingPages();
        }
        this.ease.start();
    };
    Pagination.prototype.componentWillLoad = function () {
        this.__first = 1;
        this.__current = this.current;
        this.__previous = (this.current > this.__first) ? this.current - 1 : false;
        this.__next = (this.current < this.pages) ? this.current + 1 : false;
        this.__last = this.pages;
        this.updateSurroundingPages();
    };
    Pagination.prototype.componentDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.affixDistance();
        }, 300);
    };
    Pagination.prototype.affixDistance = function () {
        var distance = this.element.shadowRoot.querySelector('.current-number');
        if (distance) {
            properties.set({
                "--indicator-left": distance.offsetLeft + "px"
            }, this.element);
        }
    };
    Pagination.prototype.updateSurroundingPages = function () {
        var _this = this;
        // @ts-ignore
        var pages = Array(this.pages).fill(0).map(function (item, index) {
            var number = index + 1;
            return {
                number: number,
                url: _this.formatUrl(number),
                visible: _this.isVisible(number),
                current: number === _this.current
            };
        });
        this.__surroundingPages = pages;
    };
    Pagination.prototype.isVisible = function (number) {
        var minPad = this.__current - this.padding;
        var maxPad = this.__current + this.padding;
        if (maxPad >= this.pages) {
            maxPad = this.pages;
        }
        if (minPad < 1) {
            minPad = 1;
        }
        return number >= minPad && number <= maxPad;
    };
    Pagination.prototype.handleChange = function (event) {
        event.preventDefault();
        var target = event.currentTarget;
        this.__current = parseInt(target.value);
    };
    Pagination.prototype.handleClick = function (event) {
        event.preventDefault();
        var target = event.currentTarget;
        this.__current = parseInt(target.dataset.page);
    };
    Pagination.prototype.formatUrl = function (pageNumber) {
        return this.url.format(pageNumber);
    };
    Pagination.prototype.renderFirstPageButton = function () {
        var _this = this;
        var hidden = (this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__firstPageUrl(), "data-page": this.__first, onClick: function (event) { return _this.handleClick(event); }, class: "icon first", "data-hidden": hidden }, h("stellar-asset", { name: "skip-backward", block: true })));
    };
    Pagination.prototype.renderPreviousPageButton = function () {
        var _this = this;
        var hidden = (typeof this.__previous === "number" && this.__current > 1) ? "no" : "yes";
        return (h("a", { href: this.__previousPageUrl(), "data-page": this.__previous, onClick: function (event) { return _this.handleClick(event); }, class: "icon previous", "data-hidden": hidden }, h("stellar-asset", { name: "rewind", block: true })));
    };
    Pagination.prototype.renderNextPageButton = function () {
        var _this = this;
        var hidden = (typeof this.__next === "number" || this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__nextPageUrl(), "data-page": this.__next, onClick: function (event) { return _this.handleClick(event); }, class: "icon next", "data-hidden": hidden }, h("stellar-asset", { name: "fastforward", block: true })));
    };
    Pagination.prototype.renderLastPageButton = function () {
        var _this = this;
        var hidden = (this.__current < this.pages) ? "no" : "yes";
        return (h("a", { href: this.__lastPageUrl(), "data-page": this.__last, onClick: function (event) { return _this.handleClick(event); }, class: "icon last", "data-hidden": hidden }, h("stellar-asset", { name: "skip-forward", block: true })));
    };
    Pagination.prototype.renderPagesList = function () {
        var _this = this;
        return this.__surroundingPages.map(function (page) {
            return (h("a", { href: page.url, "data-page": page.number, "data-visible": page.visible, "data-current": page.current, onClick: function (event) { return _this.handleClick(event); }, class: (page.number === _this.__current || page.number === _this.current) ? 'current-number number' : 'number' }, page.number));
        });
    };
    Pagination.prototype.renderPagesPreviousEllipsis = function () {
        var hidden = ((this.__current - this.padding) > 1) ? "no" : "yes";
        return (h("div", { class: "ellipsis previous", "data-hidden": hidden }, "\u2026"));
    };
    Pagination.prototype.renderPagesNextEllipsis = function () {
        var hidden = ((this.__current + this.padding + 1) < this.pages) ? "no" : "yes";
        return (h("div", { class: "ellipsis next", "data-hidden": hidden }, "\u2026"));
    };
    Pagination.prototype.render = function () {
        var _this = this;
        if (this.type === "full") {
            return (h("span", { class: "pagination-container" }, h("div", { class: "pagination-wrap" }, this.renderFirstPageButton(), this.renderPreviousPageButton(), h("div", { class: "pages" }, this.renderPagesPreviousEllipsis(), this.renderPagesList(), this.renderPagesNextEllipsis(), h("stellar-blur", { horizontal: this.blur }, h("div", { class: "indicator" }))), this.renderNextPageButton(), this.renderLastPageButton())));
        }
        else if (this.type === "compact") {
            return (h("span", { class: "compact-pagination-container" }, h("p", null, "Page"), h("stellar-input", { type: "number", size: "small", max: this.pages, value: this.__current, min: 1, onChange: function (e) { _this.handleChange(e); } }), "of ", this.pages));
        }
    };
    Object.defineProperty(Pagination.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "watchers", {
        get: function () {
            return {
                "__current": ["currentObserver"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;color:var(--color);font-size:1.6rem;--color:var(--theme-base6);--hover:var(--theme-base9);text-align:center}:host .pagination-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .indicator{position:absolute;top:.2rem;left:var(--indicator-left,50%);-webkit-transition:all .22s var(--ease) 0s;transition:all .22s var(--ease) 0s;width:2.4rem;height:1.6rem;margin-left:-.125em;background:var(--theme-base5);z-index:0;border-radius:100%}:host stellar-blur[horizontal=\"0\"] .indicator{height:2.4rem;top:-.2rem}:host .pagination-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}:host a{text-decoration:none;border-radius:100%}:host a.icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:2rem;height:2rem;color:var(--color)}:host a.icon:active,:host a.icon:hover{color:var(--hover)}:host a.current-number:active,:host a.current-number:focus,:host a.current-number:hover{color:#fff}:host .ellipsis{width:2rem;height:2rem;margin:0 .25rem}:host .ellipsis,:host .pages{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .pages{margin:0 .5rem;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}:host .number{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:currentColor;font-weight:700;-webkit-transition:all .2s var(--ease) 0ms;transition:all .2s var(--ease) 0ms;margin:1rem 0;width:0;height:0;opacity:1;z-index:1;padding:0}:host .number,:host .number[data-visible=false]{-webkit-transform:scale(0);transform:scale(0)}:host .number[data-visible]{width:2rem;height:2rem;opacity:1;padding:0;margin:0 .25em;-webkit-transform:scale(1);transform:scale(1)}:host .number:active,:host .number:hover{color:var(--hover)}:host .current-number{margin:1rem;color:#fff}:host .skip-button{margin-left:36px;line-height:0}:host [data-hidden=yes]{display:none!important}:host .compact-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline}:host .compact-pagination-container stellar-input{width:5rem;--padding:0 1rem;margin:0 1rem}:host stellar-blur{position:absolute;width:100%;height:100%}:host([dark]) a.number:active,:host([dark]) a.number:focus,:host([dark]) a.number:hover{color:#fff}:host([dark]) .current-number{color:var(--gray9)!important}:host([dark]) a.icon:active,:host([dark]) a.icon:focus,:host([dark]) a.icon:hover{color:#fff}"; },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}());
Tunnel.injectProps(Pagination, ['dark']);
export { Pagination as stellar_pagination };
