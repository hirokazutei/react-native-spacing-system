import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "./color";
import { DebugContext } from "./context";

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

export const Stack = (props: StackProps): React.ReactElement => {
  const isContexDebugMode = useContext(DebugContext);
  const { debug, debugOptions, size } = props;
  const isDebugMode = debug || isContexDebugMode;
  const debugStyle = StyleSheet.create({
    stack: {
      backgroundColor: debugOptions
        ? debugOptions.color
        : defaultDebugColor.stack,
      borderWidth:
        debugOptions && (debugOptions.border || debugOptions.borderColor)
          ? 1
          : 0,
      borderColor:
        debugOptions && debugOptions.borderColor
          ? debugOptions.borderColor
          : defaultBorderColor.stack
    }
  });
  return React.createElement(View, {
    style: (<any>Object).assign(
      {
        height: size
      },
      isDebugMode ? debugStyle.stack : {}
    )
  });
};
