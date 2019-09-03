import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { DebugContext } from "react-native-spacing-system";
import { DebugProp as Prop } from "../../App";
import { spacingKeysList } from "../../constants/spacing";
import Button from "../atoms/Button";
import Inset from "../atoms/Inset";
import Stack from "../atoms/Stack";
import { colors } from "../../constants/colors";
import { fontSize } from "../../constants/fontSize";

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  buffetTable: {
    flex: 1
  },
  plateSelection: {
    flexDirection: "row",
    justifyContent: "center"
  },
  plates: {
    textAlign: "center",
    color: colors.white,
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
    letterSpacing: 4
  },
  scrollView: {
    backgroundColor: colors.stackTheme
  },
  title: {
    textAlign: "center",
    color: colors.stackTheme,
    fontSize: fontSize.xlarge,
    fontWeight: "bold"
  }
});

const StackExample: React.FunctionComponent<Prop> = (
  prop: Prop
): React.FunctionComponentElement<Prop> => {
  const [size, setSize] = useState(0);
  const changeSize = () =>
    setSize(size >= spacingKeysList.length - 1 ? 0 : size + 1);
  const spaceSize = spacingKeysList[size];
  return (
    <View style={styles.base}>
      <View style={styles.buffetTable}>
        <Text style={styles.title}>{`${spaceSize.toUpperCase()}`}</Text>
        <Text style={styles.title}>STACK OF PLATES</Text>
        <Inset vertical="huge" flex={1}>
          <ScrollView style={styles.scrollView}>
            <Inset vertical="huge">
              <DebugContext.Provider value={prop}>
                {[...Array(20)].map((e, i) => {
                  return (
                    <View key={i}>
                      <Text style={styles.plates}>BUFFET PLATE</Text>
                      <Stack size={spaceSize} />
                    </View>
                  );
                })}
              </DebugContext.Provider>
            </Inset>
          </ScrollView>
        </Inset>
      </View>
      <View style={styles.plateSelection}>
        <Button
          color={colors.stackTheme}
          onPress={changeSize}
          buttonType="major"
          label="TALLER PLATES"
        />
      </View>
    </View>
  );
};

export default StackExample;
