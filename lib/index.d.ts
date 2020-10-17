/// <reference types="react" />
import { DebugContext } from "./Context";
import { DebugContextProps, DebugItemProps, InsetDebugItemProps } from "./Context/types";
import Inset from "./Inset";
import insetFactory from "./Inset/insetFactory";
import { All, InsetDebugOptions, Horizontal, InsetProps, LayoutStyle, Other, PaddingPossibilities, VerHor, Vertical, InsetStyles } from "./Inset/insetTypes";
import Stack from "./Stack";
import stackFactory from "./Stack/stackFactory";
import { StackDebugOptions, StackProps, StackStyles } from "./Stack/stackTypes";
import Queue from "./Queue";
import queueFactory from "./Queue/queueFactory";
import { QueueDebugOptions, QueueProps, QueueStyles } from "./Queue/queueTypes";
declare function spacingFactory<T>(spacing: {
    [K in keyof T]: number;
}): {
    Inset: import("react").FunctionComponent<({
        layout?: Pick<import("react-native").FlexStyle, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction"> | undefined;
        children: import("react").ReactNode;
        _debug?: boolean | undefined;
        _debugOptions?: InsetDebugOptions | undefined;
    } & All<keyof T>) | ({
        layout?: Pick<import("react-native").FlexStyle, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction"> | undefined;
        children: import("react").ReactNode;
        _debug?: boolean | undefined;
        _debugOptions?: InsetDebugOptions | undefined;
    } & VerHor<keyof T>) | ({
        layout?: Pick<import("react-native").FlexStyle, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction"> | undefined;
        children: import("react").ReactNode;
        _debug?: boolean | undefined;
        _debugOptions?: InsetDebugOptions | undefined;
    } & Horizontal<keyof T>) | ({
        layout?: Pick<import("react-native").FlexStyle, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction"> | undefined;
        children: import("react").ReactNode;
        _debug?: boolean | undefined;
        _debugOptions?: InsetDebugOptions | undefined;
    } & Vertical<keyof T>) | ({
        layout?: Pick<import("react-native").FlexStyle, "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction"> | undefined;
        children: import("react").ReactNode;
        _debug?: boolean | undefined;
        _debugOptions?: InsetDebugOptions | undefined;
    } & Other<keyof T>)>;
    Stack: import("react").FunctionComponent<StackProps<keyof T>>;
    Queue: import("react").FunctionComponent<QueueProps<keyof T>>;
};
export { DebugContext, DebugContextProps, InsetDebugItemProps, DebugItemProps, Inset, insetFactory, All, InsetDebugOptions, Horizontal, InsetProps, LayoutStyle, Other, PaddingPossibilities, VerHor, Vertical, InsetStyles, spacingFactory, Stack, stackFactory, StackDebugOptions, StackProps, StackStyles, Queue, queueFactory, QueueDebugOptions, QueueProps, QueueStyles, };
//# sourceMappingURL=index.d.ts.map