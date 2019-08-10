"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_native_1 = require("react-native");
var color_1 = require("./color");
var DebugContext = require("./context");
var Stack = function (props) {
    var isContexDebugMode = react_1.useContext(DebugContext);
    var debug = props.debug, debugOptions = props.debugOptions, size = props.size;
    var isDebugMode = debug || isContexDebugMode;
    var debugStyle = react_native_1.StyleSheet.create({
        stack: {
            backgroundColor: debugOptions
                ? debugOptions.color
                : color_1.defaultDebugColor.stack,
            borderWidth: debugOptions && (debugOptions.border || debugOptions.borderColor)
                ? 1
                : 0,
            borderColor: debugOptions && debugOptions.borderColor
                ? debugOptions.borderColor
                : color_1.defaultBorderColor.stack
        }
    });
    return React.createElement(react_native_1.View, {
        style: Object.assign({
            height: size
        }, isDebugMode ? debugStyle.stack : {})
    });
};
exports.default = Stack;
//# sourceMappingURL=Stack.js.map