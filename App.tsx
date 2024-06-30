import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MyButton} from './.storybook/stories/Button/Button';
import {AppButtons} from './components/AppButtons';
import {InputField} from './components/InputField';
import {CompetitionList} from './components/CompetitionList';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

const storyBookApp = 'true';

function App(): React.JSX.Element {
  const [vals, setVals] = useState('dd');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Text>{vals}</Text> */}
      {/* <MyButton
        text="Fas Button"
        onPress={() => console.log('Fas says hello')}
      /> */}
      {/* <AppButtons
        onPress={function (): void {
          throw new Error('Function not implemented.');
        }}
        text={'Sign up for free'}
        title={'GO_BACK'}
      /> */}
      {/* <InputField
        onPress={() => console.log('pressed')}
        text={''}
        title={'PASSWORD_INPUT'}
        placeholder="Testing"
        showPassword={true}
        value={vals}
        onChangeText={(text: string) => setVals(text)}
      /> */}
      {/* <CompetitionList
        comapetition={[
          {
            title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
            fromDate: '2000-12-02',
            toDate: '2024-14-02',
            location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
            id: '1',
          },
          {
            title: 'Achi Nagoya 2026 (Winter)',
            fromDate: '2000-12-02',
            toDate: '2024-14-02',
            location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
            id: '2',
          },
        ]}
        onPress={() => console.log('')}
      /> */}
      <NavigationContainer>
        <StackNavigation />
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
