import * as React from "react";

export type QueueDebugOptions = {
  color?: string;
  border?: boolean;
  borderColor?: string;
};
export type QueueProps = {
  size: number;
  debug?: boolean;
  debugOptions: QueueDebugOptions;
};
export type Queue = (
  props: QueueProps
) => React.FunctionComponentElement<QueueProps>;
