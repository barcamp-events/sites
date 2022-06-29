export declare class Breadcrumbs {
    el: HTMLElement;
    icon: string;
    icon_src: string;
    icon_size: number;
    tag: "link" | "route";
    home: string;
    label: string;
    description: string;
    size: "tiny" | "small" | "medium" | "large";
    dark: boolean;
    color: string;
    componentWillLoad(): void;
    updateBreadcrumbs(): void;
    render(): any;
}
