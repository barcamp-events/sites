import { h, Host } from "@stencil/core";
export class Slide {
    render() {
        return h(Host, { class: {
                'slide-zoom': true,
                'swiper-slide': true
            } },
            h("slot", null));
    }
    static get is() { return "stellar-slide"; }
    static get originalStyleUrls() { return {
        "$": ["slide.css"]
    }; }
    static get styleUrls() { return {
        "$": ["slide.css"]
    }; }
}
