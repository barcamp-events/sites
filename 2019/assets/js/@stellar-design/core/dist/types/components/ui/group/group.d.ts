export declare class Group {
    element: HTMLElement;
    size: string;
    overflow: boolean;
    count: number;
    extras: Array<Element>;
    componentWillLoad(): void;
    sizes(): void;
    buttons(): void;
    resultantExtras(): any[];
    render(): any[];
}
