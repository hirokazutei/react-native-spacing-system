import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { DebugContext } from "../../../../src";
import { DebugProp as Prop } from "../../App";
import { colors } from "../../constants/colors";
import { fontSize } from "../../constants/fontSize";
import Button from "../atoms/Button";
import Inset from "../atoms/Inset";
import Queue from "../atoms/Queue";
import Stack from "../atoms/Stack";

const SAMPLE_IMAGE_LINK = "https://picsum.photos/400/300";

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.lightGray,
    flexDirection: "column",
  },
  body: {
    color: colors.gray,
    fontWeight: "500",
    fontSize: fontSize.medium,
  },
  buttonRow: {
    flexDirection: "row",
  },
  image: {
    height: 240,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray,
  },
  title: {
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
  },
});

const MainExample = (prop: Prop) => {
  const dummyFunction = () => {
    /* DUMMY */
  };
  return (
    <DebugContext.Provider value={prop}>
      <View style={styles.base}>
        <Image source={{ uri: SAMPLE_IMAGE_LINK }} style={styles.image} />
        <Inset all="large">
          <Text style={styles.subtitle}>VIDEO</Text>
          <Stack size="small" />
          <Text style={styles.title}>Supernova</Text>
          <Stack size="large" />
          <Text style={styles.body}>
            An astronomical event that occures during the last stages of a
            massive star's life.
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
          <Button
            label="Speed of Light"
            onPress={dummyFunction}
            buttonType="minor"
          />
          <Stack size="large" />
          <Button buttonType="major" label="View" onPress={dummyFunction} />
        </Inset>
      </View>
    </DebugContext.Provider>
  );
};

export default MainExample;
