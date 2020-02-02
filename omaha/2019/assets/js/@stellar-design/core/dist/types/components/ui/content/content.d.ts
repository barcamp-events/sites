export declare class Content {
    element: HTMLElement;
    open: boolean;
    for: string;
    behavior: string;
    ease: TweenInstance;
    blur: number;
    parent: any;
    handleActive(event: CustomEvent): Promise<void>;
    render(): any;
}
