export declare class intersection {
    multiple: boolean;
    in: Function;
    out: Function;
    margin: string;
    element: HTMLElement | string;
    io: any;
    componentWillLoad(): void;
    componentDidUnload(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    render(): any;
}
