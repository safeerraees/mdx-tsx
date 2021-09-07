/// <reference types="react" />
export interface APIMaticWidgetProps {
    apiKey?: string;
    dotNet?: boolean;
    java?: boolean;
    php?: boolean;
    ruby?: boolean;
    python?: boolean;
    ts?: boolean;
}
export declare const APIMaticWidgets: (props: APIMaticWidgetProps) => JSX.Element;