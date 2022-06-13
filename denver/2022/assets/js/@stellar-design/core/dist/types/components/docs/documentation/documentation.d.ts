import { Load } from '../loadDependencies';
export declare class DocumentationRoot {
    package_link: string;
    collection_link: string;
    documentation_link: string;
    coverage_link: string;
    stats_link: string;
    ready: boolean;
    package: any;
    collection: any;
    documentation: any;
    coverage: any;
    stats: any;
    loader: Load;
    componentWillLoad(): Promise<void>;
    render(): any;
}
