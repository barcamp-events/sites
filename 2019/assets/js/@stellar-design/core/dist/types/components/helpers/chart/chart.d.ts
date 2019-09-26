import Highcharts from 'highcharts';
import { HighchartsModel } from './options';
export declare class Chart {
    element: HTMLElement;
    __chart: HTMLElement;
    __options: any;
    __data: any;
    __highchart: Highcharts.Chart;
    __informant: HTMLElement;
    type: "area" | "areaspline" | "bar" | "bubble" | "column" | "line" | "pie" | "polygon" | "scatter" | "spline" | "waterfall";
    remote: string;
    for: string;
    config: HighchartsModel;
    dark: boolean;
    handleConfig(): void;
    handleAttrs(): void;
    componentDidLoad(): void;
    options(newOptions: any): Promise<void>;
    get_options(): Promise<any>;
    refresh(): Promise<void>;
    render(): any;
}
