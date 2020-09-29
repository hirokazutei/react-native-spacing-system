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
    const { _debug, _debugOptions, size } = props;
    const {
      debug: isContextDebugMode,
      stack: contextStackProperty,
    } = useContext(DebugContext);
    const isDebugMode =
      __DEV__ &&
      (_debug ||
        isContextDebugMode ||
        (contextStackProperty && contextStackProperty.debug));
    const defaultStackDebugColor =
      (contextStackProperty && contextStackProperty.color) ||
      DEFAULT_DEBUG_COLORS.stack;
    const debugBackgroundCoolor =
      (_debugOptions && _debugOptions.color) || defaultStackDebugColor;
    const isDebugBorderMode =
      (_debugOptions && (_debugOptions.border || _debugOptions.borderColor)) ||
      (contextStackProperty && contextStackProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor =
      (_debugOptions && _debugOptions.borderColor) ||
      (contextStackProperty && contextStackProperty.borderColor) ||
      DEFAULT_DEFAULT_BORDER_COLORS.stack;
    let debugOpacity = DEFAULT_OAPCITY;
    debugOpacity =
      contextStackProperty &&
      (contextStackProperty.opacity === 0 || contextStackProperty.opacity)
        ? contextStackProperty.opacity
        : debugOpacity;
    debugOpacity =
      _debugOptions && (_debugOptions.opacity === 0 || _debugOptions.opacity)
        ? _debugOptions.opacity
        : debugOpacity;
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
