import { MatchResults } from '@stencil/router';
import { Load } from '../loadDependencies';
export declare class DocsComponent {
    match: MatchResults;
    ready: boolean;
    loader: Load;
    data: any;
    componentWillLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    renderUsage(): any;
    render(): any;
}
