/* @flow */
import * as React from "react";

// Context
export type DebugItemProps = {|
  debug?: boolean,
  color?: string,
  border?: boolean,
  borderColor?: string,
  opacity?: number,
|};

export type InsetDebugItemProps = {|
  debug?: boolean,
  color?: string,
|};

export type DebugContextProps = {|
  debug: boolean,
  inset?: InsetDebugItemProps,
  queue?: DebugItemProps,
  stack?: DebugItemProps,
|};

// Stack
export type StackDebugOptions = {|
  color?: string,
  border?: boolean,
  borderColor?: string,
  opacity?: number,
|};

export type StackProps<T> = {|
  size: T,
  debug?: boolean,
  debugOptions?: StackDebugOptions,
|};

// Queue
export type QueueDebugOptions = {|
  color?: string,
  border?: boolean,
  borderColor?: string,
  opacity?: number,
|};

export type QueueProps<T> = {|
  size: T,
  debug?: boolean,
  debugOptions?: QueueDebugOptions,
|};

// Inset
export type InsetDebugOptions = {|
  color?: string,
|};

export type All<T> = {|
  all: T,
|};

export type VerHor<T> = {|
  horizontal: T,
  vertical: T,
|};

export type Horizontal<T> = {|
  horizontal: T,
  top?: T,
  bottom?: T,
|};

export type Vertical<T> = {|
  vertical: T,
  right?: T,
  left?: T,
|};

export type Other<T> = {|
  top?: T,
  right?: T,
  bottom?: T,
  left?: T,
|};

export type PaddingPossibilities<T> =
  | All<T>
  | VerHor<T>
  | Horizontal<T>
  | Vertical<T>
  | Other<T>;

type InsetOtherProps = {|
  flex?: number,
  children: React.Node,
  debug?: boolean,
  debugOptions?: InsetDebugOptions,
|};

export type InsetProps<T> =
  | {| ...All<T>, ...InsetOtherProps |}
  | {| ...VerHor<T>, ...InsetOtherProps |}
  | {| ...Horizontal<T>, ...InsetOtherProps |}
  | {| ...Vertical<T>, ...InsetOtherProps |}
  | {| ...Other<T>, ...InsetOtherProps |};
