import React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  DEFAULT_DEBUG_COLORS,
  DEFAULT_DEFAULT_BORDER_COLORS,
  DEFAULT_OAPCITY,
  DEBUG_BORDER_THICKNESS,
} from "../constants";
import { DebugContext } from "../Context";
import { QueueProps, QueueStyles } from "./queueTypes";

function queueFactory<SpacingKeys>(
  spacing: { [K in keyof SpacingKeys]: number }
): React.FunctionComponent<QueueProps<keyof SpacingKeys>> {
  const Queue = ({
    _debug,
    _debugOptions,
    size,
  }: QueueProps<keyof SpacingKeys>) => {
    const {
      debug: isContextDebugMode,
      queue: contextQueueProperty,
    } = useContext(DebugContext);
    const isDebugMode =
      __DEV__ && (_debug || isContextDebugMode || contextQueueProperty?.debug);

    const defaultQueueDebugColor =
      contextQueueProperty?.color || DEFAULT_DEBUG_COLORS.queue;
    const debugBackgroundCoolor =
      _debugOptions?.color || defaultQueueDebugColor;
    const isDebugBorderMode =
      _debugOptions?.border ||
      _debugOptions?.borderColor ||
      contextQueueProperty?.border;
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor =
      _debugOptions?.borderColor ||
      contextQueueProperty?.borderColor ||
      DEFAULT_DEFAULT_BORDER_COLORS.queue;
    const debugOpacity = (() => {
      switch ("number") {
        case typeof contextQueueProperty?.opacity:
          return contextQueueProperty?.opacity;
        case typeof _debugOptions?.opacity:
          return _debugOptions?.opacity;
        default:
          return DEFAULT_OAPCITY;
      }
    })();
    const styles = StyleSheet.create<QueueStyles>({
      default: { width: spacing[size] },
      debug: {
        backgroundColor: debugBackgroundCoolor,
        borderWidth: debugBorderWidth,
        borderColor: debugBorderColor,
        opacity: debugOpacity,
        width: spacing[size],
      },
    });
    return React.createElement(View, {
      style: isDebugMode ? styles.debug : styles.default,
    });
  };
  return Queue;
}

export default queueFactory;
