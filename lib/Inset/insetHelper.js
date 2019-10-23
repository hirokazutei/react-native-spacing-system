import { DEFAULT_DEBUG_COLORS } from "../constants";
import { StyleSheet } from "react-native";
export function convertInsetPaddingKeyToValue({ keyedPaddings, spacing }) {
    // All
    if (keyedPaddings.all) {
        return { all: spacing[keyedPaddings.all] };
        // Vertical & Horizontal
    }
    else if (keyedPaddings.vertical &&
        keyedPaddings.horizontal) {
        return {
            vertical: spacing[keyedPaddings.vertical],
            horizontal: spacing[keyedPaddings.horizontal]
        };
        // Vertical & Right & Left
    }
    else if (keyedPaddings.vertical) {
        const rightKey = keyedPaddings.right;
        const leftKey = keyedPaddings.left;
        return {
            vertical: spacing[keyedPaddings.vertical],
            right: rightKey && spacing[rightKey],
            left: leftKey && spacing[leftKey]
        };
        // Horizontal & Top & Bottom
    }
    else if (keyedPaddings.horizontal) {
        const topKey = keyedPaddings.top;
        const bottomKey = keyedPaddings.bottom;
        return {
            horizontal: spacing[keyedPaddings.horizontal],
            top: topKey && spacing[topKey],
            bottom: bottomKey && spacing[bottomKey]
        };
        // Top & Right & Bottom & Left
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
}
// Empty object are spread to prevent style keys with undefined values
// otherwise, they will show up in storyshot tests.
const mapPaddingsToStyle = (paddings) => {
    // All
    if (paddings.all) {
        const padding = paddings.all;
        return { default: { padding }, debug: { borderWidth: padding } };
        // Vertical & Horizontal
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
        // Vertical & Right & Left
    }
    else if (paddings.vertical) {
        const paddingVertical = paddings.vertical;
        const paddingRight = paddings.right;
        const paddingLeft = paddings.left;
        return {
            default: Object.assign(Object.assign({ paddingVertical }, (paddingRight ? { paddingRight } : {})), (paddingLeft ? { paddingLeft } : {})),
            debug: Object.assign(Object.assign({ borderTopWidth: paddingVertical, borderBottomWidth: paddingVertical }, (paddingRight ? { borderRightWidth: paddingRight } : {})), (paddingLeft ? { borderLeftWidth: paddingLeft } : {}))
        };
        // Horizontal & Top & Bottom
    }
    else if (paddings.horizontal) {
        const paddingHorizontal = paddings.horizontal;
        const paddingTop = paddings.top;
        const paddingBottom = paddings.bottom;
        return {
            default: Object.assign(Object.assign({ paddingHorizontal: paddings.horizontal }, (paddingTop ? { paddingTop } : {})), (paddingBottom ? { paddingBottom } : {})),
            debug: Object.assign(Object.assign({ borderRightWidth: paddingHorizontal, borderLeftWidth: paddingHorizontal }, (paddingTop ? { borderTopWidth: paddingTop } : {})), (paddingBottom ? { borderBottomWidth: paddingBottom } : {}))
        };
        // Top & Right & Bottom & Left
    }
    else {
        const paddingTop = paddings.top;
        const paddingRight = paddings.right;
        const paddingBottom = paddings.bottom;
        const paddingLeft = paddings.left;
        return {
            default: Object.assign(Object.assign(Object.assign(Object.assign({}, (paddingTop ? { paddingTop } : {})), (paddingRight ? { paddingRight } : {})), (paddingBottom ? { paddingBottom } : {})), (paddingLeft ? { paddingLeft } : {})),
            debug: Object.assign(Object.assign(Object.assign(Object.assign({}, (paddingTop ? { borderTopWidth: paddingTop } : {})), (paddingRight ? { borderRightWidth: paddingRight } : {})), (paddingBottom ? { borderBottomWidth: paddingBottom } : {})), (paddingLeft ? { borderLeftWidth: paddingLeft } : {}))
        };
    }
};
export const obtainInsetPaddingStyle = ({ paddings, debugOptions }) => {
    const styles = mapPaddingsToStyle(paddings);
    return StyleSheet.create({
        default: styles.default,
        debug: Object.assign(Object.assign({ borderStyle: "solid" }, styles.debug), { borderColor: DEFAULT_DEBUG_COLORS.inset || (debugOptions && debugOptions.color) })
    });
};
//# sourceMappingURL=insetHelper.js.map