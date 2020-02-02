export declare class Table {
    element: HTMLElement;
    name: string;
    upgrade: boolean;
    chart: boolean;
    striped: boolean;
    tableChangeHandler(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any[];
}
