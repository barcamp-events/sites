import { h, Host } from "@stencil/core";
import { Swiper } from './vendor/swiper.js';
import { blurringEase } from '../../../utils';
export class Slides {
    constructor() {
        this.effect = "slide";
        this.speed = 300;
        this.direction = "horizontal";
        this.autoHeight = false;
        this.nested = false;
        this.pagination = false;
        this.loop = false;
        this.watchSlidesProgress = false;
        this.watchSlidesVisibility = false;
        this.slidesPerView = 3;
        this.centeredSlides = true;
        this.spaceBetween = 20;
        this.blur = 0;
        this.ease = () => {
            const ease = blurringEase({
                end: 60,
                start: -1,
                duration: (this.speed / 2),
                tick: (args) => {
                    this.blur = args.value;
                },
                complete: () => {
                    this.blur = -1;
                    ease.stop();
                    setTimeout(() => {
                        this.blur = -2;
                    }, 100);
                },
            });
            return ease;
        };
        /**
         * Show or hide the pager
         */
        this.pager = true;
    }
    updateSwiperOptions() {
        const newOptions = this.normalizeOptions();
        this.swiper.params = Object.assign({}, this.swiper.params, newOptions);
        this.update();
    }
    componentDidLoad() {
        setTimeout(this.initSlides.bind(this), 10);
    }
    componentDidUnload() {
        this.swiper.destroy(true, true);
    }
    initSlides() {
        this.container = this.el.children[0];
        const finalOptions = this.normalizeOptions();
        // init swiper core
        this.swiper = new Swiper(this.container, finalOptions);
        this.el.onmouseenter = () => {
            this.swiper.keyboard.enable();
        };
        this.el.onmouseleave = () => {
            this.swiper.keyboard.disable();
        };
        this.el.onfocus = () => {
            this.swiper.keyboard.enable();
        };
        this.el.onblur = () => {
            this.swiper.keyboard.disable();
        };
    }
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    async update() {
        this.swiper.update();
    }
    /**
     * Transition to the specified slide.
     */
    async slideTo(index, speed, runCallbacks) {
        this.swiper.slideTo(index, speed, runCallbacks);
    }
    /**
     * Transition to the next slide.
     */
    async slideNext(speed, runCallbacks) {
        this.swiper.slideNext(runCallbacks, speed);
    }
    /**
     * Transition to the previous slide.
     */
    async slidePrev(speed, runCallbacks) {
        this.swiper.slidePrev(runCallbacks, speed);
    }
    /**
     * Get the index of the active slide.
     */
    async getActiveIndex() {
        return this.swiper.activeIndex;
    }
    /**
     * Get the index of the previous slide.
     */
    async getPreviousIndex() {
        return this.swiper.previousIndex;
    }
    /**
     * Get the total number of slides.
     */
    async length() {
        return this.swiper.slides.length;
    }
    /**
     * Get whether or not the current slide is the last slide.
     *
     */
    async isEnd() {
        return this.swiper.isEnd;
    }
    /**
     * Get whether or not the current slide is the first slide.
     */
    async isBeginning() {
        return this.swiper.isBeginning;
    }
    /**
     * Start auto play.
     */
    async startAutoplay() {
        this.swiper.autoplay.start();
    }
    /**
     * Stop auto play.
     */
    async stopAutoplay() {
        this.swiper.autoplay.stop();
    }
    /**
     * Lock or unlock the ability to slide to the next slides.
     */
    async lockSwipeToNext(shouldLockSwipeToNext) {
        if (shouldLockSwipeToNext) {
            return this.swiper.lockSwipeToNext();
        }
        this.swiper.unlockSwipeToNext();
    }
    /**
     * Lock or unlock the ability to slide to the previous slides.
     */
    async lockSwipeToPrev(shouldLockSwipeToPrev) {
        if (shouldLockSwipeToPrev) {
            return this.swiper.lockSwipeToPrev();
        }
        this.swiper.unlockSwipeToPrev();
    }
    /**
     * Lock or unlock the ability to slide to change slides.
     */
    async lockSwipes(shouldLockSwipes) {
        if (shouldLockSwipes) {
            return this.swiper.lockSwipes();
        }
        this.swiper.unlockSwipes();
    }
    blurStart() {
        if (!this.slides) {
            this.slides = Array.from(this.el.querySelectorAll('stellar-slide'));
        }
        this.ease().start();
    }
    blurEnd() {
        if (!this.slides) {
            this.slides = Array.from(this.el.querySelectorAll('stellar-slide'));
        }
        this.blur = -1;
        // @ts-ignore
        const resize = new Event('resize');
        window.dispatchEvent(resize);
    }
    normalizeOptions() {
        // Base options, can be changed
        const swiperOptions = {
            effect: this.effect,
            direction: this.direction,
            initialSlide: 0,
            loop: this.loop,
            pager: this.pagination,
            keyboard: {
                enabled: false,
                onlyInViewport: true,
            },
            pagination: '.swiper-pagination',
            paginationType: 'bullets',
            parallax: false,
            slidesPerView: this.slidesPerView,
            spaceBetween: this.spaceBetween,
            speed: this.speed,
            zoom: false,
            nested: this.nested,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: this.centeredSlides,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            touchEventsTarget: 'container',
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            autoHeight: this.autoHeight,
            setWrapperSize: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            paginationClickable: false,
            paginationHide: false,
            resistance: true,
            resistanceRatio: 0.85,
            watchSlidesProgress: this.watchSlidesProgress,
            watchSlidesVisibility: this.watchSlidesVisibility,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loopAdditionalSlides: 0,
            noSwiping: true,
            runCallbacksOnInit: true,
            controlBy: 'slide',
            controlInverse: false,
            coverflow: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            flip: {
                slideShadows: true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            grabCursor: true
        };
        // Keep the event options separate, we dont want users
        // overwriting these
        const eventOptions = {
            on: {
                slideChangeStart: () => {
                    this.ionSlideWillChange.emit;
                },
                slideChangeEnd: () => {
                    this.ionSlideDidChange.emit;
                },
                slideNextStart: () => {
                    this.ionSlideNextStart.emit;
                },
                slidePrevStart: () => {
                    this.ionSlidePrevStart.emit;
                },
                slideNextEnd: () => {
                    this.blurEnd();
                    this.ionSlideNextEnd.emit;
                },
                slidePrevEnd: () => {
                    this.blurEnd();
                    this.ionSlidePrevEnd.emit;
                },
                transitionStart: () => {
                    this.blurStart();
                    this.ionSlideTransitionStart.emit;
                },
                transitionEnd: () => {
                    this.blurEnd();
                    this.ionSlideTransitionEnd.emit;
                },
                sliderMove: () => {
                    this.ionSlideDrag.emit;
                },
                reachBeginning: () => {
                    this.ionSlideReachStart.emit;
                },
                reachEnd: () => {
                    this.blurEnd();
                    this.ionSlideReachEnd.emit;
                },
                touchStart: () => {
                    this.ionSlideTouchStart.emit;
                },
                touchEnd: () => {
                    this.ionSlideTouchEnd.emit;
                }
            }
        };
        // Merge the base, user options, and events together then pass to swiper
        return Object.assign({}, swiperOptions, this.options, eventOptions);
    }
    render() {
        return h(Host, { tabIndex: 0 },
            h("stellar-blur", { class: "swiper-container", horizontal: this.blur },
                h("div", { class: "swiper-wrapper" },
                    h("slot", null)),
                h("div", { class: {
                        'swiper-pagination': true,
                        hide: !this.pager
                    } })));
    }
    static get is() { return "stellar-slides"; }
    static get originalStyleUrls() { return {
        "$": ["slides.css"]
    }; }
    static get styleUrls() { return {
        "$": ["slides.css"]
    }; }
    static get assetsDirs() { return ["vendor"]; }
    static get properties() { return {
        "options": {
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
                "text": "Options to pass to the swiper instance.\nSee http://idangero.us/swiper/api/ for valid options"
            },
            "attribute": "options",
            "reflect": false
        },
        "effect": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"slide\"|\"fade\"|\"cube\"|\"coverflow\"|\"flip\"",
                "resolved": "\"coverflow\" | \"cube\" | \"fade\" | \"flip\" | \"slide\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "effect",
            "reflect": true,
            "defaultValue": "\"slide\""
        },
        "speed": {
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
                "text": ""
            },
            "attribute": "speed",
            "reflect": false,
            "defaultValue": "300"
        },
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"horizontal\"|\"vertical\"",
                "resolved": "\"horizontal\" | \"vertical\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "direction",
            "reflect": false,
            "defaultValue": "\"horizontal\""
        },
        "autoHeight": {
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
            "attribute": "auto-height",
            "reflect": false,
            "defaultValue": "false"
        },
        "nested": {
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
            "attribute": "nested",
            "reflect": false,
            "defaultValue": "false"
        },
        "pagination": {
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
            "attribute": "pagination",
            "reflect": false,
            "defaultValue": "false"
        },
        "loop": {
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
            "attribute": "loop",
            "reflect": false,
            "defaultValue": "false"
        },
        "watchSlidesProgress": {
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
            "attribute": "watch-slides-progress",
            "reflect": false,
            "defaultValue": "false"
        },
        "watchSlidesVisibility": {
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
            "attribute": "watch-slides-visibility",
            "reflect": false,
            "defaultValue": "false"
        },
        "slidesPerView": {
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
                "text": ""
            },
            "attribute": "slides-per-view",
            "reflect": false,
            "defaultValue": "3"
        },
        "centeredSlides": {
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
            "attribute": "centered-slides",
            "reflect": false,
            "defaultValue": "true"
        },
        "spaceBetween": {
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
                "text": ""
            },
            "attribute": "space-between",
            "reflect": false,
            "defaultValue": "20"
        },
        "pager": {
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
                "text": "Show or hide the pager"
            },
            "attribute": "pager",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "blur": {},
        "ease": {},
        "slides": {}
    }; }
    static get events() { return [{
            "method": "ionSlideWillChange",
            "name": "ionSlideWillChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted before the active slide has changed."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideDidChange",
            "name": "ionSlideDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted after the active slide has changed."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideNextStart",
            "name": "ionSlideNextStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the next slide has started."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlidePrevStart",
            "name": "ionSlidePrevStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the previous slide has started."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideNextEnd",
            "name": "ionSlideNextEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the next slide has ended."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlidePrevEnd",
            "name": "ionSlidePrevEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the previous slide has ended."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideTransitionStart",
            "name": "ionSlideTransitionStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the slide transition has started."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideTransitionEnd",
            "name": "ionSlideTransitionEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the slide transition has ended."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideDrag",
            "name": "ionSlideDrag",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the slider is actively being moved."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideReachStart",
            "name": "ionSlideReachStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the slider is at its initial position."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideReachEnd",
            "name": "ionSlideReachEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the slider is at the last slide."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideTouchStart",
            "name": "ionSlideTouchStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the user first touches the slider."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "ionSlideTouchEnd",
            "name": "ionSlideTouchEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the user releases the touch."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "update": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Update the underlying slider implementation. Call this if you've added or removed\nchild slides.",
                "tags": []
            }
        },
        "slideTo": {
            "complexType": {
                "signature": "(index: number, speed?: number, runCallbacks?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Transition to the specified slide.",
                "tags": []
            }
        },
        "slideNext": {
            "complexType": {
                "signature": "(speed?: number, runCallbacks?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Transition to the next slide.",
                "tags": []
            }
        },
        "slidePrev": {
            "complexType": {
                "signature": "(speed?: number, runCallbacks?: boolean) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Transition to the previous slide.",
                "tags": []
            }
        },
        "getActiveIndex": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "Get the index of the active slide.",
                "tags": []
            }
        },
        "getPreviousIndex": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "Get the index of the previous slide.",
                "tags": []
            }
        },
        "length": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "Get the total number of slides.",
                "tags": []
            }
        },
        "isEnd": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "Get whether or not the current slide is the last slide.",
                "tags": []
            }
        },
        "isBeginning": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "Get whether or not the current slide is the first slide.",
                "tags": []
            }
        },
        "startAutoplay": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Start auto play.",
                "tags": []
            }
        },
        "stopAutoplay": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Stop auto play.",
                "tags": []
            }
        },
        "lockSwipeToNext": {
            "complexType": {
                "signature": "(shouldLockSwipeToNext: boolean) => Promise<any>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "Lock or unlock the ability to slide to the next slides.",
                "tags": []
            }
        },
        "lockSwipeToPrev": {
            "complexType": {
                "signature": "(shouldLockSwipeToPrev: boolean) => Promise<any>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "Lock or unlock the ability to slide to the previous slides.",
                "tags": []
            }
        },
        "lockSwipes": {
            "complexType": {
                "signature": "(shouldLockSwipes: boolean) => Promise<any>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<any>"
            },
            "docs": {
                "text": "Lock or unlock the ability to slide to change slides.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "options",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "effect",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "speed",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "direction",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "autoHeight",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "pagination",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "nested",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "loop",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "watchSlidesProgress",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "watchSlidesVisibility",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "slidesPerView",
            "methodName": "updateSwiperOptions"
        }, {
            "propName": "centeredSlides",
            "methodName": "updateSwiperOptions"
        }]; }
}
