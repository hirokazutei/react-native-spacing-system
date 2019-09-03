import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  DEFAULT_DEBUG_COLORS,
  DEFAULT_DEFAULT_BORDER_COLORS,
  DEBUG_BORDER_THICKNESS
} from "../constants";
import { DebugContext } from "../context";
import { StackProps, StackStyles } from "./stackTypes";
import { turnNegativeToZero } from "../helper";

function stackFactory<T>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<StackProps<keyof T>> {
  const Stack = (props: StackProps<keyof T>): React.ReactElement => {
    const { debug, debugOptions, size } = props;

    // Configure Debug Mode
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
    const debugBorderWidth =
      debugOptions && (debugOptions.border || debugOptions.borderColor)
        ? DEBUG_BORDER_THICKNESS
        : 0;
    const debugBorderColor =
      debugOptions && debugOptions.borderColor
        ? debugOptions.borderColor
        : DEFAULT_DEFAULT_BORDER_COLORS.stack;

    // Height
    const height =
      isDebugMode && debugOptions && debugOptions.border
        ? spacing[size]
        : turnNegativeToZero(spacing[size] - DEBUG_BORDER_THICKNESS);

    // Styles
    const styles = StyleSheet.create<StackStyles>({
      default: { height },
      debug: {
        backgroundColor: debugBackgroundCoolor,
        borderWidth: debugBorderWidth,
        borderColor: debugBorderColor,
        height
      }
    });

    return React.createElement(View, {
      style: isDebugMode ? styles.debug : styles.default
    });
  };
  return Stack;
}

export default stackFactory;
