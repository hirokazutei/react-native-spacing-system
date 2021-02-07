import { FlexStyle, LayoutChangeEvent, ViewStyle } from "react-native";

export type InsetDebugOptions = {
  color?: string;
};

// Border widths are omitted as well due to the fact that without border color, they are not useful as layouts and border colors are not layout props
export type LayoutStyle = Omit<
  FlexStyle,
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
  horizontal?: void;
  vertical?: void;
  top?: void;
  right?: void;
  bottom?: void;
  left?: void;
};

export type VerHor<T> = {
  all?: void;
  horizontal: T;
  vertical: T;
  top?: void;
  right?: void;
  bottom?: void;
  left?: void;
};

export type Horizontal<T> = {
  all?: void;
  horizontal: T;
  vertical?: void;
  top?: T;
  right?: void;
  bottom?: T;
  left?: void;
};

export type Vertical<T> = {
  all?: void;
  horizontal?: void;
  vertical: T;
  top?: void;
  right?: T;
  bottom?: void;
  left?: T;
};

export type Other<T> = {
  all?: void;
  horizontal?: void;
  vertical?: void;
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

export type InsetProps<
  T,
  DisallowLayout extends boolean | undefined = false
> = {
  children: React.ReactNode;
  layout?: DisallowLayout extends false | undefined ? LayoutStyle : never;
  onLayout?: (event: LayoutChangeEvent) => void;
  _debug?: boolean;
  _debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<T>;

export type InsetStyles = {
  debug: ViewStyle;
  default: ViewStyle;
};
