import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { fontSize } from "../../constants/fontSize";
import { spacingKeysList } from "../../constants/spacing";
import Button from "../atoms/Button";
import Inset from "../atoms/Inset";

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.insetTheme,
    flex: 1
  },
  base: {
    flex: 1,
    justifyContent: "space-between"
  },
  elevator: {
    flex: 1
  },
  image: { flex: 1 },
  personalSpaceSizeSelection: {
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    color: colors.insetTheme,
    fontSize: fontSize.xlarge,
    fontWeight: "bold"
  }
});

const InsetExample: React.FunctionComponent = (): React.FunctionComponentElement<
  void
> => {
  const [sizeIndex, setSize] = useState(0);
  const changeSize = () =>
    setSize(sizeIndex >= spacingKeysList.length - 1 ? 0 : sizeIndex + 1);
  const spaceSize = spacingKeysList[sizeIndex];
  return (
    <View style={styles.base}>
      <View style={styles.elevator}>
        <Text style={styles.title}>{`${spaceSize.toUpperCase()}`}</Text>
        <Text style={styles.title}>PICTURE FRAME</Text>
        <Inset vertical="huge" flex={1}>
          <View style={styles.background}>
            <Inset all={spaceSize} flex={1}>
              <Image
                source={{ uri: "https://picsum.photos/400/800" }}
                style={styles.image}
              />
            </Inset>
          </View>
        </Inset>
      </View>
      <View style={styles.personalSpaceSizeSelection}>
        <Button
          color={colors.insetTheme}
          onPress={changeSize}
          buttonType="major"
          label="TICKER FRAME"
        />
      </View>
    </View>
  );
};

export default InsetExample;