import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SpacingKeys } from "./spacing";
import Inset from "./Inset";

export type Props = {
  label: string;
  onPress: (args: any) => any;
  buttonType: "minor" | "major";
};

type ButtonStyleKeys = "minorButton" | "majorButton";
type TextStyleKeys = "minorText" | "majorText";
const styles = StyleSheet.create({
  minorButton: {
    borderRadius: 4,
    backgroundColor: "#A0A0A0",
    alignSelf: "flex-start"
  },
  minorText: {
    fontSize: 16
  },
  majorButton: {
    borderRadius: 4,
    backgroundColor: "#4864BB",
    alignSelf: "flex-start"
  },
  majorText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});

/**
 * Button just for demonstration purposes.
 */
const Button: React.FC<Props> = (props: Props): React.ReactElement => {
  const { label, onPress, buttonType } = props;
  const insetProps =
    buttonType == "minor"
      ? { all: "small" as SpacingKeys }
      : {
          horizontal: "massive" as SpacingKeys,
          vertical: "large" as SpacingKeys
        };
  return (
    <TouchableOpacity
      style={styles[`${buttonType}Button` as ButtonStyleKeys]}
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
