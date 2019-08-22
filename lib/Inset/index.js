import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import { obtainInsetPaddingStyle } from "./insetHelper";
export const Inset = props => {
  const isContextDebugMode = useContext(DebugContext);
  const {
    flex,
    children,
    debug,
    debugOptions,
    ...paddings
  } = props;
  const styles = obtainInsetPaddingStyle({
    paddings,
    debugOptions
  });
  const isDebugMode = debug || isContextDebugMode;
  const flexStyle = flex ? {
    flex
  } : {};
  const insetSyles = isDebugMode ? styles.debug : styles.default;
  return React.createElement(View, {
    style: Object.assign({ ...flexStyle
    }, isDebugMode ? { ...styles.debug
    } : { ...styles.default
    })
  }, children);
};