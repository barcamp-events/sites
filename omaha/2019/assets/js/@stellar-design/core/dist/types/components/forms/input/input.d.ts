import { EventEmitter } from '../../../stencil.core';
import { Validator } from "./lib";
import { TinyDatePicker } from '../../../utils';
export declare class Input {
    /**
     * Instance of the custom element
     */
    element: HTMLElement;
    /**
     * Instance of the input or text-area element
     */
    input: HTMLInputElement;
    /**
     * Public: Updated event
     */
    update: EventEmitter;
    /**
     * Public: Focus event
     */
    focusing: EventEmitter;
    /**
     * Public: Blur event
     */
    bluring: EventEmitter;
    /**
     * The kind of element that the Input should be rendered as
     */
    type: string;
    /**
     * The name of the input element
     */
    name: string;
    /**
     * The pre-set value to pass to the input element
     */
    value: any;
    /**
     * The pre-set value to pass to the input element
     */
    default: any;
    /**
     * The pre-set value to pass to the input element
     */
    requirements: boolean;
    /**
     * The previous value so you can walk back in time
     */
    __previousValue: string;
    size: string;
    color: string;
    /**
     * Sets the button or link as an outlined button.
     */
    dark: boolean;
    label: string;
    description: string;
    tooltip: string;
    placeholder: string;
    autocomplete: string;
    disabled: boolean;
    readonly: boolean;
    autofocus: boolean;
    focused: boolean;
    spellcheck: boolean;
    maxlength: number;
    cols: number;
    rows: number;
    wrap: string;
    datepicker: TinyDatePicker;
    dateType: "month" | "year" | "day";
    min: number;
    max: number;
    step: number;
    multipleFileCaption: string;
    replace_placeholder: string;
    files: Array<any>;
    _multipleFileUploadsLabel: string;
    _fileLabel: string;
    multiple: boolean;
    droppable: boolean;
    accept: string;
    required: boolean;
    novalidate: boolean;
    validates: string;
    match: string;
    __match: HTMLElement;
    status: FormResult;
    validator: Validator;
    level: number;
    strength: object;
    tokenField: any;
    generatedId: string;
    icon: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    readonly dateFormat: "YYYY-MM-DD" | "YYYY-MM" | "YYYY";
    readonly visualDateFormat: "YYYY" | "MMMM D, YYYY" | "MMMM, YYYY";
    getDatePicker(): Promise<any>;
    readonly is_date_type: boolean;
    handleValueChange(): void;
    handleChange(): void;
    handleFocus(): void;
    handleBlur(): void;
    handleInput(): void;
    handleIncrement(event: UIEvent): void;
    handleDecrement(event: UIEvent): void;
    handleKeyDownIncrement(event: KeyboardEvent): void;
    handleKeyDownDecrement(event: KeyboardEvent): void;
    handleReset(event: UIEvent): void;
    handleKeyDownEnter(event: KeyboardEvent): void;
    handleInputKeyDown(event: any): void;
    handleKeyDownReset(event: KeyboardEvent): void;
    checkForIcon(): void;
    _prepareFileLabels(): void;
    updateFileLabel(): void;
    updateFilesArray(): void;
    generateId(): string;
    getId(): Promise<string>;
    val(): Promise<any>;
    getStrength(): Promise<object>;
    setStrength(value: number): Promise<void>;
    invalid(message: string | boolean, valid?: boolean, level?: number): Promise<void>;
    validate(): Promise<FormResult>;
    getStrongLevel(): void;
    resetValue(): void;
    handleKeyDown(event: any): void;
    validateDarkColor(): boolean;
    renderLabel(): any;
    renderColorPicker(): any;
    renderSearch(): any;
    renderIncrements(): any;
    renderPasswordStrength(): any;
    renderPasswordStrengthSmile(): any;
    renderSearchClearButton(): any;
    renderDatePicker(): any;
    renderInput(): any;
    renderTextArea(): any;
    renderFileUpload(): any;
    renderMultipleFileUploads(): any;
    renderErrors(): any;
    render(): any;
}
