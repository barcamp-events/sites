export declare class Blur {
    element: HTMLElement;
    vertical: number;
    horizontal: number;
    generatedId: string;
    supported_match(): boolean;
    supported(): any;
    setBlurFilter(): Promise<void>;
    componentDidLoad(): void;
    generateId(): string;
    render(): any;
}
