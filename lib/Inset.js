import React, { useContext } from "react";
import { defaultDebugColor } from "./color";
import DebugContext from "./context";

export default function Inset(props) {
  const isContextDebugMode = useContext(DebugContext);
  const {
    all,
    vertical,
    horizontal,
    top,
    left,
    bottom,
    right,
    flex,
    children,
    debug,
    debugOptions
  } = props;

  const isDebugMode = debug || isContextDebugMode;

  const flexStyle = flex ? { flex } : {};

  const padding = all ? { padding: all } : {};
  const paddingBottom = bottom ? { paddingBottom: bottom } : {};
  const paddingHorizontal = horizontal ? { paddingHorizontal: horizontal } : {};
  const paddingLeft = left ? { paddingLeft: left } : {};
  const paddingRight = right ? { paddingRight: right } : {};
  const paddingTop = top ? { paddingTop: top } : {};
  const paddingVertical = vertical ? { paddingVertical: vertical } : {};

  const paddingStyle = {
    ...padding,
    ...paddingBottom,
    ...paddingHorizontal,
    ...paddingLeft,
    ...paddingRight,
    ...paddingTop,
    ...paddingVertical
  };

  const borderTopWidth =
    (all && { borderTopWidth: all }) ||
    (vertical && { borderTopWidth: vertical }) ||
    (top && { borderTopWidth: top }) ||
    {};
  const borderLeftWidth =
    (all && { borderLeftWidth: all }) ||
    (horizontal && { borderLeftWidth: horizontal }) ||
    (left && { borderLeftWidth: left }) ||
    {};
  const borderBottomWidth =
    (all && { borderBottomWidth: all }) ||
    (vertical && { borderBottomWidth: vertical }) ||
    (bottom && { borderBottomWidth: bottom }) ||
    {};
  const borderRightWidth =
    (all && { borderRightWidth: all }) ||
    (horizontal && { borderRightWidth: horizontal }) ||
    (right && { borderRightWidth: right }) ||
    {};

  const debugStyle = {
    borderStyle: "solid",
    ...borderTopWidth,
    ...borderLeftWidth,
    ...borderBottomWidth,
    ...borderRightWidth,
    borderColor: defaultDebugColor.inset || debugOptions.color
  };

  return React.createElement(
    View,
    {
      style: Object.assign(
        { ...flexStyle },
        isDebugMode ? { ...debugStyle } : { ...paddingStyle }
      )
    },
    children
  );
}
