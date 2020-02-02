export declare class Message {
    element: HTMLElement;
    type: "alert" | "error" | "info" | "success";
    size: "full" | "default";
    closable: boolean;
    remember: boolean;
    name: string;
    shown: boolean;
    striped: boolean;
    dark: boolean;
    theme: string;
    componentWillLoad(): void;
    handleClose(): void;
    render(): any;
}
