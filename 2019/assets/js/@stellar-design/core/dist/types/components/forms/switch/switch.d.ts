import { EventEmitter } from '../../../stencil.core';
export declare class Switch {
    el: HTMLElement;
    checked: boolean;
    checkedDefault: boolean;
    name: string;
    novalidate: boolean;
    required: boolean;
    status: FormResult;
    update: EventEmitter;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    componentDidLoad(): void;
    validate(): Promise<FormResult>;
    activate(): Promise<void>;
    handleChecked(): void;
    render(): any;
}
