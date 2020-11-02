/* @flow */
import React, {useState, type StatelessFunctionalComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {type DebugContextProps} from 'react-native-spacing-system';
import {colors} from './constants/colors';
import {fontSize} from './constants/fontSize';
import Button from './components/atoms/Button';
import Inset from './components/atoms/Inset';
import Stack from './components/atoms/Stack';
import MainExample from './components/templates/MainExample';
import InsetExample from './components/templates/InsetExample';
import QueueExample from './components/templates/QueueExample';
import StackExample from './components/templates/StackExample';

type ExampleKeys = 'inset' | 'main' | 'queue' | 'stack';

export type DebugProps = DebugContextProps;

const EXAMPLES: {
  [keys: ExampleKeys]: StatelessFunctionalComponent<DebugProps>,
} = {
  inset: InsetExample,
  main: MainExample,
  queue: QueueExample,
  stack: StackExample,
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
  buttonSeparator: {
    color: colors.primary,
    fontSize: fontSize.large,
  },
  debugButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  debugButtonContainer: {
    flexDirection: 'row',
  },
  exampleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const App = () => {
  // Toggle Debug
  const [debugProps, setDebugMode] = useState<DebugContextProps>({
    debug: false,
    stack: {border: false},
    queue: {border: false},
  });
  const toggleDebugMode = () =>
    setDebugMode({...debugProps, debug: !debugProps.debug});
  const toggleDebugBorder = () =>
    setDebugMode({
      ...debugProps,
      stack: {border: !debugProps.stack?.border},
      queue: {border: !debugProps.queue?.border},
    });
  // Toggle Example
  const [exampleKey, setExample] = useState('main');
  const ShowcasingExamples = EXAMPLES[exampleKey];
  const setExampleMode = (key: ExampleKeys) => () => setExample(key);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.base}>
        <ScrollView style={styles.base}>
          <Inset horizontal="small" vertical="small" layout={{flex: 1}}>
            <View style={styles.exampleContainer}>
              <Button
                onPress={setExampleMode('main')}
                buttonType="tab"
                label="MAIN"
              />
              <Text style={styles.buttonSeparator}>|</Text>
              <Button
                onPress={setExampleMode('stack')}
                buttonType="tab"
                label="STACK"
              />
              <Text style={styles.buttonSeparator}>|</Text>
              <Button
                onPress={setExampleMode('queue')}
                buttonType="tab"
                label="QUEUE"
              />
              <Text style={styles.buttonSeparator}>|</Text>
              <Button
                onPress={setExampleMode('inset')}
                buttonType="tab"
                label="INSET"
              />
            </View>
            <Stack size="large" />
            <ShowcasingExamples {...debugProps} />
          </Inset>
          <Inset horizontal="small">
            <View style={styles.debugButtonContainer}>
              <View style={styles.debugButton}>
                <Button
                  onPress={toggleDebugMode}
                  buttonType="major"
                  label={`DEBUG: ${debugProps.debug ? 'ON' : 'OFF'}`}
                />
              </View>
              <View style={styles.debugButton}>
                <Button
                  onPress={toggleDebugBorder}
                  buttonType="major"
                  label={`BORDER: ${debugProps?.stack?.border ? 'ON' : 'OFF'}`}
                />
              </View>
            </View>
          </Inset>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
