import { EventEmitter } from '../../../stencil.core';
export declare class ColorPicker {
    element: HTMLElement;
    val: string;
    notransparent: boolean;
    options: Array<string>;
    update: EventEmitter;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    componentWillLoad(): void;
    valueUpdatedHandler(val: string): void;
    updateValue(color: any): void;
    render(): any;
}
