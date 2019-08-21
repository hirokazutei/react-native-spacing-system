/* @flow */

export type QueueDebugOptions = {|
  color?: string,
  border?: boolean,
  borderColor?: string
|};

export type QueueProps<T> = {|
  size: T,
  debug?: boolean,
  debugOptions?: QueueDebugOptions
|};
