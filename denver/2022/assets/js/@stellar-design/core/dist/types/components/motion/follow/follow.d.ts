export declare class Follow {
    element: HTMLElement;
    type: "scroll" | "cursor";
    distance: number;
    padding: number;
    componentWillLoad(): void;
    componentDidLoad(): void;
    readonly offset: number;
    update(): void;
    attachScroll(): void;
    attachCursor(): void;
    minmaxx(x: any): any;
    render(): any;
}
