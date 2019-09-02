import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle
} from "./insetHelper";
import { InsetDebugOptions, PaddingPossibilities } from "./insetTypes";

export function insetFactory<T>(
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
    const { debug: isContextDebugMode, inset } = useContext(DebugContext);
    const rawPaddings = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing
    });
    const styles = obtainInsetPaddingStyle({
      paddings: rawPaddings,
      debugOptions
    });
    const isDebugMode = debug || isContextDebugMode || (inset && inset.debug);
    const flexStyle = flex ? { flex } : {};
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
