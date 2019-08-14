import * as React from "react";
import { Inset as LibInset, InsetProps } from "react-native-spacing-system";
import { SpacingKeys, spacing } from "../../constants/spacing";

export type Props = Omit<InsetProps, "paddings"> & {
  all?: SpacingKeys;
  vertical?: SpacingKeys;
  horizontal?: SpacingKeys;
  top?: SpacingKeys;
  right?: SpacingKeys;
  bottom?: SpacingKeys;
  left?: SpacingKeys;
};

const Inset = (props: Props): React.FunctionComponentElement<InsetProps> => {
  const { flex, children, debug, debugOptions, ...paddings } = props;
  const all = paddings.all ? { all: spacing[paddings.all] } : {};
  const bottom = paddings.bottom ? { bottom: spacing[paddings.bottom] } : {};
  const horizontal = paddings.horizontal
    ? { horizontal: spacing[paddings.horizontal] }
    : {};
  const left = paddings.left ? { left: spacing[paddings.left] } : {};
  const right = paddings.right ? { right: spacing[paddings.right] } : {};
  const top = paddings.top ? { top: spacing[paddings.top] } : {};
  const vertical = paddings.vertical
    ? { vertical: spacing[paddings.vertical] }
    : {};
  const insetPaddings = {
    ...all,
    ...bottom,
    ...horizontal,
    ...left,
    ...right,
    ...top,
    ...vertical
  };
  return (
    <LibInset
      flex={flex}
      paddings={insetPaddings}
      debug={debug}
      debugOptions={debugOptions}
    >
      {children}
    </LibInset>
  );
};

export default Inset;
