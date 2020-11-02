import * as React from "react";
import { InsetProps } from "./insetTypes";
declare function insetFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<InsetProps<keyof T>>;
export default insetFactory;
//# sourceMappingURL=insetFactory.d.ts.map