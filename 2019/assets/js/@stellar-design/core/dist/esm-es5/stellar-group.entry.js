import { r as registerInstance, h, g as getElement } from './core-36452501.js';
var Group = /** @class */ (function () {
    function Group(hostRef) {
        registerInstance(this, hostRef);
        this.overflow = false;
        this.count = 10;
        this.extras = [];
    }
    Group.prototype.componentWillLoad = function () {
        var _this = this;
        this.sizes();
        this.buttons();
        if (this.overflow) {
            if (this.element.children.length > this.count) {
                var children = Array.from(this.element.children);
                children.forEach(function (element, index) {
                    if ((index + 1) > _this.count) {
                        _this.size = element.size;
                        _this.extras.push(element);
                        _this.element.removeChild(element);
                    }
                });
            }
        }
    };
    Group.prototype.sizes = function () {
        var _this = this;
        var kids = Array.from(this.element.children);
        if (kids) {
            kids.forEach(function (kid) {
                kid.size = _this.size;
            });
        }
    };
    Group.prototype.buttons = function () {
        var buttons = this.element.querySelectorAll('stellar-button');
        if (buttons) {
            buttons.forEach(function (button) {
                button.classList.add('h-auto');
            });
        }
    };
    Group.prototype.resultantExtras = function () {
        return this.extras.map(function (element) {
            var attributes = {};
            Array.prototype.slice.call(element.attributes).forEach(function (item) {
                attributes[item.name] = item.value;
            });
            return h(element.tagName, Object.assign({}, attributes));
        });
    };
    Group.prototype.render = function () {
        return [
            h("slot", null),
            this.overflow && h("stellar-group-overflow", { size: this.size, count: this.extras.length }, this.resultantExtras())
        ];
    };
    Object.defineProperty(Group.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group, "style", {
        get: function () { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;height:auto;min-height:calc(var(--ms6) - .1rem)}:host([fill]){display:-ms-flexbox;display:flex;width:100%}:host([size=tiny]){min-height:calc(var(--ms4) - .1rem)}:host([size=small]){min-height:calc(var(--ms5) - .1rem)}:host([size=medium]){min-height:calc(var(--ms7) - .2rem)}:host([size=large]){min-height:var(--ms7)}:host ::slotted(*){-ms-flex-item-align:stretch;align-self:stretch}:host([fill]) ::slotted(*){width:100%}:host ::slotted(stellar-button),:host ::slotted(stellar-card),:host ::slotted(stellar-input){--border-radius:0;margin:0}:host ::slotted(:first-of-type){margin-left:-1px!important}:host ::slotted([emphasis]){-webkit-transform:scale(1.05);transform:scale(1.05);z-index:1}:host ::slotted(stellar-avatar){margin-left:2px;--drop-shadow:none;position:relative;margin-left:-.5em;--drop-shadow:.1em 0 0 #fff;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s}:host([overflow])>:first-of-type{z-index:10}:host([overflow])>:nth-of-type(2){z-index:9}:host([overflow])>:nth-of-type(3){z-index:8}:host([overflow])>:nth-of-type(4){z-index:7}:host([overflow])>:nth-of-type(5){z-index:6}:host([overflow])>:nth-of-type(6){z-index:5}:host([overflow])>:nth-of-type(7){z-index:4}:host([overflow])>:nth-of-type(8){z-index:3}:host([overflow])>:nth-of-type(9){z-index:2}:host([overflow])>:nth-of-type(10){z-index:1}:host stellar-group-overflow{margin-left:.25em}"; },
        enumerable: true,
        configurable: true
    });
    return Group;
}());
export { Group as stellar_group };
