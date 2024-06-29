import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {MyButton} from './.storybook/stories/Button/Button';
const storyBookApp = 'true';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Hello story book</Text>
      <MyButton
        text="Fas Button"
        onPress={() => console.log('Fas says hello')}
      />
    </SafeAreaView>
  );
}

let AppEntryPoint = App;
// @ts-ignore
if (storyBookApp === 'true') {
  AppEntryPoint = require('./.storybook').default;
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// @ts-ignore
export default AppEntryPoint;
