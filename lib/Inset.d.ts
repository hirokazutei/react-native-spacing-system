import * as React from "react";

export type DebugOptions = {
  color?: string;
};

export type InsetPaddingProps =
  | {
      all: number;
    }
  | {
      horizontal?: number;
      vertical?: number;
    }
  | {
      bottom?: number;
      horizontal: number;
      top?: number;
    }
  | {
      left?: number;
      right?: number;
      vertical: number;
    }
  | {
      bottom?: number;
      left?: number;
      right?: number;
      top?: number;
    };

export type InsetProps = {
  flex?: number;
  children: React.ReactNode;
  debug?: boolean;
  debugOptions?: DebugOptions;
} & InsetPaddingProps;

export declare function Inset(
  props: InsetProps
): React.FunctionComponentElement<InsetProps>;
