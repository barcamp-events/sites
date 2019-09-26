import "ionicons";
export declare class AssetLibrary {
    element: HTMLElement;
    icons: any;
    kind: number;
    componentWillLoad(): void;
    fetchIcons(): Promise<void>;
    render(): any;
}
