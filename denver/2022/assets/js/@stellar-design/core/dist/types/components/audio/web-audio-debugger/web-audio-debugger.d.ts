export declare class WebAudioDebugger {
    history: History[];
    count: number;
    addHistory(string: History): Promise<void>;
    render(): any;
}
