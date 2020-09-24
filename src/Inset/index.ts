import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import { obtainInsetPaddingStyle } from "./insetHelper";
import { InsetProps } from "./insetTypes";
import { DEFAULT_DEBUG_COLORS } from "../constants";

const Inset = (props: InsetProps<number>) => {
  const { layout, children, debug, debugOptions, ...paddings } = props;

  // Configure Debug Mode
  const { debug: isContextDebugMode, inset: contextInsetProperty } = useContext(
    DebugContext
  );
  const isDebugMode =
    debug ||
    isContextDebugMode ||
    (contextInsetProperty && contextInsetProperty.debug);

  // Padding Style
  const styles = obtainInsetPaddingStyle({ paddings });

  return React.createElement(
    View,
    {
      style: (<any>Object).assign(
        { ...layout },
        isDebugMode
          ? {
              ...styles.debug,
              borderStyle: "solid",
              borderColor:
                (debugOptions && debugOptions.color) ||
                (contextInsetProperty && contextInsetProperty.color) ||
                DEFAULT_DEBUG_COLORS.inset,
            }
          : { ...styles.default }
      ),
    },
    children
  );
};

export default Inset;
