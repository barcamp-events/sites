'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const intersection = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.in = () => { };
        this.out = () => { };
        this.margin = "0%";
    }
    componentWillLoad() {
        if (!this.element) {
            console.error('stellar-intersection needs an element or a seelctor passed into it');
        }
        else {
            this.addIntersectionObserver();
        }
    }
    componentDidUnload() {
        this.removeIntersectionObserver();
    }
    addIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (!this.multiple) {
                    if (data[0].isIntersecting) {
                        this.in();
                        this.removeIntersectionObserver();
                    }
                }
                else {
                    if (data[0].isIntersecting) {
                        this.in();
                    }
                    else {
                        this.out();
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
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return core.h("slot", null);
    }
};

exports.stellar_intersection = intersection;
