import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import { obtainInsetPaddingStyle } from "./insetHelper";
import { InsetProps } from "./insetTypes";

export const Inset = (props: InsetProps<number>): React.ReactElement => {
  const isContextDebugMode = useContext(DebugContext);
  const { flex, children, debug, debugOptions, ...paddings } = props;
  const styles = obtainInsetPaddingStyle({
    paddings,
    debugOptions
  });

  const isDebugMode = debug || isContextDebugMode;
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
