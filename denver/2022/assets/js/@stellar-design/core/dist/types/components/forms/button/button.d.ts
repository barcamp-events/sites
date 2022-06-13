export declare class Button {
    element: HTMLElement;
    /**
     * Allows the button to render for different tags.
     */
    tag: "button" | "submit" | "link" | "span" | "route-link";
    /**
     * Sets accessibility options on the buttons
     */
    label: string;
    /**
     * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
     */
    name: string;
    /**
     * Sets the value on the button if the button is an input.
     */
    value: string;
    /**
     * Sets the href on the anchor tag if the button is a link.
     */
    href: string;
    /**
     * Sets the href on the anchor tag if the button is a link.
     */
    for: string;
    /**
     * Sets the target on the anchor tag if the button is a link.
     */
    target: string;
    /**
     * Sets the size of the button. Can be tiny, small, medium, or large.
     */
    size: "tiny" | "small" | "medium" | "large";
    /**
     * Sets the padding inside of the button. Can be small, medium, or large.
     */
    padding: "tiny" | "small" | "medium" | "large";
    /**
     * Sets the button or link as a button with only an icon.
     */
    icon: boolean;
    /**
     * Sets the button or link as an active state.
     */
    active: boolean;
    /**
     * Sets the button or link as disabled and not-interactable.
     */
    disabled: boolean;
    /**
     * Sets the button or link to provide the affordance of a dangerous action.
     */
    danger: boolean;
    /**
     * Sets the button or link to render as a pill.
     */
    pill: boolean;
    /**
     * Sets the button or link to render at full width to the parent.
     */
    block: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    outline: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    invert: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    contrast: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    /**
     * Sets the button or link as processing when clicked.
     */
    processable: boolean;
    processing: boolean;
    ghost: boolean;
    componentWillLoad(): void;
    click(): Promise<boolean>;
    renderSVG(): any;
    renderButton(): any;
    renderSubmit(): any;
    renderLink(): any;
    renderAppLink(): any;
    renderSpan(): any;
    render(): any[];
}
