import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle
} from "./insetHelper";
import { InsetDebugOptions, PaddingPossibilities } from "./insetTypes";
import { DEFAULT_DEBUG_COLORS, DEFAULT_OAPCITY } from "../constants";

function insetFactory<T>(
  spacing: { [K in keyof T]: number }
): React.FunctionComponent<
  {
    flex?: number;
    children: React.ReactNode;
    debug?: boolean;
    debugOptions?: InsetDebugOptions;
  } & PaddingPossibilities<keyof T>
> {
  const Inset = (
    props: {
      flex?: number;
      children: React.ReactNode;
      debug?: boolean;
      debugOptions?: InsetDebugOptions;
    } & PaddingPossibilities<keyof T>
  ): React.ReactElement => {
    const { flex, children, debug, debugOptions, ...keyedPaddings } = props;

    // Configure Debug Mode
    const {
      debug: isContextDebugMode,
      inset: contextInsetProperty
    } = useContext(DebugContext);
    const isDebugMode =
      debug ||
      isContextDebugMode ||
      (contextInsetProperty && contextInsetProperty.debug);

    // Flex
    const flexStyle = flex ? { flex } : {};

    // Get Padding Style
    const rawPaddings = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing
    });
    const styles = obtainInsetPaddingStyle({ paddings: rawPaddings });

    return React.createElement(
      View,
      {
        style: (<any>Object).assign(
          { ...flexStyle },
          isDebugMode
            ? {
                ...styles.debug,
                borderStyle: "solid",
                borderColor:
                  (debugOptions && debugOptions.color) ||
                  (contextInsetProperty && contextInsetProperty.color) ||
                  DEFAULT_DEBUG_COLORS.inset,
                opacity:
                  (debugOptions && debugOptions.opacity) ||
                  (contextInsetProperty && contextInsetProperty.opacity) ||
                  DEFAULT_OAPCITY
              }
            : { ...styles.default }
        )
      },
      children
    );
  };
  return Inset;
}

export default insetFactory;
