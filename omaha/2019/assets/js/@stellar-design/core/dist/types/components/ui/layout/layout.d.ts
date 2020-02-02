export declare class Layout {
    element: HTMLElement;
    type: string;
    size: "tiny" | "small" | "medium" | "large" | "xlarge" | "full" | "flush";
    padding: "none" | "tiny" | "small" | "medium" | "large";
    align: "baseline" | "center" | "top" | "bottom";
    content: "baseline" | "center" | "top" | "bottom";
    height: "fill";
    hasNav: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    refresh(): Promise<void>;
    render(): any;
}
