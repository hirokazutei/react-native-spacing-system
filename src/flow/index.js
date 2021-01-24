/* @flow */
import React from "react";
import type {
  All,
  DebugContextProps,
  DebugItemProps,
  Horizontal,
  InsetDebugItemProps,
  InsetDebugOptions,
  InsetLayoutlessOtherProps,
  InsetOtherProps,
  InsetProps,
  LayoutStyle,
  Other,
  OtherT,
  OtherR,
  OtherB,
  OtherL,
  PaddingPossibilities,
  QueueDebugOptions,
  QueueProps,
  StackDebugOptions,
  StackProps,
  VerHor,
  Vertical,
} from "./types";

export type {
  DebugContextProps,
  DebugItemProps,
  InsetDebugItemProps,
  InsetDebugOptions,
  InsetLayoutlessOtherProps,
  InsetOtherProps,
  All as InsetPaddingAllType,
  Horizontal as InsetPaddingHorizontalType,
  Other as InsetPaddingOtherType,
  OtherT as InsetPaddingOtherTopType,
  OtherR as InsetPaddingOtherRightType,
  OtherB as asInsetPaddingOtherBottomType,
  OtherL as InsetPaddingOtherLeftType,
  PaddingPossibilities as InsetPaddingType,
  VerHor as InsetPaddingVerHorType,
  Vertical as InsetPaddingVerticalType,
  InsetProps,
  LayoutStyle,
  PaddingPossibilities,
  QueueDebugOptions,
  QueueProps,
  StackDebugOptions,
  StackProps,
} from "./types";

// Context
declare export var DebugContext: React$Context<DebugContextProps>;

// Stack
declare export function stackFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number,
}): React$ComponentType<StackProps<$Keys<T>>>;

declare export var Stack: React$ComponentType<StackProps<number>>;

// Queue
declare export function queueFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number,
}): React$ComponentType<QueueProps<$Keys<T>>>;

declare export var Queue: React$ComponentType<QueueProps<number>>;

// Inset
declare export function insetFactory<T: Object, DisallowLayout: boolean>(
  spacing: {
    [key: $Keys<T>]: number,
  },
  disallowLayout?: DisallowLayout
): React$ComponentType<InsetProps<$Keys<T>, DisallowLayout>>;

declare export var Inset: React$ComponentType<InsetProps<number>>;

// Spacing
declare export function spacingFactory<T: Object, DisallowLayout: boolean>(
  spacing: {
    [key: $Keys<T>]: number,
  },
  disallowLayout?: DisallowLayout
): {
  Inset: React$ComponentType<InsetProps<$Keys<T>, DisallowLayout>>,
  Stack: React$ComponentType<StackProps<$Keys<T>>>,
  Queue: React$ComponentType<QueueProps<$Keys<T>>>,
};
