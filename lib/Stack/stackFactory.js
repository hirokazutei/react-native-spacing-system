import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { defaultDebugColor, defaultBorderColor } from "../color";
import { DebugContext } from "../context";
export function stackFactory(spacing) {
    const Stack = (props) => {
        const { debug, debugOptions, size } = props;
        const isContextDebugMode = useContext(DebugContext);
        const isDebugMode = debug || isContextDebugMode;
        const styles = StyleSheet.create({
            default: { height: spacing[size] },
            debug: {
                backgroundColor: debugOptions && debugOptions.color
                    ? debugOptions.color
                    : defaultDebugColor.stack,
                borderWidth: debugOptions && (debugOptions.border || debugOptions.borderColor)
                    ? 1
                    : 0,
                borderColor: debugOptions && debugOptions.borderColor
                    ? debugOptions.borderColor
                    : defaultBorderColor.stack
            }
        });
        return React.createElement(View, {
            style: isDebugMode ? styles.debug : styles.default
        });
    };
    return Stack;
}
//# sourceMappingURL=stackFactory.js.map