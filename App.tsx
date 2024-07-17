import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MyButton} from './.storybook/stories/Button/Button';
import {AppButtons} from './components/AppButtons';
import {InputField} from './components/InputField';
import {CompetitionList} from './components/CompetitionList';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import QuizProvider from './src/providers/QuizProvider';

// CHANGE HERE
const storyBookApp = 'false';
// CHANGE HERE

function App(): React.JSX.Element {
  const [vals, setVals] = useState('dd');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        <QuizProvider>
          <StackNavigation />
        </QuizProvider>
      </NavigationContainer>
    </View>
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
