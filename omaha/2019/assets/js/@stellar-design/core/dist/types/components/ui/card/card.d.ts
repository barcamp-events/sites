import { EventEmitter } from '../../../stencil.core';
import { ResizeObserver } from '../../../utils';
export declare class Card {
    element: HTMLElement;
    /**
     * Renders a shadow on the card
     */
    shadow: "light" | "medium" | "heavy";
    /**
     * Let's a card be flippable
     */
    flippable: boolean;
    /**
     * Renders a flipped card
     */
    flipped: boolean;
    /**
     * Sets the padding inside of the button. Can be small, medium, or large.
     */
    padding: "none" | "tiny" | "small" | "medium" | "large";
    /**
     * Sets the element to render the card as - an anchor tag, a button, or a div.
     */
    tag: "stencil-route-link" | "a" | "button" | "div";
    /**
     * Sets the type on a button
     */
    type: string;
    /**
     * Sets the href if the card is a link.
     */
    href: string;
    /**
     * Sets the name if the card is a button.
     */
    name: string;
    /**
     * Sets the value if the card is a button.
     */
    value: string;
    /**
     * Sets the href on the anchor tag if the button is a link.
     */
    for: string;
    /**
     * Sets the href on the anchor tag if the button is a link.
     */
    flip_icon: string;
    dark: boolean;
    ro: ResizeObserver;
    flip: EventEmitter;
    componentDidLoad(): void;
    addResizeObserver(): void;
    updateFlippableCardHeight(): void;
    click(): Promise<boolean>;
    flip_card(e?: UIEvent): Promise<void>;
    render(): any;
}
