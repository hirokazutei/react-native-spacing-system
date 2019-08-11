import * as React from "react";
import { Queue as LibQueue, QueueProps } from "react-native-spacing-system";
import { SpacingKeys, spacing } from "./spacing";

export type Props = Omit<QueueProps, "size"> & { size: SpacingKeys };

const Stack = (props: Props): React.FunctionComponentElement<QueueProps> => {
  const { size, ...debugProps } = props;
  return <LibQueue size={spacing[size]} {...debugProps} />;
};

export default Stack;
