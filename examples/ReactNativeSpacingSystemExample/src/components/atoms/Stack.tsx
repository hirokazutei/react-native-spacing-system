import * as React from "react";
import { Stack as LibStack, StackProps } from "react-native-spacing-system";
import { SpacingKeys, spacing } from "../../constants/spacing";

export type Props = Omit<StackProps, "size"> & { size: SpacingKeys };

const Stack = (props: Props): React.FunctionComponentElement<StackProps> => {
  const { size, ...debugProps } = props;
  return <LibStack size={spacing[size]} {...debugProps} />;
};

export default Stack;
