/* @flow */

import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import { obtainInsetPaddingStyle } from "./insetHelper";
import type { InsetProps } from "./insetTypes";

export const Inset = (props: InsetProps<number>): React.Node => {
  const isContextDebugMode = useContext(DebugContext);
  const { flex, children, debug, debugOptions, ...paddings } = props;
  const styles = obtainInsetPaddingStyle({
    paddings,
    debugOptions
  });

  const isDebugMode = debug || isContextDebugMode;
  const flexStyle = flex ? { flex } : {};
  const insetSyles = isDebugMode ? styles.debug : styles.default;
  return <View style={{ ...flexStyle, ...insetSyles }}>{children}</View>;
};
