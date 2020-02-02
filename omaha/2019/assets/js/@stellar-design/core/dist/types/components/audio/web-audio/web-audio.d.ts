import { WebAudioVisualizer } from '../web-audio-visualizer/web-audio-visualizer';
import { WebAudioSource } from '../web-audio-source/web-audio-source';
import '../web-audio-debugger/web-audio-debugger';
export declare class WebAudio {
    element: HTMLElement;
    debugger: any;
    name: string;
    prepared: Boolean;
    autoplay: Boolean;
    midi: Boolean;
    context: AudioContext;
    gain: GainNode;
    sources: Array<HTMLWebAudioSourceElement>;
    _sources: Array<Node>;
    _currentSource: WebAudioSource;
    keys: Object;
    externalFiles: Array<string>;
    visualizers: Array<WebAudioVisualizer>;
    previousVisualizer: WebAudioVisualizer;
    visualizerNodes: Array<string>;
    source(name: any): Promise<HTMLWebAudioSourceElement>;
    get_context(): Promise<AudioContext>;
    is_prepared(): Promise<Boolean>;
    stop(): Promise<void>;
    /******************
     * Private behavior
     **/
    componentDidLoad(): void;
    connect_the_world(): Promise<boolean>;
    connect_context(): void;
    connect_sources(): Promise<void>;
    build_sources(): Promise<void>;
    cache_sources(bufferList: any, source: any): Promise<void>;
    connect_visualizers(): Promise<void>;
    connect_debugger(): void;
    log(string: any): void;
    connect_midi(): void;
}
