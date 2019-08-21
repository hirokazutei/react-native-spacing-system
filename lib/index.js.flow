/* @flow */
import * as React from "react";

// Stack
declare type StackDebugOptions = {|
  color?: string,
  border?: boolean,
  borderColor?: string
|};

declare type StackProps<T> = {|
  size: T,
  debug?: boolean,
  debugOptions?: StackDebugOptions
|};

declare function Stack(
  props: StackProps<number>
): React.Element<StackProps<number>>;

declare function stackFactory<T>(spacing: {
  [key: $Keys<T>]: number
}): React.StatelessFunctionalComponent<StackProps<$Keys<T>>>;

// Queue
declare type QueueDebugOptions = {|
  color?: string,
  border?: boolean,
  borderColor?: string
|};

declare type QueueProps<T> = {|
  size: T,
  debug?: boolean,
  debugOptions?: QueueDebugOptions
|};

declare function Queue(
  props: QueueProps<number>
): React.Element<QueueProps<number>>;

declare function queueFactory<T>(spacing: {
  [key: $Keys<T>]: number
}): React.StatelessFunctionalComponent<QueueProps<$Keys<T>>>;

declare type InsetDebugOptions = {|
  color?: string
|};

declare type All<T> = {|
  all: T
|};

declare type VerHor<T> = {|
  horizontal: T,
  vertical: T
|};

declare type Horizontal<T> = {|
  horizontal: T,
  top?: T,
  bottom?: T
|};

declare type Vertical<T> = {|
  vertical: T,
  right?: T,
  left?: T
|};

declare type Other<T> = {|
  top?: T,
  right?: T,
  bottom?: T,
  left?: T
|};

declare type PaddingPossibilities<T> = {|
  ...All<T>,
  ...VerHor<T>,
  ...Horizontal<T>,
  ...Vertical<T>,
  ...Other<T>
|};

type InsetOtherProps = {|
  flex?: number,
  children: React.Node,
  debug?: boolean,
  debugOptions?: InsetDebugOptions
|};

declare type InsetProps<T> = {|
  ...InsetOtherProps,
  ...PaddingPossibilities<T>
|};

declare function Inset(
  props: InsetProps<number>
): React.Element<QueueProps<number>>;

declare function insetFactory<T>(spacing: {
  [key: $Keys<T>]: number
}): React.StatelessFunctionalComponent<InsetProps<$Keys<T>>>;
