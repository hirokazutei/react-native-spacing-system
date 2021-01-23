import React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DEFAULT_DEBUG_COLORS, DEFAULT_DEFAULT_BORDER_COLORS, DEFAULT_OAPCITY, DEBUG_BORDER_THICKNESS, } from "../constants";
import { DebugContext } from "../Context";
const Queue = ({ _debug, _debugOptions, size }) => {
    const { debug: isContextDebugMode, queue: contextQueueProperty } = useContext(DebugContext);
    const isDebugMode = __DEV__ && (_debug || isContextDebugMode || (contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.debug));
    const defaultQueueDebugColor = (contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.color) || DEFAULT_DEBUG_COLORS.queue;
    const debugBackgroundCoolor = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.color) || defaultQueueDebugColor;
    const isDebugBorderMode = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.border) || (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.borderColor) || (contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.borderColor) || (contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.borderColor) ||
        DEFAULT_DEFAULT_BORDER_COLORS.queue;
    const debugOpacity = (() => {
        switch ("number") {
            case typeof (contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.opacity):
                return contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.opacity;
            case typeof (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.opacity):
                return _debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.opacity;
            default:
                return DEFAULT_OAPCITY;
        }
    })();
    const styles = StyleSheet.create({
        default: { width: size },
        debug: {
            backgroundColor: debugBackgroundCoolor,
            borderWidth: debugBorderWidth,
            borderColor: debugBorderColor,
            opacity: debugOpacity,
            width: size,
        },
    });
    return React.createElement(View, {
        style: isDebugMode ? styles.debug : styles.default,
    });
};
export default Queue;
//# sourceMappingURL=index.js.map