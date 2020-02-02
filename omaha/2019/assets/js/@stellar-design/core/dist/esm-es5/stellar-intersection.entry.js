import { r as registerInstance, h } from './core-36452501.js';
var intersection = /** @class */ (function () {
    function intersection(hostRef) {
        registerInstance(this, hostRef);
        this.in = function () { };
        this.out = function () { };
        this.margin = "0%";
    }
    intersection.prototype.componentWillLoad = function () {
        if (!this.element) {
            console.error('stellar-intersection needs an element or a seelctor passed into it');
        }
        else {
            this.addIntersectionObserver();
        }
    };
    intersection.prototype.componentDidUnload = function () {
        this.removeIntersectionObserver();
    };
    intersection.prototype.addIntersectionObserver = function () {
        var _this = this;
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver(function (data) {
                if (!_this.multiple) {
                    if (data[0].isIntersecting) {
                        _this.in();
                        _this.removeIntersectionObserver();
                    }
                }
                else {
                    if (data[0].isIntersecting) {
                        _this.in();
                    }
                    else {
                        _this.out();
                    }
                }
            }, {
                rootMargin: this.margin,
                threshold: [0]
            });
            if (typeof this.element === "string" && this.element.constructor.name === "String") {
                this.io.observe(document.querySelector(this.element));
            }
            else {
                this.io.observe(this.element);
            }
        }
    };
    intersection.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    intersection.prototype.render = function () {
        return h("slot", null);
    };
    return intersection;
}());
export { intersection as stellar_intersection };
