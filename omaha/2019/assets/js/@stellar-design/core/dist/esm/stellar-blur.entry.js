import { r as registerInstance, h, H as Host, g as getElement } from './core-36452501.js';
import './_commonjsHelpers-ae1b5db5.js';
import { p as properties } from './css-custom-properties.min-dfcc36c1.js';

const Blur = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.vertical = 0;
        this.horizontal = 0;
    }
    supported_match() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') === -1 &&
            !(/iPad|iPhone|iPod/.test(navigator.platform));
    }
    supported() {
        const criteria = () => {
            let result;
            try {
                if (sessionStorage.getItem('blur-supported') === "true") {
                    return sessionStorage.getItem('blur-supported') === "true";
                }
                result = this.supported_match();
                sessionStorage.setItem('blur-supported', result ? "true" : "false");
            }
            catch (e) {
                result = this.supported_match();
            }
            return result;
        };
        try {
            sessionStorage.clear();
        }
        catch (e) { }
        return criteria();
    }
    async setBlurFilter() {
        properties.set({
            "--blur-url": `url('#${this.generatedId}-filter')`
        }, this.element);
    }
    componentDidLoad() {
        if (this.supported()) {
            this.generatedId = this.element.id || this.generateId();
            setTimeout(() => {
                this.setBlurFilter();
            }, 10);
        }
    }
    generateId() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return `blur-${getRandomInt(0, 1000)}`;
    }
    render() {
        return h(Host, { id: this.element.id || this.generatedId }, h("slot", null), this.supported() && h("svg", { class: "blur-svg" }, h("defs", null, h("filter", { id: this.generatedId + "-filter" }, h("feGaussianBlur", { id: this.generatedId + "-gaussian", in: "SourceGraphic", stdDeviation: `${this.horizontal},${this.vertical}` })))));
    }
    get element() { return getElement(this); }
    static get style() { return "stellar-blur,stellar-blur *,stellar-blur :after,stellar-blur :before{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-blur{-webkit-filter:var(--blur-url);filter:var(--blur-url);display:block;overflow:initial}stellar-blur .blur-svg{display:none}\@media (prefers-reduced-motion:reduce){stellar-blur{-webkit-filter:none!important;filter:none!important}}"; }
};

export { Blur as stellar_blur };
