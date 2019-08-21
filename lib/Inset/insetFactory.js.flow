/* @flow */
import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle
} from "./insetHelper";
import type { InsetDebugOptions, PaddingPossibilities } from "./insetTypes";

export function insetFactory<T>(spacing: {
  [key: T]: number
}): React.ComponentType<View> {
  const Inset = (
    props: {
      flex?: number,
      children: React.Node,
      debug?: boolean,
      debugOptions?: InsetDebugOptions
    } & PaddingPossibilities<T>
  ): React.Node => {
    const isContextDebugMode = useContext(DebugContext);
    const { flex, children, debug, debugOptions, ...keyedPaddings } = props;
    const styles = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing,
      debugOptions
    });
    const isDebugMode = debug || isContextDebugMode;
    const flexStyle = flex ? { flex } : {};
    const insetStyles = isDebugMode ? styles.debug : styles.default;
    return <View style={{ ...flexStyle, ...insetStyles }}>{children}</View>;
  };
  return Inset;
}
