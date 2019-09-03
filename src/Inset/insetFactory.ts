import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle
} from "./insetHelper";
import { InsetDebugOptions, PaddingPossibilities } from "./insetTypes";

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
    const { debug: isContextDebugMode, inset } = useContext(DebugContext);
    const isDebugMode = debug || isContextDebugMode || (inset && inset.debug);

    // Flex
    const flexStyle = flex ? { flex } : {};

    // Get Padding Style
    const rawPaddings = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing
    });
    const styles = obtainInsetPaddingStyle({
      paddings: rawPaddings,
      debugOptions
    });

    return React.createElement(
      View,
      {
        style: (<any>Object).assign(
          { ...flexStyle },
          isDebugMode ? { ...styles.debug } : { ...styles.default }
        )
      },
      children
    );
  };
  return Inset;
}

export default insetFactory;
