import * as React from "react";
export declare type StackDebugOptions = {
    color?: string;
    border?: boolean;
    borderColor?: string;
};
export declare type StackProps = {
    size: number;
    debug?: boolean;
    debugOptions?: StackDebugOptions;
};
export declare const Stack: (props: StackProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
//# sourceMappingURL=Stack.d.ts.map