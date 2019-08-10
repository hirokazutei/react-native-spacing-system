import * as React from "react";
export declare type QueueDebugOptions = {
    color?: string;
    border?: boolean;
    borderColor?: string;
};
export declare type QueueProps = {
    size: number;
    debug?: boolean;
    debugOptions: QueueDebugOptions;
};
export declare const Queue: (props: QueueProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
//# sourceMappingURL=Queue.d.ts.map