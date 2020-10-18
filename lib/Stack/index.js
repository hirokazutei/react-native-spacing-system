import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DEFAULT_DEBUG_COLORS, DEFAULT_DEFAULT_BORDER_COLORS, DEBUG_BORDER_THICKNESS, DEFAULT_OAPCITY, } from "../constants";
import { DebugContext } from "../Context";
const Stack = (props) => {
    const { debug, debugOptions, _debug, _debugOptions, size } = props;
    const { debug: isContextDebugMode, stack: contextStackProperty } = useContext(DebugContext);
    const isDebugMode = __DEV__ &&
        (_debug ||
            debug ||
            isContextDebugMode ||
            (contextStackProperty && contextStackProperty.debug));
    const defaultStackDebugColor = (contextStackProperty && contextStackProperty.color) ||
        DEFAULT_DEBUG_COLORS.stack;
    const debugBackgroundCoolor = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.color) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.color) || defaultStackDebugColor;
    const isDebugBorderMode = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.border) || (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.borderColor) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.border) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.borderColor) ||
        (contextStackProperty && contextStackProperty.border);
    const debugBorderWidth = isDebugBorderMode ? DEBUG_BORDER_THICKNESS : 0;
    const debugBorderColor = (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.borderColor) || (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.borderColor) ||
        (contextStackProperty && contextStackProperty.borderColor) ||
        DEFAULT_DEFAULT_BORDER_COLORS.stack;
    const debugOpacity = (() => {
        switch (true) {
            case typeof (contextStackProperty === null || contextStackProperty === void 0 ? void 0 : contextStackProperty.opacity) === "number":
                return contextStackProperty === null || contextStackProperty === void 0 ? void 0 : contextStackProperty.opacity;
            case typeof (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.opacity) === "number":
                return _debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.opacity;
            case typeof (debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.opacity) === "number":
                return debugOptions === null || debugOptions === void 0 ? void 0 : debugOptions.opacity;
            default:
                return DEFAULT_OAPCITY;
        }
    })();
    const styles = StyleSheet.create({
        default: { height: size },
        debug: {
            backgroundColor: debugBackgroundCoolor,
            borderWidth: debugBorderWidth,
            borderColor: debugBorderColor,
            opacity: debugOpacity,
            height: size,
        },
    });
    return React.createElement(View, {
        style: isDebugMode ? styles.debug : styles.default,
    });
};
export default Stack;
//# sourceMappingURL=index.js.map