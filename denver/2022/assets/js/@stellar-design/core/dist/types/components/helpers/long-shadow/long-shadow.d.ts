export declare class LongShadow {
    element: HTMLElement;
    direction: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    length: number;
    delay: number;
    timing: number;
    active: boolean;
    children: any;
    componentWillLoad(): void;
    handleChanges(): void;
    getShadowCSS(): string;
    out(): Promise<void>;
    in(): Promise<void>;
    render(): any;
}
