import * as React from "react";

export type StackDebugOptions = {
  color?: string;
  border?: boolean;
  borderColor?: string;
};
export type StackProps = {
  size: number;
  debug?: boolean;
  debugOptions?: StackDebugOptions;
};

export declare function Stack(
  props: StackProps
): React.FunctionComponentElement<StackProps>;
