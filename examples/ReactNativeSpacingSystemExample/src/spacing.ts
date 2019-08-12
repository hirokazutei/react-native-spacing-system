export type SpacingKeys =
  | "atomic"
  | "micro"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "massive"
  | "macro"
  | "galactic";

export const spacingKeysList: Array<SpacingKeys> = [
  "atomic",
  "micro",
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "massive",
  "macro",
  "galactic"
];

export const spacing: Readonly<{ [key in SpacingKeys]: number }> = {
  atomic: 2,
  micro: 4,
  tiny: 6,
  small: 8,
  medium: 12,
  large: 16,
  huge: 24,
  massive: 32,
  macro: 48,
  galactic: 64
};
