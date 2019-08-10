"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_native_1 = require("react-native");
var color_1 = require("./color");
var DebugContext = require("./context");
function Queue() {
    var debug = props.debug, debugOptions = props.debugOptions, size = props.size;
    var isContextDebugMode = react_1.useContext(DebugContext);
    var isDebugMode = debug || isContextDebugMode;
    var debugStyle = react_native_1.StyleSheet.create({
        queue: {
            backgroundColor: debugOptions
                ? debugOptions.Color
                : color_1.defaultDebugColor.queue,
            borderWidth: debugOptions && (debugOptions.border || debugOptions.borderColor)
                ? 1
                : 0,
            borderColor: debugOptions && debugOptions.borderColor
                ? debugOptions.borderColor
                : color_1.defaultBorderColor.queue
        }
    });
    return React.createElement(react_native_1.View, {
        style: Object.assign({
            width: size
        }, isDebugMode ? debugStyle.queue : {})
    });
}
exports.default = Queue;
//# sourceMappingURL=Queue.js.map