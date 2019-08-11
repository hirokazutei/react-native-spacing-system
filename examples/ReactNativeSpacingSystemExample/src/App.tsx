import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from "react-native";
import { DebugContext } from "react-native-spacing-system";
import Stack from "./Stack";
import Card from "./Card";

const styles = StyleSheet.create({
  scrollableView: {
    backgroundColor: "#DFDFDF"
  }
});

const App = () => {
  return (
    <DebugContext.Provider value={true}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollableView}
        >
          <Card />
          <Stack size="massive" />
          <Card />
        </ScrollView>
      </SafeAreaView>
    </DebugContext.Provider>
  );
};

export default App;
