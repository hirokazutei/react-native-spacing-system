import { FlexStyle, ViewStyle } from "react-native";

export type InsetDebugOptions = {
  color?: string;
};

export type LayoutStyle = Omit<
  FlexStyle,
  // Border widths are omitted as well due to the fact that without border color, they are not useful as layouts and border colors are not layout props
  | "borderBottomWidth"
  | "borderEndWidth"
  | "borderLeftWidth"
  | "borderRightWidth"
  | "borderStartWidth"
  | "borderTopWidth"
  | "borderWidth"
  | "margin"
  | "marginBottom"
  | "marginEnd"
  | "marginHorizontal"
  | "marginLeft"
  | "marginRight"
  | "marginStart"
  | "marginTop"
  | "marginVertical"
  | "padding"
  | "paddingBottom"
  | "paddingEnd"
  | "paddingHorizontal"
  | "paddingLeft"
  | "paddingRight"
  | "paddingStart"
  | "paddingTop"
  | "paddingVertical"
>;

export type All<T> = {
  all: T;
  horizontal?: never;
  vertical?: never;
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
};

export type VerHor<T> = {
  all?: never;
  horizontal: T;
  vertical: T;
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
};

export type Horizontal<T> = {
  all?: never;
  horizontal: T;
  vertical?: never;
  top?: T;
  right?: never;
  bottom?: T;
  left?: never;
};

export type Vertical<T> = {
  all?: never;
  horizontal?: never;
  vertical: T;
  top?: never;
  right?: T;
  bottom?: never;
  left?: T;
};

export type Other<T> = {
  all?: never;
  horizontal?: never;
  vertical?: never;
  top?: T;
  right?: T;
  bottom?: T;
  left?: T;
};

export type PaddingPossibilities<T> =
  | All<T>
  | VerHor<T>
  | Horizontal<T>
  | Vertical<T>
  | Other<T>;

export type InsetProps<T> = {
  layout?: LayoutStyle;
  flex?: number;
  children: React.ReactNode;
  debug?: boolean;
  debugOptions?: InsetDebugOptions;
  _debug?: boolean;
  _debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<T>;

export type InsetStyles = {
  debug: ViewStyle;
  default: ViewStyle;
};
