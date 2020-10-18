import { ViewStyle } from "react-native";
export declare type StackDebugOptions = {
    color?: string;
    border?: boolean;
    borderColor?: string;
    opacity?: number;
};
export declare type StackProps<T> = {
    size: T;
    debug?: boolean;
    debugOptions?: StackDebugOptions;
    _debug?: boolean;
    _debugOptions?: StackDebugOptions;
};
export declare type StackStyles = {
    debug: ViewStyle;
    default: ViewStyle;
};
//# sourceMappingURL=stackTypes.d.ts.map