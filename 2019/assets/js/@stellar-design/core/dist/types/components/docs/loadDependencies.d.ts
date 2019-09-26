export declare class Load {
    collection: any;
    documentation: any;
    package: any;
    coverage: any;
    stats: any;
    package_link: any;
    collection_link: any;
    documentation_link: any;
    coverage_link: any;
    stats_link: any;
    db: any;
    constructor();
    database(): void;
    perform(): Promise<this>;
    fetchPackage(): Promise<any>;
    fetchCollection(): Promise<any>;
    fetchDocumentation(): Promise<any>;
    fetchCoverage(): Promise<any>;
    fetchStats(): Promise<any>;
    getUsageCount(tag: string): Promise<number>;
    readonly components: any;
    getAllForTag(tag: string): Promise<{
        tag: string;
        documentation: any;
        collection: any;
        coverage: any;
        stats: any;
    }>;
    getVersion(): any;
}
export declare const Dependencies: {
    get(): Load;
};
