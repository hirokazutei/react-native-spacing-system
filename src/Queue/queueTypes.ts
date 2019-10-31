import { ViewStyle } from "react-native";

export type QueueDebugOptions = {
  color?: string;
  border?: boolean;
  borderColor?: string;
  opacity?: number;
};

export type QueueProps<T> = {
  size: T;
  debug?: boolean;
  debugOptions?: QueueDebugOptions;
};

export type QueueStyles = {
  debug: ViewStyle;
  default: ViewStyle;
};
