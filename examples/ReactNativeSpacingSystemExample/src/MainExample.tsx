import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { colors } from "./colors";
import { fontSize } from "./fontSize";
import Button from "./Button";
import Inset from "./Inset";
import Queue from "./Queue";
import Stack from "./Stack";

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.lightGray,
    flexDirection: "column"
  },
  body: {
    color: colors.gray,
    fontWeight: "500",
    fontSize: fontSize.medium
  },
  buttonRow: {
    flexDirection: "row"
  },
  image: {
    height: 240
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray
  },
  title: {
    fontSize: fontSize.xlarge,
    fontWeight: "bold"
  }
});

const MainExample: React.FunctionComponent = (): React.FunctionComponentElement<
  void
> => {
  const dummyFunction = () => {
    /* DUMMY */
  };
  return (
    <View style={styles.base}>
      <Image
        source={{ uri: "https://picsum.photos/400/300" }}
        style={styles.image}
      />
      <Inset all="large">
        <Text style={styles.subtitle}>VIDEO</Text>
        <Stack size="small" />
        <Text style={styles.title}>Supernova</Text>
        <Stack size="large" />
        <Text style={styles.body}>
          An astronomical event that occures during the last stages of a massive
          star's life.
        </Text>
        <Stack size="large" />
        <View style={styles.buttonRow}>
          <View>
            <Button
              label="Galaxies"
              onPress={dummyFunction}
              buttonType="minor"
            />
            <Stack size="small" />
          </View>
          <Queue size="small" />
          <View>
            <Button
              label="Milky Way"
              onPress={dummyFunction}
              buttonType="minor"
            />
            <Stack size="small" />
          </View>
          <Queue size="small" />
        </View>
        <View style={styles.buttonRow}>
          <View>
            <Button
              label="Speed of Light"
              onPress={dummyFunction}
              buttonType="minor"
            />
            <Stack size="small" />
          </View>
          <Queue size="small" />
        </View>
        <Stack size="large" />
        <Button buttonType="major" label="View" onPress={dummyFunction} />
      </Inset>
    </View>
  );
};

export default MainExample;
