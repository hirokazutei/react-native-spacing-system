import React from "react";
import { StackProps } from "./stackTypes";
declare function stackFactory<SpacingKeys>(spacing: {
    [K in keyof SpacingKeys]: number;
}): React.FunctionComponent<StackProps<keyof SpacingKeys>>;
export default stackFactory;
//# sourceMappingURL=stackFactory.d.ts.map