import * as React from "react";
import { InsetDebugOptions, PaddingPossibilities } from "./insetTypes";
export declare function insetFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<{
    flex?: number;
    children: React.ReactNode;
    debug?: boolean;
    debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<keyof T>>;
//# sourceMappingURL=insetFactory.d.ts.map