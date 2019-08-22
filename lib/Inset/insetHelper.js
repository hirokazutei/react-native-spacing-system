import { defaultDebugColor } from "../color";
import { StyleSheet } from "react-native";
export function convertInsetPaddingKeyToValue({
  keyedPaddings,
  spacing,
  debugOptions
}) {
  const all = keyedPaddings.all ? {
    default: {
      padding: spacing[keyedPaddings.all]
    },
    debug: {
      borderWidth: spacing[keyedPaddings.all]
    }
  } : {};
  const horizontal = keyedPaddings.horizontal ? {
    default: {
      paddingHorizontal: spacing[keyedPaddings.horizontal]
    },
    debug: {
      borderRightWidth: spacing[keyedPaddings.horizontal],
      borderLeftWidth: spacing[keyedPaddings.horizontal]
    }
  } : {};
  const vertical = keyedPaddings.vertical ? {
    default: {
      paddingVertical: spacing[keyedPaddings.vertical]
    },
    debug: {
      borderTopWidth: spacing[keyedPaddings.vertical],
      borderBottomWidth: spacing[keyedPaddings.vertical]
    }
  } : {};
  const top = keyedPaddings.top ? {
    default: {
      paddingTop: spacing[keyedPaddings.top]
    },
    debug: {
      borderTopWidth: spacing[keyedPaddings.top]
    }
  } : {};
  const right = keyedPaddings.right ? {
    default: {
      paddingRight: spacing[keyedPaddings.right]
    },
    debug: {
      borderRightWidth: spacing[keyedPaddings.right]
    }
  } : {};
  const bottom = keyedPaddings.bottom ? {
    default: {
      paddingBottom: spacing[keyedPaddings.bottom]
    },
    debug: {
      borderBottomWidth: spacing[keyedPaddings.bottom]
    }
  } : {};
  const left = keyedPaddings.left ? {
    default: {
      paddingLeft: spacing[keyedPaddings.left]
    },
    debug: {
      borderLeftWidth: spacing[keyedPaddings.left]
    }
  } : {};
  return StyleSheet.create({
    debug: { ...all.debug,
      ...vertical.debug,
      ...horizontal.debug,
      ...left.debug,
      ...right.debug,
      ...top.debug,
      ...bottom.debug
    },
    default: {
      borderStyle: "solid",
      borderColor: defaultDebugColor.inset || debugOptions && debugOptions.color,
      ...all.default,
      ...vertical.default,
      ...horizontal.default,
      ...left.default,
      ...right.default,
      ...top.default,
      ...bottom.default
    }
  });
}
export const obtainInsetPaddingStyle = ({
  paddings,
  debugOptions
}) => {
  // Empty object are spread to prevent style keys with undefined values
  const all = paddings.all ? {
    default: {
      padding: paddings.all
    },
    debug: {
      borderWidth: paddings.all
    }
  } : {};
  const horizontal = paddings.horizontal ? {
    default: {
      paddingHorizontal: paddings.horizontal
    },
    debug: {
      borderRightWidth: paddings.horizontal,
      borderLeftWidth: paddings.horizontal
    }
  } : {};
  const vertical = paddings.vertical ? {
    default: {
      paddingVertical: paddings.vertical
    },
    debug: {
      borderTopWidth: paddings.vertical,
      borderBottomWidth: paddings.vertical
    }
  } : {};
  const top = paddings.top ? {
    default: {
      paddingTop: paddings.top
    },
    debug: {
      borderTopWidth: paddings.top
    }
  } : {};
  const right = paddings.right ? {
    default: {
      paddingRight: paddings.right
    },
    debug: {
      borderRightWidth: paddings.right
    }
  } : {};
  const bottom = paddings.bottom ? {
    default: {
      paddingBottom: paddings.bottom
    },
    debug: {
      borderBottomWidth: paddings.bottom
    }
  } : {};
  const left = paddings.left ? {
    default: {
      paddingLeft: paddings.left
    },
    debug: {
      borderLeftWidth: paddings.left
    }
  } : {};
  return StyleSheet.create({
    default: { ...all.default,
      ...horizontal.default,
      ...vertical.default,
      ...top.default,
      ...right.default,
      ...bottom.default,
      ...left.default
    },
    debug: {
      borderStyle: "solid",
      borderColor: defaultDebugColor.inset || debugOptions && debugOptions.color,
      ...all.debug,
      ...horizontal.debug,
      ...vertical.debug,
      ...bottom.debug,
      ...top.debug,
      ...right.debug,
      ...left.debug
    }
  });
};