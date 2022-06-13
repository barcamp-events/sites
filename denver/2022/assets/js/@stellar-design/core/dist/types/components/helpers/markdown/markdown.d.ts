export declare class Markdown {
    element: HTMLElement;
    /**
     * Used to reference an external markdown file
     *
     * @type string
     * @memberof Markdown
     */
    src: string;
    /**
     * Used to set
     *
     * @type {string}
     * @memberof Markdown
     */
    codeString: string;
    flavor: "github" | "original" | "vanilla";
    editable: boolean;
    converted: string;
    raw: string;
    showdown: any;
    componentWillLoad(): void;
    onCodeStringChange(): void;
    onSrcChange(): void;
    convert(): void;
    getMarkdown(): void;
    convertMarkdown(): void;
    replaceAll(str: any, find: any, replace: any): any;
    fetchMarkdown(): Promise<void>;
    render(): any;
}
