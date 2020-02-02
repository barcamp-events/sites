import { EventEmitter } from '../../../stencil.core';
export declare class Step {
    element: HTMLElement;
    href: string;
    disabled: boolean;
    open: boolean;
    order: number;
    tabCount: number;
    parent: any;
    contentChange: EventEmitter;
    componentWillLoad(): void;
    handleClick(): void;
    renderTitle(): any;
    render(): any;
}
