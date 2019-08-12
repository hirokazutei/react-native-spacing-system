import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Text, View } from "react-native";
import { DebugContext } from "react-native-spacing-system";
import { colors } from "./colors";
import { fontSize } from "./fontSize";
import Button from "./Button";
import Inset from "./Inset";
import Stack from "./Stack";
import MainExample from "./MainExample";
import InsetExample from "./InsetExample";
import QueueExample from "./QueueExample";
import StackExample from "./StackExample";

type ExampleKeys = "inset" | "main" | "queue" | "stack";

const EXAMPLES: {
  [keys in ExampleKeys]: React.FunctionComponent;
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
          <DebugContext.Provider value={debugMode}>
            <ShowcasingExamples />
          </DebugContext.Provider>
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
