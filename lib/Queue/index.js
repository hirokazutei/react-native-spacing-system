import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DEFAULT_DEBUG_COLORS, DEFAULT_DEFAULT_BORDER_COLORS, DEFAULT_OAPCITY, DEBUG_BORDER_THICKNESS, } from "../constants";
import { DebugContext } from "../Context";
const Queue = (props) => {
    const { debug, debugOptions, _debug, _debugOptions, size } = props;
    const { debug: isContextDebugMode, queue: contextQueueProperty } = useContext(DebugContext);
    const isDebugMode = __DEV__ &&
        (debug ||
            _debug ||
            isContextDebugMode ||
            (contextQueueProperty && contextQueueProperty.debug));
    const defaultQueueDebugColor = (contextQueueProperty && contextQueueProperty.color) ||
        DEFAULT_DEBUG_COLORS.queue;
    const debugBackgroundCoolor = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.color) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.color) || defaultQueueDebugColor;
    const isDebugBorderMode = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.border) || (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.borderColor) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.border) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.borderColor) ||
        (contextQueueProperty && contextQueueProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.borderColor) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.borderColor) ||
        (contextQueueProperty && contextQueueProperty.borderColor) ||
        DEFAULT_DEFAULT_BORDER_COLORS.queue;
    const debugOpacity = (() => {
        switch (true) {
            case typeof (contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.opacity) === "number":
                return contextQueueProperty === null || contextQueueProperty === void 0 ? void 0 : contextQueueProperty.opacity;
            case typeof (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.opacity) === "number":
                return _debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.opacity;
            case typeof (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.opacity) === "number":
                return debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.opacity;
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