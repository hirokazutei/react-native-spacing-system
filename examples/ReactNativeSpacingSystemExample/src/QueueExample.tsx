import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { colors } from "./colors";
import { fontSize } from "./fontSize";
import { spacingKeysList, spacing } from "./spacing";
import Button from "./Button";
import Inset from "./Inset";
import Queue from "./Queue";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "space-between"
  },
  lineForBubbletea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  people: {
    textAlign: "center",
    color: colors.white,
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
    width: spacing.huge
  },
  person: {
    flexDirection: "row"
  },
  queueArea: {
    flex: 1
  },
  queueSizeSelection: {
    flexDirection: "row",
    justifyContent: "center"
  },
  scrollView: {
    backgroundColor: colors.queueTheme
  },
  title: {
    textAlign: "center",
    color: colors.queueTheme,
    fontSize: fontSize.xlarge,
    fontWeight: "bold"
  }
});

const QueueExample: React.FunctionComponent = (): React.FunctionComponentElement<
  void
> => {
  const [sizeIndex, setSize] = useState(0);
  const changeSize = () =>
    setSize(sizeIndex >= spacingKeysList.length - 1 ? 0 : sizeIndex + 1);
  const spaceSize = spacingKeysList[sizeIndex];
  return (
    <View style={styles.base}>
      <View style={styles.queueArea}>
        <Text style={styles.title}>{`${spaceSize.toUpperCase()}`}</Text>
        <Text style={styles.title}>LINE FOR BUBBLETEA</Text>
        <Inset vertical="huge" flex={1}>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <Inset vertical="huge" horizontal="large" flex={1}>
              <View style={styles.lineForBubbletea}>
                {[...Array(20)].map((e, i) => {
                  return (
                    <View key={i} style={styles.person}>
                      <Text style={styles.people}>PERSON</Text>
                      <Queue size={spaceSize} />
                    </View>
                  );
                })}
              </View>
            </Inset>
          </ScrollView>
        </Inset>
      </View>
      <View style={styles.queueSizeSelection}>
        <Button
          color={colors.queueTheme}
          onPress={changeSize}
          buttonType="major"
          label="LONGER LINES"
        />
      </View>
    </View>
  );
};

export default QueueExample;
