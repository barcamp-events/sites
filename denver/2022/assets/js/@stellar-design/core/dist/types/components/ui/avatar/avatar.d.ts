export declare class Avatar {
    element: HTMLElement;
    src: string;
    notooltip: boolean;
    size: "tiny" | "small" | "medium" | "large";
    color: string;
    name: string;
    initials: string;
    shape: "circle" | "square" | "rectangle" | "diamond" | "hexagon" | "star" | "message";
    processing: boolean;
    dark: boolean;
    colorAuto: boolean;
    colors: string[];
    focus: boolean;
    componentWillLoad(): void;
    formatName(): void;
    render(): any;
}
