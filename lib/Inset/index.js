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
import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import { obtainInsetPaddingStyle } from "./insetHelper";
import { DEFAULT_DEBUG_COLORS } from "../constants";
const Inset = (_a) => {
    var { layout, children, onLayout, _debug, _debugOptions } = _a, paddings = __rest(_a, ["layout", "children", "onLayout", "_debug", "_debugOptions"]);
    const { debug: isContextDebugMode, inset: contextInsetProperty } = useContext(DebugContext);
    const isDebugMode = __DEV__ && (_debug || isContextDebugMode || (contextInsetProperty === null || contextInsetProperty === void 0 ? void 0 : contextInsetProperty.debug));
    const styles = obtainInsetPaddingStyle({ paddings });
    return React.createElement(View, {
        onLayout,
        style: Object.assign(Object.assign({}, (onLayout ? { onLayout } : {})), (isDebugMode
            ? Object.assign(Object.assign({}, styles.debug), { borderStyle: "solid", borderColor: (_debugOptions === null || _debugOptions === void 0 ? void 0 : _debugOptions.color) || (contextInsetProperty === null || contextInsetProperty === void 0 ? void 0 : contextInsetProperty.color) ||
                    DEFAULT_DEBUG_COLORS.inset }) : Object.assign({}, styles.default))),
    }, children);
};
export default Inset;
//# sourceMappingURL=index.js.map