import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DEFAULT_DEBUG_COLORS, DEFAULT_DEFAULT_BORDER_COLORS, DEBUG_BORDER_THICKNESS } from "../constants";
import { DebugContext } from "../Context";
function queueFactory(spacing) {
    const Queue = (props) => {
        const { debug, debugOptions, size } = props;
        const { debug: isContextDebugMode, queue: contextQueueProperty } = useContext(DebugContext);
        const isDebugMode = debug ||
            isContextDebugMode ||
            (contextQueueProperty && contextQueueProperty.debug);
        const defaultQueueDebugColor = (contextQueueProperty && contextQueueProperty.color) ||
            DEFAULT_DEBUG_COLORS.queue;
        const debugBackgroundCoolor = (debugOptions && debugOptions.color) || defaultQueueDebugColor;
        const isDebugBorderMode = (debugOptions && (debugOptions.border || debugOptions.borderColor)) ||
            (contextQueueProperty && contextQueueProperty.border);
        const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
        const debugBorderColor = (debugOptions && debugOptions.borderColor) ||
            (contextQueueProperty && contextQueueProperty.borderColor) ||
            DEFAULT_DEFAULT_BORDER_COLORS.queue;
        const styles = StyleSheet.create({
            default: { width: spacing[size] },
            debug: {
                backgroundColor: debugBackgroundCoolor,
                borderWidth: debugBorderWidth,
                borderColor: debugBorderColor,
                width: spacing[size]
            }
        });
        return React.createElement(View, {
            style: isDebugMode ? styles.debug : styles.default
        });
    };
    return Queue;
}
export default queueFactory;
//# sourceMappingURL=queueFactory.js.map