import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  DEFAULT_DEBUG_COLORS,
  DEFAULT_DEFAULT_BORDER_COLORS,
  DEBUG_BORDER_THICKNESS,
  DEFAULT_OAPCITY
} from "../constants";
import { DebugContext } from "../Context";
import { StackProps, StackStyles } from "./stackTypes";

function stackFactory<T>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<StackProps<keyof T>> {
  const Stack = (props: StackProps<keyof T>) => {
    const { debug, debugOptions, size } = props;
    const {
      debug: isContextDebugMode,
      stack: contextStackProperty
    } = useContext(DebugContext);
    const isDebugMode =
      debug ||
      isContextDebugMode ||
      (contextStackProperty && contextStackProperty.debug);
    const defaultStackDebugColor =
      (contextStackProperty && contextStackProperty.color) ||
      DEFAULT_DEBUG_COLORS.stack;
    const debugBackgroundCoolor =
      (debugOptions && debugOptions.color) || defaultStackDebugColor;
    const isDebugBorderMode =
      (debugOptions && (debugOptions.border || debugOptions.borderColor)) ||
      (contextStackProperty && contextStackProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor =
      (debugOptions && debugOptions.borderColor) ||
      (contextStackProperty && contextStackProperty.borderColor) ||
      DEFAULT_DEFAULT_BORDER_COLORS.stack;
    let debugOpacity = DEFAULT_OAPCITY;
    debugOpacity =
      contextStackProperty &&
      (contextStackProperty.opacity === 0 || contextStackProperty.opacity)
        ? contextStackProperty.opacity
        : debugOpacity;
    debugOpacity =
      debugOptions && (debugOptions.opacity === 0 || debugOptions.opacity)
        ? debugOptions.opacity
        : debugOpacity;
    const styles = StyleSheet.create<StackStyles>({
      default: { height: spacing[size] },
      debug: {
        backgroundColor: debugBackgroundCoolor,
        borderWidth: debugBorderWidth,
        borderColor: debugBorderColor,
        opacity: debugOpacity,
        height: spacing[size]
      }
    });
    return React.createElement(View, {
      style: isDebugMode ? styles.debug : styles.default
    });
  };
  return Stack;
}

export default stackFactory;
