import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DEFAULT_DEBUG_COLORS, DEFAULT_DEFAULT_BORDER_COLORS, DEFAULT_OAPCITY, DEBUG_BORDER_THICKNESS, } from "../constants";
import { DebugContext } from "../Context";
const Queue = (props) => {
    const { _debug, _debugOptions, size } = props;
    const { debug: isContextDebugMode, queue: contextQueueProperty } = useContext(DebugContext);
    const isDebugMode = __DEV__ &&
        (_debug ||
            isContextDebugMode ||
            (contextQueueProperty && contextQueueProperty.debug));
    const defaultQueueDebugColor = (contextQueueProperty && contextQueueProperty.color) ||
        DEFAULT_DEBUG_COLORS.queue;
    const debugBackgroundCoolor = (_debugOptions && _debugOptions.color) || defaultQueueDebugColor;
    const isDebugBorderMode = (_debugOptions && (_debugOptions.border || _debugOptions.borderColor)) ||
        (contextQueueProperty && contextQueueProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor = (_debugOptions && _debugOptions.borderColor) ||
        (contextQueueProperty && contextQueueProperty.borderColor) ||
        DEFAULT_DEFAULT_BORDER_COLORS.queue;
    let debugOpacity = DEFAULT_OAPCITY;
    debugOpacity =
        contextQueueProperty &&
            (contextQueueProperty.opacity === 0 || contextQueueProperty.opacity)
            ? contextQueueProperty.opacity
            : debugOpacity;
    debugOpacity =
        _debugOptions && (_debugOptions.opacity === 0 || _debugOptions.opacity)
            ? _debugOptions.opacity
            : debugOpacity;
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