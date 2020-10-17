import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle,
} from "./insetHelper";
import {
  InsetDebugOptions,
  PaddingPossibilities,
  LayoutStyle,
} from "./insetTypes";
import { DEFAULT_DEBUG_COLORS } from "../constants";

function insetFactory<T>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<
  {
    layout?: LayoutStyle;
    children: React.ReactNode;
    _debug?: boolean;
    _debugOptions?: InsetDebugOptions;
  } & PaddingPossibilities<keyof T>
> {
  const Inset = (
    props: {
      layout?: LayoutStyle;
      children: React.ReactNode;
      _debug?: boolean;
      _debugOptions?: InsetDebugOptions;
    } & PaddingPossibilities<keyof T>
  ) => {
    const { layout, children, _debug, _debugOptions, ...keyedPaddings } = props;

    // Configure Debug Mode
    const {
      debug: isContextDebugMode,
      inset: contextInsetProperty,
    } = useContext(DebugContext);
    const isDebugMode =
      __DEV__ &&
      (_debug ||
        isContextDebugMode ||
        (contextInsetProperty && contextInsetProperty.debug));

    // Layout
    const layoutStyle = layout ? layout : {};

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
          { ...layoutStyle },
          isDebugMode
            ? {
                ...styles.debug,
                borderStyle: "solid",
                borderColor:
                  (_debugOptions && _debugOptions.color) ||
                  (contextInsetProperty && contextInsetProperty.color) ||
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
