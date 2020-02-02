export declare class Clock {
    element: HTMLElement;
    time: string | Date;
    between: string | Date;
    size: number;
    animated: boolean;
    hourAngle: number;
    minuteAngle: number;
    secondAngle: number;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleTime(): void;
    handleBetween(): void;
    readonly duration: number;
    readonly offset: number;
    getHours12(time: any): number;
    getMeridian(time: any): "pm" | "am";
    formatted(time: any): string;
    readonly rotation: number;
    readonly chartConfig: {
        chart: {
            type: string;
            margin: number;
            padding: number;
            plotShadow: boolean;
            plotBackgroundColor: string;
            backgroundColor: string;
            height: number;
            width: number;
        };
        title: boolean;
        tooltip: {
            enabled: boolean;
        };
        plotOptions: {
            series: {
                dataLabels: boolean;
                animation: boolean;
            };
            pie: {
                size: number;
                startAngle: number;
            };
        };
        series: {
            name: string;
            data: ({
                y: number;
                color: string;
                borderColor: string;
                borderWidth: number;
            } | {
                color: string;
                borderColor: string;
                y: number;
                borderWidth?: undefined;
            })[];
        }[];
    };
    render(): any;
}
