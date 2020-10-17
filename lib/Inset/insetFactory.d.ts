import * as React from "react";
import { InsetDebugOptions, PaddingPossibilities, LayoutStyle } from "./insetTypes";
declare function insetFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<{
    layout?: LayoutStyle;
    children: React.ReactNode;
    _debug?: boolean;
    _debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<keyof T>>;
export default insetFactory;
//# sourceMappingURL=insetFactory.d.ts.map