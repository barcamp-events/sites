export declare class Tabs {
    element: HTMLElement;
    height: string;
    name: string;
    noanimation: boolean;
    size: "tiny" | "small" | "medium" | "large";
    block: boolean;
    vertical: boolean;
    dark: boolean;
    behavior: string;
    flipIndicator: boolean;
    blockIndicator: boolean;
    tabsList: Array<HTMLStellarTabElement>;
    contentsList: Array<HTMLStellarContentElement>;
    ease: TweenInstance;
    blur: number;
    tabs(): Promise<HTMLStellarTabElement[]>;
    contents(): Promise<HTMLStellarContentElement[]>;
    blurring(): Promise<void>;
    componentWillLoad(): Promise<void>;
    handleDark(): void;
    componentDidLoad(): Promise<void>;
    render(): any;
}
