import { ViewStyle } from "react-native";

export type StackDebugOptions = {
  color?: string;
  border?: boolean;
  borderColor?: string;
  opacity?: number;
};

export type StackProps<T> = {
  size: T;
  _debug?: boolean;
  _debugOptions?: StackDebugOptions;
};

export type StackStyles = {
  debug: ViewStyle;
  default: ViewStyle;
};
