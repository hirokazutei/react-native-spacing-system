import * as React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { DebugContext } from "../Context";
import {
  convertInsetPaddingKeyToValue,
  obtainInsetPaddingStyle,
} from "./insetHelper";
import { InsetProps } from "./insetTypes";
import { DEFAULT_DEBUG_COLORS } from "../constants";

function insetFactory<
  SpacingKeys,
  DisallowLayout extends boolean | undefined = undefined
>(
  spacing: { [K in keyof SpacingKeys]: number },
  disallowLayout?: DisallowLayout
): React.FunctionComponent<InsetProps<keyof SpacingKeys, DisallowLayout>> {
  const Inset = (props: InsetProps<keyof SpacingKeys, DisallowLayout>) => {
    const { layout, children, _debug, _debugOptions, ...keyedPaddings } = props;

    // Configure Debug Mode
    const {
      debug: isContextDebugMode,
      inset: contextInsetProperty,
    } = useContext(DebugContext);
    const isDebugMode =
      __DEV__ && (_debug || isContextDebugMode || contextInsetProperty?.debug);

    // Get Padding Style
    const rawPaddings = convertInsetPaddingKeyToValue({
      keyedPaddings,
      spacing,
    });
    const styles = obtainInsetPaddingStyle({ paddings: rawPaddings });

    return React.createElement(
      View,
      {
        style: (<any>Object).assign(
          {
            ...(layout && !disallowLayout ? layout : {}),
          },
          isDebugMode
            ? {
                ...styles.debug,
                borderStyle: "solid",
                borderColor:
                  _debugOptions?.color ||
                  contextInsetProperty?.color ||
                  DEFAULT_DEBUG_COLORS.inset,
              }
            : { ...styles.default }
        ),
      },
      children
    );
  };
  return Inset;
}

export default insetFactory;
