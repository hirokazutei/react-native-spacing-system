/// <reference types="react" />
import { FlexStyle, LayoutChangeEvent, ViewStyle } from "react-native";
export declare type InsetDebugOptions = {
    color?: string;
};
export declare type LayoutStyle = Omit<FlexStyle, "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical">;
export declare type All<T> = {
    all: T;
    horizontal?: void;
    vertical?: void;
    top?: void;
    right?: void;
    bottom?: void;
    left?: void;
};
export declare type VerHor<T> = {
    all?: void;
    horizontal: T;
    vertical: T;
    top?: void;
    right?: void;
    bottom?: void;
    left?: void;
};
export declare type Horizontal<T> = {
    all?: void;
    horizontal: T;
    vertical?: void;
    top?: T;
    right?: void;
    bottom?: T;
    left?: void;
};
export declare type Vertical<T> = {
    all?: void;
    horizontal?: void;
    vertical: T;
    top?: void;
    right?: T;
    bottom?: void;
    left?: T;
};
export declare type OtherT<T> = {
    all?: void;
    horizontal?: void;
    vertical?: void;
    top: T;
    right?: T;
    bottom?: T;
    left?: T;
};
export declare type OtherB<T> = {
    all?: void;
    horizontal?: void;
    vertical?: void;
    top?: T;
    right?: T;
    bottom: T;
    left?: T;
};
export declare type OtherR<T> = {
    all?: void;
    horizontal?: void;
    vertical?: void;
    top?: T;
    right: T;
    bottom?: T;
    left?: T;
};
export declare type OtherL<T> = {
    all?: void;
    horizontal?: void;
    vertical?: void;
    top?: T;
    right?: T;
    bottom?: T;
    left: T;
};
export declare type Other<T> = OtherT<T> | OtherB<T> | OtherR<T> | OtherL<T>;
export declare type PaddingPossibilities<T> = All<T> | VerHor<T> | Horizontal<T> | Vertical<T> | Other<T>;
export declare type InsetProps<T, DisallowLayout extends boolean | undefined = false> = {
    children: React.ReactNode;
    layout?: DisallowLayout extends false | undefined ? LayoutStyle : never;
    onLayout?: (event: LayoutChangeEvent) => void;
    _debug?: boolean;
    _debugOptions?: InsetDebugOptions;
} & PaddingPossibilities<T>;
export declare type InsetStyles = {
    debug: ViewStyle;
    default: ViewStyle;
};
//# sourceMappingURL=insetTypes.d.ts.map