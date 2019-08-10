import * as React from "react";
export declare type InsetDebugOptions = {
    color?: string;
};
export declare type All = {
    all: number;
};
export declare type VerHor = {
    horizontal: number;
    vertical: number;
};
export declare type Horizontal = {
    bottom?: number;
    horizontal: number;
    top?: number;
};
export declare type Vertical = {
    left?: number;
    right?: number;
    vertical: number;
};
export declare type Other = {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
};
export declare type PaddingPossibilities = All | VerHor | Horizontal | Vertical | Other;
export declare type InsetProps = {
    flex?: number;
    children: React.ReactNode;
    debug?: boolean;
    debugOptions?: InsetDebugOptions;
    paddings: PaddingPossibilities;
};
export declare const Inset: (props: InsetProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
//# sourceMappingURL=Inset.d.ts.map