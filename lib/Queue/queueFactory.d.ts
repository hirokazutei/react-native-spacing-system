import * as React from "react";
import { QueueProps } from "./queueTypes";
declare function queueFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<QueueProps<keyof T>>;
export default queueFactory;
//# sourceMappingURL=queueFactory.d.ts.map