import { EventEmitter } from '../../../stencil.core';
export declare class Slides {
    private container;
    private swiper;
    el: HTMLElement;
    /**
     * Emitted before the active slide has changed.
     */
    ionSlideWillChange: EventEmitter;
    /**
     * Emitted after the active slide has changed.
     */
    ionSlideDidChange: EventEmitter;
    /**
     * Emitted when the next slide has started.
     */
    ionSlideNextStart: EventEmitter;
    /**
     * Emitted when the previous slide has started.
     */
    ionSlidePrevStart: EventEmitter;
    /**
     * Emitted when the next slide has ended.
     */
    ionSlideNextEnd: EventEmitter;
    /**
     * Emitted when the previous slide has ended.
     */
    ionSlidePrevEnd: EventEmitter;
    /**
     * Emitted when the slide transition has started.
     */
    ionSlideTransitionStart: EventEmitter;
    /**
     * Emitted when the slide transition has ended.
     */
    ionSlideTransitionEnd: EventEmitter;
    /**
     * Emitted when the slider is actively being moved.
     */
    ionSlideDrag: EventEmitter;
    /**
     * Emitted when the slider is at its initial position.
     */
    ionSlideReachStart: EventEmitter;
    /**
     * Emitted when the slider is at the last slide.
     */
    ionSlideReachEnd: EventEmitter;
    /**
     * Emitted when the user first touches the slider.
     */
    ionSlideTouchStart: EventEmitter;
    /**
     * Emitted when the user releases the touch.
     */
    ionSlideTouchEnd: EventEmitter;
    /**
     * Options to pass to the swiper instance.
     * See http://idangero.us/swiper/api/ for valid options
     */
    options: any;
    effect: "slide" | "fade" | "cube" | "coverflow" | "flip";
    speed: number;
    direction: "horizontal" | "vertical";
    autoHeight: boolean;
    nested: boolean;
    pagination: boolean;
    loop: boolean;
    watchSlidesProgress: boolean;
    watchSlidesVisibility: boolean;
    slidesPerView: number;
    centeredSlides: boolean;
    spaceBetween: number;
    blur: number;
    ease: Function;
    slides: any;
    updateSwiperOptions(): void;
    /**
     * Show or hide the pager
     */
    pager: boolean;
    componentDidLoad(): void;
    componentDidUnload(): void;
    private initSlides;
    /**
     * Update the underlying slider implementation. Call this if you've added or removed
     * child slides.
     */
    update(): Promise<void>;
    /**
     * Transition to the specified slide.
     */
    slideTo(index: number, speed?: number, runCallbacks?: boolean): Promise<void>;
    /**
     * Transition to the next slide.
     */
    slideNext(speed?: number, runCallbacks?: boolean): Promise<void>;
    /**
     * Transition to the previous slide.
     */
    slidePrev(speed?: number, runCallbacks?: boolean): Promise<void>;
    /**
     * Get the index of the active slide.
     */
    getActiveIndex(): Promise<number>;
    /**
     * Get the index of the previous slide.
     */
    getPreviousIndex(): Promise<number>;
    /**
     * Get the total number of slides.
     */
    length(): Promise<number>;
    /**
     * Get whether or not the current slide is the last slide.
     *
     */
    isEnd(): Promise<boolean>;
    /**
     * Get whether or not the current slide is the first slide.
     */
    isBeginning(): Promise<boolean>;
    /**
     * Start auto play.
     */
    startAutoplay(): Promise<void>;
    /**
     * Stop auto play.
     */
    stopAutoplay(): Promise<void>;
    /**
     * Lock or unlock the ability to slide to the next slides.
     */
    lockSwipeToNext(shouldLockSwipeToNext: boolean): Promise<any>;
    /**
     * Lock or unlock the ability to slide to the previous slides.
     */
    lockSwipeToPrev(shouldLockSwipeToPrev: boolean): Promise<any>;
    /**
     * Lock or unlock the ability to slide to change slides.
     */
    lockSwipes(shouldLockSwipes: boolean): Promise<any>;
    blurStart(): void;
    blurEnd(): void;
    private normalizeOptions;
    render(): any;
}
