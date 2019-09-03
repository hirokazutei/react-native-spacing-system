import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import { obtainInsetPaddingStyle } from "./insetHelper";
import { InsetProps } from "./insetTypes";

const Inset = (props: InsetProps<number>): React.ReactElement => {
  // Porps
  const { flex, children, debug, debugOptions, ...paddings } = props;

  // Configure Debug Mode
  const { debug: isContextDebugMode, inset } = useContext(DebugContext);
  const isDebugMode = debug || isContextDebugMode || (inset && inset.debug);

  // Flex
  const flexStyle = flex ? { flex } : {};

  // Padding Style
  const styles = obtainInsetPaddingStyle({
    paddings,
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

export default Inset;
