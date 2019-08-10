import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { defaultDebugColor } from "./color";
import { DebugContext } from "./context";
const obtainPaddingStyle = ({ paddings, debugOptions }) => {
    let all, vertical, horizontal, top, left, bottom, right;
    if (paddings.all) {
        all = paddings.all;
    }
    else if (paddings.vertical && paddings.horizontal) {
        vertical = paddings.vertical;
        horizontal = paddings.horizontal;
    }
    else if (paddings.vertical) {
        vertical = paddings.vertical;
        right = paddings.right;
        left = paddings.left;
    }
    else if (paddings.horizontal) {
        horizontal = paddings.horizontal;
        top = paddings.top;
        bottom = paddings.bottom;
    }
    else {
        right = paddings.right;
        left = paddings.left;
        top = paddings.top;
        bottom = paddings.bottom;
    }
    const padding = all ? { padding: all } : {};
    const paddingBottom = bottom ? { paddingBottom: bottom } : {};
    const paddingHorizontal = horizontal ? { paddingHorizontal: horizontal } : {};
    const paddingLeft = left ? { paddingLeft: left } : {};
    const paddingRight = right ? { paddingRight: right } : {};
    const paddingTop = top ? { paddingTop: top } : {};
    const paddingVertical = vertical ? { paddingVertical: vertical } : {};
    const paddingStyle = Object.assign({}, padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical);
    const borderTopWidth = (all && { borderTopWidth: all }) ||
        (vertical && { borderTopWidth: vertical }) ||
        (top && { borderTopWidth: top }) ||
        {};
    const borderLeftWidth = (all && { borderLeftWidth: all }) ||
        (horizontal && { borderLeftWidth: horizontal }) ||
        (left && { borderLeftWidth: left }) ||
        {};
    const borderBottomWidth = (all && { borderBottomWidth: all }) ||
        (vertical && { borderBottomWidth: vertical }) ||
        (bottom && { borderBottomWidth: bottom }) ||
        {};
    const borderRightWidth = (all && { borderRightWidth: all }) ||
        (horizontal && { borderRightWidth: horizontal }) ||
        (right && { borderRightWidth: right }) ||
        {};
    const debugStyle = Object.assign({ borderStyle: "solid" }, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth, { borderColor: defaultDebugColor.inset || (debugOptions && debugOptions.color) });
    return { paddingStyle, debugStyle };
};
export const Inset = (props) => {
    const isContextDebugMode = useContext(DebugContext);
    const { flex, children, debug, debugOptions, paddings } = props;
    const { paddingStyle, debugStyle } = obtainPaddingStyle({
        paddings,
        debugOptions
    });
    const isDebugMode = debug || isContextDebugMode;
    const flexStyle = flex ? { flex } : {};
    return React.createElement(View, {
        style: Object.assign(Object.assign({}, flexStyle), isDebugMode ? Object.assign({}, debugStyle) : Object.assign({}, paddingStyle))
    }, children);
};
//# sourceMappingURL=Inset.js.map