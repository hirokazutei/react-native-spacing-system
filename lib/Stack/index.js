import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DEFAULT_DEBUG_COLORS, DEFAULT_DEFAULT_BORDER_COLORS, DEBUG_BORDER_THICKNESS, DEFAULT_OAPCITY } from "../constants";
import { DebugContext } from "../Context";
const Stack = (props) => {
    const { debug, debugOptions, size } = props;
    const { debug: isContextDebugMode, stack: contextStackProperty } = useContext(DebugContext);
    const isDebugMode = debug ||
        isContextDebugMode ||
        (contextStackProperty && contextStackProperty.debug);
    const defaultStackDebugColor = (contextStackProperty && contextStackProperty.color) ||
        DEFAULT_DEBUG_COLORS.stack;
    const debugBackgroundCoolor = (debugOptions && debugOptions.color) || defaultStackDebugColor;
    const isDebugBorderMode = (debugOptions && (debugOptions.border || debugOptions.borderColor)) ||
        (contextStackProperty && contextStackProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor = (debugOptions && debugOptions.borderColor) ||
        (contextStackProperty && contextStackProperty.borderColor) ||
        DEFAULT_DEFAULT_BORDER_COLORS.stack;
    const debugOpacity = (debugOptions && debugOptions.opacity) ||
        (contextStackProperty && contextStackProperty.opacity) ||
        DEFAULT_OAPCITY;
    const styles = StyleSheet.create({
        default: { height: size },
        debug: {
            backgroundColor: debugBackgroundCoolor,
            borderWidth: debugBorderWidth,
            borderColor: debugBorderColor,
            opacity: debugOpacity,
            height: size
        }
    });
    return React.createElement(View, {
        style: isDebugMode ? styles.debug : styles.default
    });
};
export default Stack;
//# sourceMappingURL=index.js.map