import { EventEmitter } from "../../../stencil.core";
export declare class Toggle {
    element: HTMLElement;
    form: HTMLElement;
    type: string | "checkbox" | "radio" | "radio-block" | "checkbox-block";
    name: string;
    description: string;
    stacked: boolean;
    flip: boolean;
    required: boolean;
    single: boolean;
    size: string;
    novalidate: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    card: any;
    label: string;
    value: string | string[];
    valid: boolean;
    error: string;
    status: any;
    update: EventEmitter;
    componentWillLoad(): void;
    validate(): Promise<FormResult>;
    toggleChangedHandler(event: CustomEvent): void;
    updateChecked(): void;
    renderValidation(): any;
    renderBlock(): any;
    renderPlain(): any[];
    render(): any[];
}
