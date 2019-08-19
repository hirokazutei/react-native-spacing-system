import { ViewStyle } from "react-native";
export declare type StackDebugOptions = {
    color?: string;
    border?: boolean;
    borderColor?: string;
};
export declare type StackProps<T> = {
    size: T;
    debug?: boolean;
    debugOptions?: StackDebugOptions;
};
export declare type StackStyles = {
    debug: ViewStyle;
    default: ViewStyle;
};
//# sourceMappingURL=stackTypes.d.ts.map