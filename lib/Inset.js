"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var color_1 = require("./color");
var DebugContext = require("./context");
function Inset(props) {
    var isContextDebugMode = react_1.useContext(DebugContext);
    var all = props.all, vertical = props.vertical, horizontal = props.horizontal, top = props.top, left = props.left, bottom = props.bottom, right = props.right, flex = props.flex, children = props.children, debug = props.debug, debugOptions = props.debugOptions;
    var isDebugMode = debug || isContextDebugMode;
    var flexStyle = flex ? { flex: flex } : {};
    var padding = all ? { padding: all } : {};
    var paddingBottom = bottom ? { paddingBottom: bottom } : {};
    var paddingHorizontal = horizontal ? { paddingHorizontal: horizontal } : {};
    var paddingLeft = left ? { paddingLeft: left } : {};
    var paddingRight = right ? { paddingRight: right } : {};
    var paddingTop = top ? { paddingTop: top } : {};
    var paddingVertical = vertical ? { paddingVertical: vertical } : {};
    var paddingStyle = __assign({}, padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical);
    var borderTopWidth = (all && { borderTopWidth: all }) ||
        (vertical && { borderTopWidth: vertical }) ||
        (top && { borderTopWidth: top }) ||
        {};
    var borderLeftWidth = (all && { borderLeftWidth: all }) ||
        (horizontal && { borderLeftWidth: horizontal }) ||
        (left && { borderLeftWidth: left }) ||
        {};
    var borderBottomWidth = (all && { borderBottomWidth: all }) ||
        (vertical && { borderBottomWidth: vertical }) ||
        (bottom && { borderBottomWidth: bottom }) ||
        {};
    var borderRightWidth = (all && { borderRightWidth: all }) ||
        (horizontal && { borderRightWidth: horizontal }) ||
        (right && { borderRightWidth: right }) ||
        {};
    var debugStyle = __assign({ borderStyle: "solid" }, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth, { borderColor: color_1.defaultDebugColor.inset || debugOptions.color });
    return React.createElement(View, {
        style: Object.assign(__assign({}, flexStyle), isDebugMode ? __assign({}, debugStyle) : __assign({}, paddingStyle))
    }, children);
}
exports.default = Inset;
//# sourceMappingURL=Inset.js.map