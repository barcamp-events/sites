import { EventEmitter } from '../../../stencil.core';
import { RouterHistory, LocationSegments } from '@stencil/router';
export declare class Item {
    element: HTMLElement;
    size: string;
    value: string;
    valueLabel: string;
    type: "a" | "button" | "stencil-route-link";
    label: string;
    href: string;
    wrap: boolean;
    fit: boolean;
    simple: boolean;
    danger: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    selected: boolean;
    multiple: boolean;
    selectable: boolean;
    focused: boolean;
    selectTitle: boolean;
    route: boolean;
    history: RouterHistory;
    location: LocationSegments;
    current: boolean;
    slotted: any;
    select: HTMLStellarSelectElement;
    selectionChanged: EventEmitter;
    mounted: EventEmitter;
    focusChanged: EventEmitter;
    blurChanged: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    componentDidUpdate(): void;
    data(): Promise<{
        size: string;
        value: string;
        type: "a" | "button" | "stencil-route-link";
        label: string;
        danger: boolean;
        slotted: string;
    }>;
    apply(data: any): Promise<void>;
    setFocus(): Promise<void>;
    handleClick(e: any): void;
    handleFocus(): void;
    handleBlur(): void;
    classes(): string;
    select_item(state?: {
        selected: boolean;
    }): Promise<void>;
    render(): any;
}
