import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Stack from "./Stack";
import Queue from "./Queue";
import Inset from "./Inset";
import Button from "./Button";

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#EAEAEA"
  },
  body: {
    color: "#828282",
    fontWeight: "500",
    fontSize: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#828282"
  },
  buttonRow: {
    flexDirection: "row"
  }
});

const Card = () => {
  const dummyFunction = () => {
    /* DUMMY */
  };
  return (
    <View style={styles.base}>
      <Image
        source={{ uri: "https://picsum.photos/400/300" }}
        style={{ height: 240 }}
      />
      <Inset all="large">
        <Text style={styles.subtitle}>VIDEO</Text>
        <Stack size="small" />
        <Text style={styles.title}>Supernova</Text>
        <Stack size="large" />
        <Text style={styles.body}>
          {`An astronomical event that occures
          during the last stages of a massive
          star's life.`}
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

export default Card;
