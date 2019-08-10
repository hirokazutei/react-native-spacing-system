import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { defaultDebugColor } from "./color";
import { DebugContext } from "./context";

export type InsetDebugOptions = {
  color?: string;
};

export type All = { all: number };

export type VerHor = {
  horizontal: number;
  vertical: number;
};

export type Horizontal = {
  bottom?: number;
  horizontal: number;
  top?: number;
};

export type Vertical = {
  left?: number;
  right?: number;
  vertical: number;
};

export type Other = {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
};

export type PaddingPossibilities = All | VerHor | Horizontal | Vertical | Other;

export type InsetProps = {
  flex?: number;
  children: React.ReactNode;
  debug?: boolean;
  debugOptions?: InsetDebugOptions;
  paddings: PaddingPossibilities;
};

const obtainPaddingStyle = ({
  paddings,
  debugOptions
}: {
  paddings: PaddingPossibilities;
  debugOptions?: InsetDebugOptions;
}) => {
  let all, vertical, horizontal, top, left, bottom, right;
  if ((paddings as All).all) {
    all = (paddings as All).all;
  } else if ((paddings as VerHor).vertical && (paddings as VerHor).horizontal) {
    vertical = (paddings as VerHor).vertical;
    horizontal = (paddings as VerHor).horizontal;
  } else if ((paddings as Vertical).vertical) {
    vertical = (paddings as Vertical).vertical;
    right = (paddings as Vertical).right;
    left = (paddings as Vertical).left;
  } else if ((paddings as Horizontal).horizontal) {
    horizontal = (paddings as Horizontal).horizontal;
    top = (paddings as Horizontal).top;
    bottom = (paddings as Horizontal).bottom;
  } else {
    right = (paddings as Other).right;
    left = (paddings as Other).left;
    top = (paddings as Other).top;
    bottom = (paddings as Other).bottom;
  }

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
    borderColor: defaultDebugColor.inset || (debugOptions && debugOptions.color)
  };
  return { paddingStyle, debugStyle };
};

export const Inset = (props: InsetProps): React.ReactElement => {
  const isContextDebugMode = useContext(DebugContext);
  const { flex, children, debug, debugOptions, paddings } = props;

  const { paddingStyle, debugStyle } = obtainPaddingStyle({
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
        isDebugMode ? { ...debugStyle } : { ...paddingStyle }
      )
    },
    children
  );
};
