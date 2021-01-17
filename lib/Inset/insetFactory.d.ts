import * as React from "react";
import { InsetProps } from "./insetTypes";
declare function insetFactory<T, AllowLayout extends boolean = true>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<InsetProps<keyof T, AllowLayout>>;
export default insetFactory;
//# sourceMappingURL=insetFactory.d.ts.map