import { EventEmitter } from '../../../stencil.core';
export declare class Tab {
    element: HTMLElement;
    name: string;
    disabled: boolean;
    open: boolean;
    dark: boolean;
    notifications: boolean | number;
    tag: "button" | "link" | "route-link";
    /**
    * Sets the href on the anchor tag if the button is a link.
    */
    href: string;
    /**
     * Sets the target on the anchor tag if the button is a link.
     */
    target: string;
    order: number;
    tabCount: number;
    vertical: boolean;
    parent: any;
    contentChange: EventEmitter;
    componentWillLoad(): void;
    handleResize(): void;
    componentDidLoad(): void;
    handleClick(e: any): Promise<void>;
    handleIndicatorPosition(): void;
    renderNotifications(): any;
    renderTitle(): any;
    renderButton(): any;
    renderLink(): any;
    renderAppLink(): any;
    render(): any;
}
