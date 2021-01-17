/* @flow */
import * as React from "react";

// Conditional Type
type $If<X: boolean, Then, Else = empty> = $Call<
    & ((true, Then, Else) => Then)
    & ((false, Then, Else) => Else),
    X,
    Then,
    Else,
>;

// Misc
type FlexAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline";

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
  _debug?: boolean,
  _debugOptions?: StackDebugOptions,
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
  _debug?: boolean,
  _debugOptions?: QueueDebugOptions,
|};

// Inset
export type InsetDebugOptions = {|
  color?: string,
|};

// Border widths are omitted as well due to the fact that without border color, they are not useful as layouts and border colors are not layout props
export type LayoutStyle = {|
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around",
  alignItems?: FlexAlignType,
  alignSelf?: "auto" | FlexAlignType,
  aspectRatio?: number,
  bottom?: number | string,
  display?: "none" | "flex",
  end?: number | string,
  flex?: number,
  flexBasis?: number | string,
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse",
  flexGrow?: number,
  flexShrink?: number,
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse",
  height?: number | string,
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly",
  left?: number | string,
  maxHeight?: number | string,
  maxWidth?: number | string,
  minHeight?: number | string,
  minWidth?: number | string,
  overflow?: "visible" | "hidden" | "scroll",
  position?: "absolute" | "relative",
  right?: number | string,
  start?: number | string,
  top?: number | string,
  width?: number | string,
  zIndex?: number,

  /**
   * @platform ios
   */
  direction?: "inherit" | "ltr" | "rtl",
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
  layout?: LayoutStyle,
  flex?: number,
  children: React.Node,
  debug?: boolean,
  debugOptions?: InsetDebugOptions,
  _debug?: boolean,
  _debugOptions?: InsetDebugOptions,
|};

type InsetLayoutlessOtherProps = {|
  flex?: number,
  children: React.Node,
  debug?: boolean,
  debugOptions?: InsetDebugOptions,
  _debug?: boolean,
  _debugOptions?: InsetDebugOptions,
|};

export type InsetProps<T, AllowLayout = true> =
  | {| ...All<T>, ...$If<AllowLayout, InsetOtherProps, InsetLayoutlessOtherProps>  |}
  | {| ...VerHor<T>, ...$If<AllowLayout, InsetOtherProps, InsetLayoutlessOtherProps>  |}
  | {| ...Horizontal<T>, ...$If<AllowLayout, InsetOtherProps, InsetLayoutlessOtherProps>  |}
  | {| ...Vertical<T>, ...$If<AllowLayout, InsetOtherProps, InsetLayoutlessOtherProps>  |}
  | {| ...Other<T>, ...$If<AllowLayout, InsetOtherProps, InsetLayoutlessOtherProps> |};

