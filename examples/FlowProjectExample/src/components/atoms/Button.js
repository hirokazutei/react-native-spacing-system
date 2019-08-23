/* @flow */
import React, {type Node, type StatelessFunctionalComponent} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors} from '../../constants/colors';
import {fontSize} from '../../constants/fontSize';
import {type SpacingKeys} from '../../constants/spacing';
import Inset from './Inset';

export type Props = {
  buttonType: 'major' | 'minor' | 'tab',
  color?: string,
  label: string,
  onPress: (args: any) => any,
};

type ButtonStyleKeys = 'majorButton' | 'minorButton' | 'tabButton';
type TextStyleKeys = 'majorText' | 'minorText' | 'tabText';
const styles = StyleSheet.create({
  minorButton: {
    borderRadius: 4,
    backgroundColor: colors.minorButton,
    alignSelf: 'flex-start',
  },
  minorText: {
    fontSize: fontSize.medium,
  },
  majorButton: {
    borderRadius: 4,
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
  },
  majorText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  tabButton: {
    alignSelf: 'flex-start',
  },
  tabText: {
    color: colors.primary,
    fontSize: fontSize.large,
    fontWeight: 'bold',
  },
});

/**
 * Button just for demonstration purposes.
 */
const Button: StatelessFunctionalComponent<Props> = (props: Props): Node => {
  const {color, label, onPress, buttonType} = props;
  const minorButton = (
    <Inset all="small">
      <Text style={styles.minorText}>{label}</Text>
    </Inset>
  );
  const majorButton = (
    <Inset horizontal="massive" vertical="large">
      <Text style={styles[`${buttonType}Text`]}>{label}</Text>
    </Inset>
  );
  return (
    <TouchableOpacity
      style={[
        styles[`${buttonType}Button`],
        color ? {backgroundColor: color} : {},
      ]}
      onPress={onPress}>
      {buttonType !== 'minor' ? majorButton : minorButton}
    </TouchableOpacity>
  );
};

export default Button;
