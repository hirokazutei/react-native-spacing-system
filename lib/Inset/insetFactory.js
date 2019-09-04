var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import { convertInsetPaddingKeyToValue, obtainInsetPaddingStyle } from "./insetHelper";
function insetFactory(spacing) {
    const Inset = (props) => {
        const { flex, children, debug, debugOptions } = props, keyedPaddings = __rest(props, ["flex", "children", "debug", "debugOptions"]);
        // Configure Debug Mode
        const { debug: isContextDebugMode, inset } = useContext(DebugContext);
        const isDebugMode = debug || isContextDebugMode || (inset && inset.debug);
        // Flex
        const flexStyle = flex ? { flex } : {};
        // Get Padding Style
        const rawPaddings = convertInsetPaddingKeyToValue({
            keyedPaddings,
            spacing
        });
        const styles = obtainInsetPaddingStyle({
            paddings: rawPaddings,
            debugOptions
        });
        return React.createElement(View, {
            style: Object.assign(Object.assign({}, flexStyle), isDebugMode ? Object.assign({}, styles.debug) : Object.assign({}, styles.default))
        }, children);
    };
    return Inset;
}
export default insetFactory;
//# sourceMappingURL=insetFactory.js.map