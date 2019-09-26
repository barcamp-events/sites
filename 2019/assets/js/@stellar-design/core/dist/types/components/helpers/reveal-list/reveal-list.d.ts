export declare class RevealList {
    element: HTMLElement;
    animation: "fadeIn" | "fadeInUp" | "fadeInDown";
    outAnimation: "fadeOut" | "fadeOutUp" | "fadeOutDown";
    delay: number;
    timing: number;
    active: boolean;
    children: any;
    componentWillLoad(): void;
    calculateTiming(): Promise<void>;
    out(): Promise<void>;
    in(): Promise<void>;
    render(): any[];
}
