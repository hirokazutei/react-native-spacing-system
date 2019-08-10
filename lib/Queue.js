import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "./const";
import DebugContext from "./context";

export default function Queue() {
  const { debug, debugOptions, size } = props;
  const isContextDebugMode = useContext(DebugContext);
  const isDebugMode = debug || isContextDebugMode;
  const debugStyle = StyleSheet.create({
    queue: {
      backgroundColor: debugOptions
        ? debugOptions.Color
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
    style: Object.assign(
      {
        width: size
      },
      isDebugMode ? debugStyle.queue : {}
    )
  });
}
