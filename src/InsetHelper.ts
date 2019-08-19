import { defaultDebugColor } from "./color";
import {
  InsetDebugOptions,
  All,
  VerHor,
  Horizontal,
  Vertical,
  Other,
  PaddingPossibilities,
  InsetStyles
} from "./insetTypes";
import { StyleSheet, ViewStyle } from "react-native";

export function convertInsetPaddingKeyToValue<T>({
  keyedPaddings,
  spacing
}: {
  keyedPaddings: PaddingPossibilities<keyof T>;
  spacing: { [K in keyof T]: number };
}): PaddingPossibilities<number> {
  const rawPaddings = (() => {
    if ((keyedPaddings as All<keyof T>).all) {
      return { all: spacing[(keyedPaddings as All<keyof T>).all] };
    } else if (
      (keyedPaddings as VerHor<keyof T>).vertical &&
      (keyedPaddings as VerHor<keyof T>).horizontal
    ) {
      return {
        vertical: spacing[(keyedPaddings as VerHor<keyof T>).vertical],
        horizontal: spacing[(keyedPaddings as VerHor<keyof T>).horizontal]
      };
    } else if ((keyedPaddings as Vertical<keyof T>).vertical) {
      const rightKey = (keyedPaddings as Vertical<keyof T>).right;
      const leftKey = (keyedPaddings as Vertical<keyof T>).left;
      return {
        left: leftKey && spacing[leftKey],
        right: rightKey && spacing[rightKey],
        vertical: spacing[(keyedPaddings as Vertical<keyof T>).vertical]
      };
    } else if ((keyedPaddings as Horizontal<keyof T>).horizontal) {
      const topKey = (keyedPaddings as Horizontal<keyof T>).top;
      const bottomKey = (keyedPaddings as Horizontal<keyof T>).bottom;
      return {
        top: topKey && spacing[topKey],
        bottom: bottomKey && spacing[bottomKey],
        horizontal: spacing[(keyedPaddings as Horizontal<keyof T>).horizontal]
      };
    } else {
      const topKey = (keyedPaddings as Other<keyof T>).top;
      const rightKey = (keyedPaddings as Other<keyof T>).right;
      const bottomKey = (keyedPaddings as Other<keyof T>).bottom;
      const leftKey = (keyedPaddings as Other<keyof T>).left;
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

export const obtainInsetPaddingStyle = ({
  paddings,
  debugOptions
}: {
  paddings: PaddingPossibilities<number>;
  debugOptions?: InsetDebugOptions;
}): InsetStyles => {
  const styles: InsetStyles = (() => {
    // Empty object are spread to prevent style keys with undefined values
    if ((paddings as All<number>).all) {
      const padding = (paddings as All<number>).all;
      return { default: { padding }, debug: { borderWidth: padding } };
    } else if (
      (paddings as VerHor<number>).vertical &&
      (paddings as VerHor<number>).horizontal
    ) {
      const paddingVertical = (paddings as VerHor<number>).vertical;
      const paddingHorizontal = (paddings as VerHor<number>).horizontal;
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
    } else if ((paddings as Vertical<number>).vertical) {
      const paddingVertical = (paddings as Vertical<number>).vertical;
      const paddingRight = (paddings as Vertical<number>).right;
      const paddingLeft = (paddings as Vertical<number>).left;
      return {
        default: {
          paddingVertical,
          ...(paddingRight ? { paddingRight } : {}),
          ...(paddingLeft ? { paddingLeft } : {})
        },
        debug: {
          borderTopWidth: paddingVertical,
          borderBottomWidth: paddingVertical,
          ...(paddingRight ? { borderRightWidth: paddingRight } : {}),
          ...(paddingLeft ? { borderLeftWidth: paddingLeft } : {})
        }
      };
    } else if ((paddings as Horizontal<number>).horizontal) {
      const paddingHorizontal = (paddings as Horizontal<number>).vertical;
      const paddingTop = (paddings as Horizontal<number>).top;
      const paddingBottom = (paddings as Horizontal<number>).bottom;
      return {
        default: {
          paddingHorizontal: (paddings as Horizontal<number>).vertical,
          ...(paddingTop ? { paddingTop } : {}),
          ...(paddingBottom ? { paddingBottom } : {})
        },
        debug: {
          borderRightWidth: paddingHorizontal,
          borderLeftWidth: paddingHorizontal,
          ...(paddingTop ? { borderToptWidth: paddingTop } : {}),
          ...(paddingBottom ? { borderBottomWidth: paddingBottom } : {})
        }
      };
    } else {
      const paddingTop = (paddings as Other<number>).top;
      const paddingRight = (paddings as Other<number>).right;
      const paddingBottom = (paddings as Other<number>).bottom;
      const paddingLeft = (paddings as Other<number>).left;
      return {
        default: {
          ...(paddingTop ? { paddingTop } : {}),
          ...(paddingRight ? { paddingRight } : {}),
          ...(paddingBottom ? { paddingBottom } : {}),
          ...(paddingLeft ? { paddingLeft } : {})
        },
        debug: {
          ...(paddingTop ? { borderToptWidth: paddingTop } : {}),
          ...(paddingRight ? { borderRightWidth: paddingRight } : {}),
          ...(paddingBottom ? { borderBottomWidth: paddingBottom } : {}),
          ...(paddingLeft ? { borderLeftWidth: paddingLeft } : {})
        }
      };
    }
  })();
  return StyleSheet.create<InsetStyles>({
    default: styles.default,
    debug: {
      borderStyle: "solid",
      ...styles.debug,
      borderColor:
        defaultDebugColor.inset || (debugOptions && debugOptions.color)
    }
  });
};
