/* @flow */
import React from "react";
import type { LayoutEvent } from "react-native/Libraries/Types/CoreEventTypes";

// Conditional Type
type $If<X: boolean, Then, Else = empty> = $Call<
  ((true, Then, Else) => Then) & ((false, Then, Else) => Else),
  X,
  Then,
  Else
>;

// Misc
type CommonFlexType = "flex-start" | "flex-end" | "center";

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
  _debug?: boolean,
  _debugOptions?: QueueDebugOptions,
|};

// Inset
export type InsetDebugOptions = {|
  color?: string,
|};

// Border widths are omitted as well due to the fact that without border color, they are not useful as layouts and border colors are not layout props
export type LayoutStyle = {|
  alignContent?: CommonFlexType | "stretch" | "space-between" | "space-around",
  alignItems?: CommonFlexType | "baseline" | "stretch",
  alignSelf?: CommonFlexType | "auto" | "baseline" | "stretch",
  aspectRatio?: number,
  bottom?: number | string,
  direction?: "inherit" | "ltr" | "rtl", // iOS Only
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
    | CommonFlexType
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

export type OtherT<T> = {|
  top: T,
  right?: T,
  bottom?: T,
  left?: T,
|};

export type OtherB<T> = {|
  top?: T,
  right?: T,
  bottom: T,
  left?: T,
|};

export type OtherR<T> = {|
  top?: T,
  right: T,
  bottom?: T,
  left?: T,
|};

export type OtherL<T> = {|
  top?: T,
  right?: T,
  bottom?: T,
  left: T,
|};

export type Other<T> = OtherT<T> | OtherB<T> | OtherR<T> | OtherL<T>;

export type PaddingPossibilities<T> =
  | All<T>
  | VerHor<T>
  | Horizontal<T>
  | Vertical<T>
  | Other<T>;

export type InsetOtherProps = {|
  children: React$Node,
  layout?: LayoutStyle,
  onLayout?: (event: LayoutEvent) => void,
  _debug?: boolean,
  _debugOptions?: InsetDebugOptions,
|};

export type InsetLayoutlessOtherProps = {|
  children: React$Node,
  _debug?: boolean,
  _debugOptions?: InsetDebugOptions,
|};

export type InsetProps<T, DisallowLayout = false> =
  | {|
      ...All<T>,
      ...$If<DisallowLayout, InsetLayoutlessOtherProps, InsetOtherProps>,
    |}
  | {|
      ...VerHor<T>,
      ...$If<DisallowLayout, InsetLayoutlessOtherProps, InsetOtherProps>,
    |}
  | {|
      ...Horizontal<T>,
      ...$If<DisallowLayout, InsetLayoutlessOtherProps, InsetOtherProps>,
    |}
  | {|
      ...Vertical<T>,
      ...$If<DisallowLayout, InsetLayoutlessOtherProps, InsetOtherProps>,
    |}
  | {|
      ...Other<T>,
      ...$If<DisallowLayout, InsetLayoutlessOtherProps, InsetOtherProps>,
    |};
