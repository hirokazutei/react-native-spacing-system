import {
  All,
  VerHor,
  Horizontal,
  Vertical,
  Other,
  PaddingPossibilities,
  InsetStyles,
} from "./insetTypes";
import { StyleSheet } from "react-native";

export function convertInsetPaddingKeyToValue<T>({
  keyedPaddings,
  spacing,
}: {
  keyedPaddings: PaddingPossibilities<keyof T>;
  spacing: { [K in keyof T]: number };
}): PaddingPossibilities<number> {
  // All
  if ((keyedPaddings as All<keyof T>).all) {
    return { all: spacing[(keyedPaddings as All<keyof T>).all] };

    // Vertical & Horizontal
  } else if (
    (keyedPaddings as VerHor<keyof T>).vertical &&
    (keyedPaddings as VerHor<keyof T>).horizontal
  ) {
    return {
      vertical: spacing[(keyedPaddings as VerHor<keyof T>).vertical],
      horizontal: spacing[(keyedPaddings as VerHor<keyof T>).horizontal],
    };

    // Vertical & Right & Left
  } else if ((keyedPaddings as Vertical<keyof T>).vertical) {
    const rightKey = (keyedPaddings as Vertical<keyof T>).right;
    const leftKey = (keyedPaddings as Vertical<keyof T>).left;
    return {
      vertical: spacing[(keyedPaddings as Vertical<keyof T>).vertical],
      right: rightKey && spacing[rightKey],
      left: leftKey && spacing[leftKey],
    };

    // Horizontal & Top & Bottom
  } else if ((keyedPaddings as Horizontal<keyof T>).horizontal) {
    const topKey = (keyedPaddings as Horizontal<keyof T>).top;
    const bottomKey = (keyedPaddings as Horizontal<keyof T>).bottom;
    return {
      horizontal: spacing[(keyedPaddings as Horizontal<keyof T>).horizontal],
      top: topKey && spacing[topKey],
      bottom: bottomKey && spacing[bottomKey],
    };

    // Top & Right & Bottom & Left
  } else {
    const topKey = (keyedPaddings as Other<keyof T>).top;
    const rightKey = (keyedPaddings as Other<keyof T>).right;
    const bottomKey = (keyedPaddings as Other<keyof T>).bottom;
    const leftKey = (keyedPaddings as Other<keyof T>).left;
    return {
      top: topKey && spacing[topKey],
      right: rightKey && spacing[rightKey],
      bottom: bottomKey && spacing[bottomKey],
      left: leftKey && spacing[leftKey],
    };
  }
}

// Empty object are spread to prevent style keys with undefined values
// otherwise, they will show up in storyshot tests.
const mapPaddingsToStyle = (
  paddings: PaddingPossibilities<number>
): InsetStyles => {
  // All
  if ((paddings as All<number>).all) {
    const padding = (paddings as All<number>).all;
    return { default: { padding }, debug: { borderWidth: padding } };

    // Vertical & Horizontal
  } else if (
    (paddings as VerHor<number>).vertical &&
    (paddings as VerHor<number>).horizontal
  ) {
    const paddingVertical = (paddings as VerHor<number>).vertical;
    const paddingHorizontal = (paddings as VerHor<number>).horizontal;
    return {
      default: {
        paddingVertical,
        paddingHorizontal,
      },
      debug: {
        borderTopWidth: paddingVertical,
        borderRightWidth: paddingHorizontal,
        borderBottomWidth: paddingVertical,
        borderLeftWidth: paddingHorizontal,
      },
    };

    // Vertical & Right & Left
  } else if ((paddings as Vertical<number>).vertical) {
    const paddingVertical = (paddings as Vertical<number>).vertical;
    const paddingRight = (paddings as Vertical<number>).right;
    const paddingLeft = (paddings as Vertical<number>).left;
    return {
      default: {
        paddingVertical,
        ...(paddingRight ? { paddingRight } : {}),
        ...(paddingLeft ? { paddingLeft } : {}),
      },
      debug: {
        borderTopWidth: paddingVertical,
        borderBottomWidth: paddingVertical,
        ...(paddingRight ? { borderRightWidth: paddingRight } : {}),
        ...(paddingLeft ? { borderLeftWidth: paddingLeft } : {}),
      },
    };

    // Horizontal & Top & Bottom
  } else if ((paddings as Horizontal<number>).horizontal) {
    const paddingHorizontal = (paddings as Horizontal<number>).horizontal;
    const paddingTop = (paddings as Horizontal<number>).top;
    const paddingBottom = (paddings as Horizontal<number>).bottom;
    return {
      default: {
        paddingHorizontal: (paddings as Horizontal<number>).horizontal,
        ...(paddingTop ? { paddingTop } : {}),
        ...(paddingBottom ? { paddingBottom } : {}),
      },
      debug: {
        borderRightWidth: paddingHorizontal,
        borderLeftWidth: paddingHorizontal,
        ...(paddingTop ? { borderTopWidth: paddingTop } : {}),
        ...(paddingBottom ? { borderBottomWidth: paddingBottom } : {}),
      },
    };

    // Top & Right & Bottom & Left
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
        ...(paddingLeft ? { paddingLeft } : {}),
      },
      debug: {
        ...(paddingTop ? { borderTopWidth: paddingTop } : {}),
        ...(paddingRight ? { borderRightWidth: paddingRight } : {}),
        ...(paddingBottom ? { borderBottomWidth: paddingBottom } : {}),
        ...(paddingLeft ? { borderLeftWidth: paddingLeft } : {}),
      },
    };
  }
};

export const obtainInsetPaddingStyle = ({
  paddings,
}: {
  paddings: PaddingPossibilities<number>;
}): InsetStyles => {
  const styles: InsetStyles = mapPaddingsToStyle(paddings);
  return StyleSheet.create<InsetStyles>({
    default: styles.default,
    debug: styles.debug,
  });
};
