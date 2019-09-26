export declare class PasswordRequirements {
    element: HTMLElement;
    for: string;
    size: "tiny" | "small" | "large";
    input: any;
    value: any;
    length: boolean;
    uppercase: boolean;
    number: boolean;
    symbol: boolean;
    commonPasswords: boolean;
    commonNames: boolean;
    repeated: boolean;
    componentDidLoad(): void;
    readonly fs: "fs7" | "fs6" | "fs4" | "fs5";
    readonly icon: "fs6" | "fs4" | "fs5" | "fs1";
    handleValueChange(): void;
    renderLength(): any;
    renderUppercase(): any;
    renderNumber(): any;
    renderSymbol(): any;
    renderCommonPasswords(): any;
    renderCommonNames(): any;
    renderRepeatedKeys(): any;
    render(): any[];
}
