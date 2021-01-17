import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle,
} from "./insetHelper";
import { InsetProps } from "./insetTypes";
import { DEFAULT_DEBUG_COLORS } from "../constants";

function insetFactory<T, AllowLayout extends boolean = true>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<InsetProps<keyof T, AllowLayout>> {
  const Inset = (props: InsetProps<keyof T, AllowLayout>) => {
    const {
      layout,
      flex,
      children,
      debug,
      debugOptions,
      _debug,
      _debugOptions,
      ...keyedPaddings
    } = props;

    // Configure Debug Mode
    const {
      debug: isContextDebugMode,
      inset: contextInsetProperty,
    } = useContext(DebugContext);
    const isDebugMode =
      __DEV__ &&
      (_debug || debug || isContextDebugMode || contextInsetProperty?.debug);

    // Get Padding Style
    const rawPaddings = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing,
    });
    const styles = obtainInsetPaddingStyle({ paddings: rawPaddings });

    return React.createElement(
      View,
      {
        style: (<any>Object).assign(
          {
            ...(layout ? layout : {}),
            ...(typeof flex === "number" ? { flex } : {}),
          },
          isDebugMode
            ? {
                ...styles.debug,
                borderStyle: "solid",
                borderColor:
                  _debugOptions?.color ||
                  debugOptions?.color ||
                  contextInsetProperty?.color ||
                  DEFAULT_DEBUG_COLORS.inset,
              }
            : { ...styles.default }
        ),
      },
      children
    );
  };
  return Inset;
}

export default insetFactory;
