import { defaultDebugColor } from "./color";
import { StyleSheet } from "react-native";
export function convertInsetPaddingKeyToValue({ keyedPaddings, spacing }) {
    const rawPaddings = (() => {
        if (keyedPaddings.all) {
            return { all: spacing[keyedPaddings.all] };
        }
        else if (keyedPaddings.vertical &&
            keyedPaddings.horizontal) {
            return {
                vertical: spacing[keyedPaddings.vertical],
                horizontal: spacing[keyedPaddings.horizontal]
            };
        }
        else if (keyedPaddings.vertical) {
            const rightKey = keyedPaddings.right;
            const leftKey = keyedPaddings.left;
            return {
                left: leftKey && spacing[leftKey],
                right: rightKey && spacing[rightKey],
                vertical: spacing[keyedPaddings.vertical]
            };
        }
        else if (keyedPaddings.horizontal) {
            const topKey = keyedPaddings.top;
            const bottomKey = keyedPaddings.bottom;
            return {
                top: topKey && spacing[topKey],
                bottom: bottomKey && spacing[bottomKey],
                horizontal: spacing[keyedPaddings.horizontal]
            };
        }
        else {
            const topKey = keyedPaddings.top;
            const rightKey = keyedPaddings.right;
            const bottomKey = keyedPaddings.bottom;
            const leftKey = keyedPaddings.left;
            return {
                top: topKey && spacing[topKey],
                right: rightKey && spacing[rightKey],
                bottom: bottomKey && spacing[bottomKey],
                left: leftKey && spacing[leftKey]
            };
        }
    })();
    return rawPaddings;
}
export const obtainInsetPaddingStyle = ({ paddings, debugOptions }) => {
    const styles = (() => {
        // Empty object are spread to prevent style keys with undefined values
        if (paddings.all) {
            const padding = paddings.all;
            return { default: { padding }, debug: { borderWidth: padding } };
        }
        else if (paddings.vertical &&
            paddings.horizontal) {
            const paddingVertical = paddings.vertical;
            const paddingHorizontal = paddings.horizontal;
            return {
                default: {
                    paddingVertical,
                    paddingHorizontal
                },
                debug: {
                    borderTopWidth: paddingVertical,
                    borderRightWidth: paddingHorizontal,
                    borderBottomWidth: paddingVertical,
                    borderLeftWidth: paddingHorizontal
                }
            };
        }
        else if (paddings.vertical) {
            const paddingVertical = paddings.vertical;
            const paddingRight = paddings.right;
            const paddingLeft = paddings.left;
            return {
                default: Object.assign({ paddingVertical }, (paddingRight ? { paddingRight } : {}), (paddingLeft ? { paddingLeft } : {})),
                debug: Object.assign({ borderTopWidth: paddingVertical, borderBottomWidth: paddingVertical }, (paddingRight ? { borderRightWidth: paddingRight } : {}), (paddingLeft ? { borderLeftWidth: paddingLeft } : {}))
            };
        }
        else if (paddings.horizontal) {
            const paddingHorizontal = paddings.vertical;
            const paddingTop = paddings.top;
            const paddingBottom = paddings.bottom;
            return {
                default: Object.assign({ paddingHorizontal: paddings.vertical }, (paddingTop ? { paddingTop } : {}), (paddingBottom ? { paddingBottom } : {})),
                debug: Object.assign({ borderRightWidth: paddingHorizontal, borderLeftWidth: paddingHorizontal }, (paddingTop ? { borderToptWidth: paddingTop } : {}), (paddingBottom ? { borderBottomWidth: paddingBottom } : {}))
            };
        }
        else {
            const paddingTop = paddings.top;
            const paddingRight = paddings.right;
            const paddingBottom = paddings.bottom;
            const paddingLeft = paddings.left;
            return {
                default: Object.assign({}, (paddingTop ? { paddingTop } : {}), (paddingRight ? { paddingRight } : {}), (paddingBottom ? { paddingBottom } : {}), (paddingLeft ? { paddingLeft } : {})),
                debug: Object.assign({}, (paddingTop ? { borderToptWidth: paddingTop } : {}), (paddingRight ? { borderRightWidth: paddingRight } : {}), (paddingBottom ? { borderBottomWidth: paddingBottom } : {}), (paddingLeft ? { borderLeftWidth: paddingLeft } : {}))
            };
        }
    })();
    return StyleSheet.create({
        default: styles.default,
        debug: Object.assign({ borderStyle: "solid" }, styles.debug, { borderColor: defaultDebugColor.inset || (debugOptions && debugOptions.color) })
    });
};
//# sourceMappingURL=insetHelper.js.map