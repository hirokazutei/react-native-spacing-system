import { ViewStyle } from "react-native";
export declare type QueueDebugOptions = {
    color?: string;
    border?: boolean;
    borderColor?: string;
    opacity?: number;
};
export declare type QueueProps<T> = {
    size: T;
    _debug?: boolean;
    _debugOptions?: QueueDebugOptions;
};
export declare type QueueStyles = {
    debug: ViewStyle;
    default: ViewStyle;
};
//# sourceMappingURL=queueTypes.d.ts.map