import React from "react";
import { QueueProps } from "./queueTypes";
declare function queueFactory<SpacingKeys>(spacing: {
    [K in keyof SpacingKeys]: number;
}): React.FunctionComponent<QueueProps<keyof SpacingKeys>>;
export default queueFactory;
//# sourceMappingURL=queueFactory.d.ts.map