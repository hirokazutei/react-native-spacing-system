import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { SpacingKeys } from "./spacing";
import Inset from "./Inset";

export type Props = {
  buttonType: "major" | "minor" | "tab";
  color?: string;
  label: string;
  onPress: (args: any) => any;
};

type ButtonStyleKeys = "majorButton" | "minorButton" | "tabButton";
type TextStyleKeys = "majorText" | "minorText" | "tabText";
const styles = StyleSheet.create({
  minorButton: {
    borderRadius: 4,
    backgroundColor: colors.minorButton,
    alignSelf: "flex-start"
  },
  minorText: {
    fontSize: fontSize.medium
  },
  majorButton: {
    borderRadius: 4,
    backgroundColor: colors.primary,
    alignSelf: "flex-start"
  },
  majorText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: "bold"
  },
  tabButton: {
    alignSelf: "flex-start"
  },
  tabText: {
    color: colors.primary,
    fontSize: fontSize.large,
    fontWeight: "bold"
  }
});

/**
 * Button just for demonstration purposes.
 */
const Button: React.FC<Props> = (props: Props): React.ReactElement => {
  const { color, label, onPress, buttonType } = props;
  const insetProps =
    buttonType !== "minor"
      ? {
          horizontal: "massive" as SpacingKeys,
          vertical: "large" as SpacingKeys
        }
      : { all: "small" as SpacingKeys };
  return (
    <TouchableOpacity
      style={[
        styles[`${buttonType}Button` as ButtonStyleKeys],
        color ? { backgroundColor: color } : {}
      ]}
      onPress={onPress}
    >
      <Inset {...insetProps}>
        <Text style={styles[`${buttonType}Text` as TextStyleKeys]}>
          {label}
        </Text>
      </Inset>
    </TouchableOpacity>
  );
};

export default Button;
