export declare class Breadcrumb {
    element: HTMLElement;
    color: string;
    href: string;
    tag: "link" | "route";
    target: string;
    label: string;
    disabled: boolean;
    dark: boolean;
    first: boolean;
    last: boolean;
    componentDidLoad(): void;
    getTag(): "a" | "stencil-route-link";
    render(): any;
}
