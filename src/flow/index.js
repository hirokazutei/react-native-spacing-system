/* @flow */
import * as React from "react";
import type {
  All as InsetPaddingAllType,
  DebugContextProps,
  DebugItemProps,
  Horizontal as InsetPaddingHorizontalType,
  InsetDebugOptions,
  InsetLayoutlessOtherProps,
  InsetOtherProps,,
  InsetProps,
  LayoutStyleType,
  Other as InsetPaddingOtherType,
  OtherT as InsetPaddingOtherTopType,
  OtherR as InsetPaddingOtherRightType,
  OtherB as InsetPaddingOtherBottomType,
  OtherL as InsetPaddingOtherLeftType,
  PaddingPossibilities as InsetPaddingType,
  QueueDebugOptions,
  QueueProps,
  StackDebugOptions,
  StackProps,
  VerHor as InsetPaddingVerHorType,
  Vertical as InsetPaddingVerticalType,
} from "./types";

export type {
  DebugContextProps,
  DebugItemProps,
  InsetDebugOptions,
  InsetLayoutlessOtherProps,
  InsetOtherProps,
  InsetPaddingAllType,
  InsetPaddingHorizontalType,
  InsetPaddingOtherType,
  InsetPaddingOtherTopType,
  InsetPaddingOtherRightType,
  InsetPaddingOtherBottomType,
  InsetPaddingOtherLeftType,
  InsetPaddingType,
  InsetPaddingVerHorType,
  InsetPaddingVerticalType,
  InsetProps,
  LayoutStyle,
  PaddingPossibilities,
  QueueDebugOptions,
  QueueProps,
  StackDebugOptions,
  StackProps,
} from "./types";

// Context
declare export var DebugContext: React.Context<DebugContextProps>;

// Stack
declare export function stackFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number,
}): React.ComponentType<StackProps<$Keys<T>>>;

declare export var Stack: React.ComponentType<StackProps<number>>;

// Queue
declare export function queueFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number,
}): React.ComponentType<QueueProps<$Keys<T>>>;

declare export var Queue: React.ComponentType<QueueProps<number>>;

// Inset
declare export function insetFactory<T: Object, DisallowLayout: boolean>(
  spacing: {
    [key: $Keys<T>]: number,
  },
  disallowLayout?: DisallowLayout
): React.ComponentType<InsetProps<$Keys<T>, DisallowLayout>>;

declare export var Inset: React.ComponentType<InsetProps<number>>;

// Spacing
declare export function spacingFactory<T: Object, DisallowLayout: boolean>(
  spacing: {
    [key: $Keys<T>]: number,
  },
  disallowLayout?: DisallowLayout
): {
  Inset: React.ComponentType<InsetProps<$Keys<T>, DisallowLayout>>,
  Stack: React.ComponentType<StackProps<$Keys<T>>>,
  Queue: React.ComponentType<QueueProps<$Keys<T>>>,
};
