import * as React from "react";
import { QueueProps } from "./queueTypes";
export declare function queueFactory<T>(spacing: {
    [K in keyof T]: number;
}): React.FunctionComponent<QueueProps<keyof T>>;
//# sourceMappingURL=queueFactory.d.ts.map