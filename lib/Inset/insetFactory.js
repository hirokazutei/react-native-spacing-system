import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../context";
import { convertInsetPaddingKeyToValue, obtainInsetPaddingStyle } from "./insetHelper";
export function insetFactory(spacing) {
  const Inset = props => {
    const isContextDebugMode = useContext(DebugContext);
    const {
      flex,
      children,
      debug,
      debugOptions,
      ...keyedPaddings
    } = props;
    const styles = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing,
      debugOptions
    });
    const isDebugMode = debug || isContextDebugMode;
    const flexStyle = flex ? {
      flex
    } : {};
    const insetStyles = isDebugMode ? styles.debug : styles.default;
    return React.createElement(View, {
      style: Object.assign({ ...flexStyle
      }, isDebugMode ? { ...styles.debug
      } : { ...styles.default
      })
    }, children);
  };

  return Inset;
}