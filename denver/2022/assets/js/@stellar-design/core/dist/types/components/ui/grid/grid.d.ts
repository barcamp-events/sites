export declare class Grid {
    element: HTMLElement;
    cols: number | string;
    compact: boolean;
    padding: boolean;
    align: string;
    noresponsive: boolean;
    makeResponsive(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    refresh(): Promise<void>;
    render(): any;
}
