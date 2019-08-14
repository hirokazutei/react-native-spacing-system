import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from "react-native";
import { colors } from "./constants/colors";
import { fontSize } from "./constants/fontSize";
import Button from "./components/atoms/Button";
import Inset from "./components/atoms/Inset";
import Stack from "./components/atoms/Stack";
import MainExample from "./components/templates/MainExample";
import InsetExample from "./components/templates/InsetExample";
import QueueExample from "./components/templates/QueueExample";
import StackExample from "./components/templates/StackExample";

type ExampleKeys = "inset" | "main" | "queue" | "stack";

export type DebugProp = { debug: boolean };

const EXAMPLES: {
  [keys in ExampleKeys]: React.FunctionComponent<DebugProp>;
} = {
  inset: InsetExample,
  main: MainExample,
  queue: QueueExample,
  stack: StackExample
};

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  buttonSeparator: {
    color: colors.primary,
    fontSize: fontSize.large
  },
  debugButtonContainer: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  exampleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

const App = () => {
  // Toggle Debug
  const [debugMode, setDebugMode] = useState(false);
  const toggleDebugMode = () => setDebugMode(!debugMode);
  // Toggle Example
  const [exampleKey, setExample] = useState("main");
  const ShowcasingExamples = EXAMPLES[`${exampleKey}` as ExampleKeys];
  const setExampleMode = (key: ExampleKeys) => () => setExample(key);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.base}>
        <Inset horizontal="macro" vertical="huge" flex={1}>
          <View style={styles.exampleContainer}>
            <Button
              onPress={setExampleMode("main")}
              buttonType="tab"
              label="MAIN"
            />
            <Text style={styles.buttonSeparator}>|</Text>
            <Button
              onPress={setExampleMode("stack")}
              buttonType="tab"
              label="STACK"
            />
            <Text style={styles.buttonSeparator}>|</Text>
            <Button
              onPress={setExampleMode("queue")}
              buttonType="tab"
              label="QUEUE"
            />
            <Text style={styles.buttonSeparator}>|</Text>
            <Button
              onPress={setExampleMode("inset")}
              buttonType="tab"
              label="INSET"
            />
          </View>
          <Stack size="large" />
          <ShowcasingExamples debug={debugMode} />
        </Inset>
        <View style={styles.debugButtonContainer}>
          <Inset horizontal="macro">
            <Button
              onPress={toggleDebugMode}
              buttonType="major"
              label={`DEBUG MODE: ${debugMode ? "ON" : "OFF"}`}
            />
          </Inset>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
