import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "./color";
import { DebugContext } from "./context";

export type QueueDebugOptions = {
  color?: string;
  border?: boolean;
  borderColor?: string;
};
export type QueueProps = {
  size: number;
  debug?: boolean;
  debugOptions?: QueueDebugOptions;
};

export const Queue = (props: QueueProps): React.ReactElement => {
  const { debug, debugOptions, size } = props;
  const isContextDebugMode = useContext(DebugContext);
  const isDebugMode = debug || isContextDebugMode;
  const debugStyle = StyleSheet.create({
    queue: {
      backgroundColor: debugOptions
        ? debugOptions.color
        : defaultDebugColor.queue,
      borderWidth:
        debugOptions && (debugOptions.border || debugOptions.borderColor)
          ? 1
          : 0,
      borderColor:
        debugOptions && debugOptions.borderColor
          ? debugOptions.borderColor
          : defaultBorderColor.queue
    }
  });
  return React.createElement(View, {
    style: (<any>Object).assign(
      {
        width: size
      },
      isDebugMode ? debugStyle.queue : {}
    )
  });
};
