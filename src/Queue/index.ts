import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "../color";
import { DebugContext } from "../context";
import { QueueProps, QueueStyles } from "./queueTypes";

export const Queue = (props: QueueProps<number>): React.ReactElement => {
  const { debug, debugOptions, size } = props;
  const isContextDebugMode = useContext(DebugContext);
  const isDebugMode = debug || isContextDebugMode;
  const styles = StyleSheet.create<QueueStyles>({
    default: { width: size },
    debug: {
      backgroundColor:
        debugOptions && debugOptions.color
          ? debugOptions.color
          : defaultDebugColor.queue,
      borderWidth:
        debugOptions && (debugOptions.border || debugOptions.borderColor)
          ? 1
          : 0,
      borderColor:
        debugOptions && debugOptions.borderColor
          ? debugOptions.borderColor
          : defaultBorderColor.queue,
      width: size
    }
  });
  return React.createElement(View, {
    style: isDebugMode ? styles.debug : styles.default
  });
};
