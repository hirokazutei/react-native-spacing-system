import { ViewStyle } from "react-native";

export type StackDebugOptions = {
  color?: string;
  border?: boolean;
  borderColor?: string;
};

export type StackProps<T> = {
  size: T;
  debug?: boolean;
  debugOptions?: StackDebugOptions;
};

export type StackStyles = {
  debug: ViewStyle;
  default: ViewStyle;
};
