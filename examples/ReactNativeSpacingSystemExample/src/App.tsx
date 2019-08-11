import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text
} from "react-native";
import { DebugContext } from "react-native-spacing-system";
import Inset from "./Inset";
import Card from "./Card";
import Stack from "./Stack";
import Button from "./Button";

const styles = StyleSheet.create({
  scrollableView: {
    backgroundColor: "#FFFFFF"
  }
});

const App = () => {
  const [debugMode, setDebugMode] = useState(false);
  const toggleDebugMode = () => setDebugMode(!debugMode);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollableView}
        >
          <Inset horizontal="macro" vertical="galactic">
            <DebugContext.Provider value={debugMode}>
              <Card />
            </DebugContext.Provider>
            <Stack size="massive" />
            <Button
              onPress={toggleDebugMode}
              buttonType="major"
              label={`Debug Mode: ${debugMode ? "ON" : "OFF"}`}
            />
          </Inset>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
