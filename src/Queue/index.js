/* @flow */
import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "../color";
import { DebugContext } from "../context";
import type { QueueProps } from "./queueTypes";

export const Queue = (props: QueueProps<number>): React.Node => {
  const isContexDebugMode = useContext(DebugContext);
  const { debug, debugOptions, size } = props;
  const isDebugMode = debug || isContexDebugMode;
  const styles = StyleSheet.create({
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
