import * as React from "react";
import { StackProps } from "./stackTypes";
declare function stackFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<StackProps<keyof T>>;
export default stackFactory;
//# sourceMappingURL=stackFactory.d.ts.map