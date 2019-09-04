/* @flow */
import * as React from "react";
import type {
  DebugContextProps,
  DebugItemProps,
  InsetDebugOptions,
  InsetProps,
  PaddingPossibilities,
  QueueDebugOptions,
  QueueProps,
  StackDebugOptions,
  StackProps
} from "./types";

export type {
  DebugContextProps,
  DebugItemProps,
  InsetDebugOptions,
  InsetProps,
  PaddingPossibilities,
  QueueDebugOptions,
  QueueProps,
  StackDebugOptions,
  StackProps
} from "./types";

// Context
declare export var DebugContext: React.Context<DebugContextProps>;

// Stack
declare export function stackFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number
}): React.ComponentType<StackProps<$Keys<T>>>;

declare export var Stack: React.ComponentType<StackProps<number>>;

// Queue
declare export function queueFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number
}): React.ComponentType<QueueProps<$Keys<T>>>;

declare export var Queue: React.ComponentType<QueueProps<number>>;

// Inset
declare export function insetFactory<T: Object>(spacing: {
  [key: $Keys<T>]: number
}): React.ComponentType<InsetProps<$Keys<T>>>;

declare export var Inset: React.ComponentType<InsetProps<number>>;
