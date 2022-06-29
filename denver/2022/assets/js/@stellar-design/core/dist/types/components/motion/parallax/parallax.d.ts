export declare class Parallax {
    el: HTMLElement;
    horizontal: boolean;
    center: boolean;
    relax: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    reload(): Promise<void>;
    render(): any;
}
