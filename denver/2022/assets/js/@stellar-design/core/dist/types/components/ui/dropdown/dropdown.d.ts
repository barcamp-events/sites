export declare class Dropdown {
    element: HTMLElement;
    position: "left" | "center" | "right";
    icon: boolean;
    iconName: string;
    label: string;
    open: boolean;
    dark: boolean;
    footer: boolean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    onToggle(): void;
    render(): any;
}
