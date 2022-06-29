export declare class WebAudioSequencer {
    name: string;
    autoplay: boolean;
    taps: number;
    tempo: number;
    context: any;
    iterations: number;
    startTime: number;
    noteTime: number;
    currentTap: number;
    totalPlayTime: number;
    custom: Function;
    timer: any;
    componentDidLoad(): void;
    schedule(): Promise<void>;
    advance(): void;
    play(): Promise<void>;
    stop(): Promise<void>;
}
