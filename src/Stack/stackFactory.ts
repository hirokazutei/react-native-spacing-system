import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  DEFAULT_DEBUG_COLORS,
  DEFAULT_DEFAULT_BORDER_COLORS,
  DEBUG_BORDER_THICKNESS,
  DEFAULT_OAPCITY,
} from "../constants";
import { DebugContext } from "../Context";
import { StackProps, StackStyles } from "./stackTypes";

function stackFactory<T>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<StackProps<keyof T>> {
  const Stack = (props: StackProps<keyof T>) => {
    const { debug, debugOptions, _debug, _debugOptions, size } = props;
    const {
      debug: isContextDebugMode,
      stack: contextStackProperty,
    } = useContext(DebugContext);
    const isDebugMode =
      __DEV__ &&
      (_debug || debug || isContextDebugMode || contextStackProperty?.debug);
    const defaultStackDebugColor =
      contextStackProperty?.color || DEFAULT_DEBUG_COLORS.stack;
    const debugBackgroundCoolor =
      _debugOptions?.color || debugOptions?.color || defaultStackDebugColor;
    const isDebugBorderMode =
      _debugOptions?.border ||
      _debugOptions?.borderColor ||
      debugOptions?.border ||
      debugOptions?.borderColor ||
      contextStackProperty?.border;
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor =
      _debugOptions?.borderColor ||
      debugOptions?.borderColor ||
      contextStackProperty?.borderColor ||
      DEFAULT_DEFAULT_BORDER_COLORS.stack;
    const debugOpacity = (() => {
      switch (true) {
        case typeof contextStackProperty?.opacity === "number":
          return contextStackProperty?.opacity;
        case typeof _debugOptions?.opacity === "number":
          return _debugOptions?.opacity;
        case typeof debugOptions?.opacity === "number":
          return debugOptions?.opacity;
        default:
          return DEFAULT_OAPCITY;
      }
    })();
    const styles = StyleSheet.create<StackStyles>({
      default: { height: spacing[size] },
      debug: {
        backgroundColor: debugBackgroundCoolor,
        borderWidth: debugBorderWidth,
        borderColor: debugBorderColor,
        opacity: debugOpacity,
        height: spacing[size],
      },
    });
    return React.createElement(View, {
      style: isDebugMode ? styles.debug : styles.default,
    });
  };
  return Stack;
}

export default stackFactory;
