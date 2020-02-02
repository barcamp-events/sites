export declare class Theme {
    dark: boolean;
    light: boolean;
    body: boolean;
    system: boolean;
    base: string;
    complement: string;
    htmlEl: HTMLHtmlElement;
    bodyEl: HTMLBodyElement;
    componentWillLoad(): void;
    observeColors(): void;
    observeDark(): void;
    render(): any;
}
