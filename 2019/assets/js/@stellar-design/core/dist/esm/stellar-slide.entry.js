import { r as registerInstance, h, H as Host } from './core-8f5ef0c7.js';

const Slide = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, { class: {
                'slide-zoom': true,
                'swiper-slide': true
            } }, h("slot", null));
    }
    static get style() { return "stellar-slide{display:block;width:100%;height:100%}.slide-zoom{display:block}.slide-zoom,.swiper-slide{text-align:center;width:100%}.swiper-slide{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;font-size:18px}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}"; }
};

export { Slide as stellar_slide };
