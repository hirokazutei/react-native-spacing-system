import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { DebugContext } from "react-native-spacing-system";
import { DebugProp as Prop } from "../../App";
import { colors } from "../../constants/colors";
import { fontSize } from "../../constants/fontSize";
import { spacingKeysList, spacing } from "../../constants/spacing";
import Button from "../atoms/Button";
import Inset from "../atoms/Inset";
import Queue from "../atoms/Queue";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "space-between",
  },
  lineForBubbletea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  people: {
    textAlign: "center",
    color: colors.white,
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
    width: spacing.huge,
  },
  person: {
    flexDirection: "row",
  },
  queueArea: {
    flex: 1,
  },
  queueSizeSelection: {
    flexDirection: "row",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: colors.queueTheme,
  },
  title: {
    textAlign: "center",
    color: colors.queueTheme,
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
  },
});

const QueueExample: React.FunctionComponent<Prop> = (
  prop: Prop
): React.FunctionComponentElement<Prop> => {
  const [sizeIndex, setSize] = useState(0);
  const changeSize = () =>
    setSize(sizeIndex >= spacingKeysList.length - 1 ? 0 : sizeIndex + 1);
  const spaceSize = spacingKeysList[sizeIndex];
  return (
    <View style={styles.base}>
      <View style={styles.queueArea}>
        <Text style={styles.title}>{`${spaceSize.toUpperCase()}`}</Text>
        <Text style={styles.title}>LINE FOR BUBBLETEA</Text>
        <Inset vertical="huge" layout={{ flex: 1 }}>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <Inset vertical="huge" horizontal="large" layout={{ flex: 1 }}>
              <DebugContext.Provider value={prop}>
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
              </DebugContext.Provider>
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
