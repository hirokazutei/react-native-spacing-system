/// <reference types="react" />
import { FlexStyle, ViewStyle } from "react-native";
export declare type InsetDebugOptions = {
    color?: string;
};
export declare type LayoutStyle = Omit<FlexStyle, "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical">;
export declare type All<T> = {
    all: T;
    horizontal?: never;
    vertical?: never;
    top?: never;
    right?: never;
    bottom?: never;
    left?: never;
};
export declare type VerHor<T> = {
    all?: never;
    horizontal: T;
    vertical: T;
    top?: never;
    right?: never;
    bottom?: never;
    left?: never;
};
export declare type Horizontal<T> = {
    all?: never;
    horizontal: T;
    vertical?: never;
    top?: T;
    right?: never;
    bottom?: T;
    left?: never;
};
export declare type Vertical<T> = {
    all?: never;
    horizontal?: never;
    vertical: T;
    top?: never;
    right?: T;
    bottom?: never;
    left?: T;
};
export declare type Other<T> = {
    all?: never;
    horizontal?: never;
    vertical?: never;
    top?: T;
    right?: T;
    bottom?: T;
    left?: T;
};
export declare type PaddingPossibilities<T> = All<T> | VerHor<T> | Horizontal<T> | Vertical<T> | Other<T>;
export declare type InsetProps<T> = {
    layout?: LayoutStyle;
    flex?: number;
    children: React.ReactNode;
    debug?: boolean;
    debugOptions?: InsetDebugOptions;
    _debug?: boolean;
    _debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<T>;
export declare type InsetStyles = {
    debug: ViewStyle;
    default: ViewStyle;
};
//# sourceMappingURL=insetTypes.d.ts.map