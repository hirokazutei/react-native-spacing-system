import React from "react";
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

const Stack = ({ _debug, _debugOptions, size }: StackProps<number>) => {
  const { debug: isContextDebugMode, stack: contextStackProperty } = useContext(
    DebugContext
  );
  const isDebugMode =
    __DEV__ && (_debug || isContextDebugMode || contextStackProperty?.debug);
  const defaultStackDebugColor =
    contextStackProperty?.color || DEFAULT_DEBUG_COLORS.stack;
  const debugBackgroundCoolor = _debugOptions?.color || defaultStackDebugColor;
  const isDebugBorderMode =
    _debugOptions?.border ||
    _debugOptions?.borderColor ||
    contextStackProperty?.border;
  const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
  const debugBorderColor =
    _debugOptions?.borderColor ||
    contextStackProperty?.borderColor ||
    DEFAULT_DEFAULT_BORDER_COLORS.stack;
  const debugOpacity = (() => {
    switch ("number") {
      case typeof contextStackProperty?.opacity:
        return contextStackProperty?.opacity;
      case typeof _debugOptions?.opacity:
        return _debugOptions?.opacity;
      default:
        return DEFAULT_OAPCITY;
    }
  })();
  const styles = StyleSheet.create<StackStyles>({
    default: { height: size },
    debug: {
      backgroundColor: debugBackgroundCoolor,
      borderWidth: debugBorderWidth,
      borderColor: debugBorderColor,
      opacity: debugOpacity,
      height: size,
    },
  });
  return React.createElement(View, {
    style: isDebugMode ? styles.debug : styles.default,
  });
};

export default Stack;
