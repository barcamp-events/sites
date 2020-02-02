export declare class Card {
    element: HTMLElement;
    input: HTMLInputElement;
    token: string;
    name: string;
    stripe: any;
    error: string;
    card: any;
    value: any;
    cardData: any;
    state: "submitting" | "processing" | "submitted" | "preparing";
    componentWillLoad(): void;
    componentDidLoad(): void;
    connect(): Promise<void>;
    getToken(): Promise<boolean>;
    attachToForm(): void;
    handleResponse({ error, token }: {
        error: any;
        token: any;
    }): void;
    handleError(error: any): void;
    setError(error: string): Promise<void>;
    prepareStripe(): void;
    renderPhone(): any;
    renderZip(): any;
    render(): any;
}
