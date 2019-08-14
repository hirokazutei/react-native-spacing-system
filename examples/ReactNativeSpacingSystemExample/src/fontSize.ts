export type FontSizeKeys = "small" | "medium" | "large" | "xlarge";

export const fontSize: Readonly<{ [key in FontSizeKeys]: number }> = {
  small: 8,
  medium: 16,
  large: 20,
  xlarge: 24
};
