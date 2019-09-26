import { EventEmitter } from '../../../stencil.core';
import './vendor/jsmediatags.min.js';
export declare class Song {
    element: HTMLElement;
    src: string;
    playing: boolean;
    artwork: boolean;
    _index: number;
    player: HTMLStellarPlaylistElement | any;
    title: string;
    album: string;
    artist: string;
    genre: string;
    picture: string;
    error: Object;
    songChanged: EventEmitter;
    loaded: EventEmitter;
    readonly url: string;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    songChangedHandler(): void;
    updateDetails(details: any): void;
    load(): Promise<void>;
    details(): Promise<{
        'title': string;
        'album': string;
        'genre': string;
        'artist': string;
        'picture': string;
    }>;
    preload(): Promise<void>;
    play(): Promise<void>;
    switching(): Promise<void>;
    getIndex(): Promise<number>;
    setIndex(value: any): Promise<void>;
    render(): any;
}
