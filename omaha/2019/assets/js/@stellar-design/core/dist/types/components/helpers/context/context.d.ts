/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class Chart {
    element: HTMLElement;
    time: boolean;
    weather: boolean;
    apikey: string;
    timeState: "day" | "dusk" | "dawn" | "night";
    weatherState: "clear-day" | "clear-night" | "rain" | "snow" | "sleet" | "wind" | "fog" | "cloudy" | "partly-cloudy-day" | "partly-cloudy-night";
    timeChange: EventEmitter;
    weatherChange: EventEmitter;
    componentWillLoad(): void;
    handleTime(): void;
    handleWeather(): void;
    handleTimeState(): void;
    handleWeatherState(): void;
    TimeState: (time: any) => any;
}
