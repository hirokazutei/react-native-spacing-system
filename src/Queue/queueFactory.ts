import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  DEFAULT_DEBUG_COLORS,
  DEFAULT_DEFAULT_BORDER_COLORS,
  DEBUG_BORDER_THICKNESS
} from "../constants";
import { DebugContext } from "../context";
import { QueueProps, QueueStyles } from "./queueTypes";
import { turnNegativeToZero } from "../helper";

function queueFactory<T>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<QueueProps<keyof T>> {
  const Queue = (props: QueueProps<keyof T>): React.ReactElement => {
    const { debug, debugOptions, size } = props;

    // Configure Debug Mode
    const {
      debug: isContextDebugMode,
      queue: contextQueueProperty
    } = useContext(DebugContext);
    const isDebugMode =
      debug ||
      isContextDebugMode ||
      (contextQueueProperty && contextQueueProperty.debug);
    const defaultQueueDebugColor =
      (contextQueueProperty && contextQueueProperty.color) ||
      DEFAULT_DEBUG_COLORS.queue;
    const debugBackgroundCoolor =
      (debugOptions && debugOptions.color) || defaultQueueDebugColor;
    const debugBorderWidth =
      debugOptions && (debugOptions.border || debugOptions.borderColor)
        ? DEBUG_BORDER_THICKNESS
        : 0;
    const debugBorderColor =
      debugOptions && debugOptions.borderColor
        ? debugOptions.borderColor
        : DEFAULT_DEFAULT_BORDER_COLORS.queue;

    // Width
    const width =
      isDebugMode && debugOptions && debugOptions.border
        ? spacing[size]
        : turnNegativeToZero(spacing[size] - DEBUG_BORDER_THICKNESS);

    // Styles
    const styles = StyleSheet.create<QueueStyles>({
      default: { width },
      debug: {
        backgroundColor: debugBackgroundCoolor,
        borderWidth: debugBorderWidth,
        borderColor: debugBorderColor,
        width
      }
    });

    return React.createElement(View, {
      style: isDebugMode ? styles.debug : styles.default
    });
  };
  return Queue;
}

export default queueFactory;
