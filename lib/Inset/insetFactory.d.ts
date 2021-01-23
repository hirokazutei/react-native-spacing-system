import React from "react";
import { InsetProps } from "./insetTypes";
declare function insetFactory<SpacingKeys, DisallowLayout extends boolean | undefined = undefined>(spacing: {
    [K in keyof SpacingKeys]: number;
}, disallowLayout?: DisallowLayout): React.FunctionComponent<InsetProps<keyof SpacingKeys, DisallowLayout>>;
export default insetFactory;
//# sourceMappingURL=insetFactory.d.ts.map