import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "../color";
import { DebugContext } from "../context";
import { StackProps, StackStyles } from "./stackTypes";

export const Stack = (props: StackProps<number>): React.ReactElement => {
  const { debug, debugOptions, size } = props;
  const { debug: isContextDebugMode, stack } = useContext(DebugContext);
  const isDebugMode = debug || isContextDebugMode || (stack && stack.debug);
  const styles = StyleSheet.create<StackStyles>({
    default: { height: size },
    debug: {
      backgroundColor:
        debugOptions && debugOptions.color
          ? debugOptions.color
          : defaultDebugColor.stack,
      borderWidth:
        debugOptions && (debugOptions.border || debugOptions.borderColor)
          ? 1
          : 0,
      borderColor:
        debugOptions && debugOptions.borderColor
          ? debugOptions.borderColor
          : defaultBorderColor.stack,
      height: size
    }
  });
  return React.createElement(View, {
    style: isDebugMode ? styles.debug : styles.default
  });
};
