import { EventEmitter } from "../../../stencil.core";
export declare class ToggleOption {
    element: HTMLElement;
    input: HTMLInputElement;
    type: string;
    checked: boolean;
    checkedDefault: boolean;
    single: boolean;
    icon: boolean;
    tooltip: string;
    disabled: boolean;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    for: string;
    name: string;
    default: string;
    value: string;
    required: boolean;
    inline: boolean;
    size: boolean;
    selectedCopy: string;
    _type: string;
    focused: boolean;
    blur: number;
    ease: TweenInstance;
    changeToggle: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    updateRealType(): void;
    confirm(): Promise<void>;
    updateSelected(value: boolean): Promise<void>;
    onToggleChange(): void;
    onFocus(): void;
    onBlur(): void;
    onClick(): void;
    onKeyDown(e: any): void;
    renderCheckbox(): any;
    renderRadioBlock(): any;
    renderCheckBlock(): any;
    render(): any;
}
