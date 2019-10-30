import { ViewStyle } from "react-native";

export type InsetDebugOptions = {
  color?: string;
  opacity?: number;
};

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
  flex?: number;
  children: React.ReactNode;
  debug?: boolean;
  debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<T>;

export type InsetStyles = {
  debug: ViewStyle;
  default: ViewStyle;
};
