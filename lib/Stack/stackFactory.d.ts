import * as React from "react";
import { StackProps } from "./stackTypes";
export declare function stackFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<StackProps<keyof T>>;
//# sourceMappingURL=stackFactory.d.ts.map