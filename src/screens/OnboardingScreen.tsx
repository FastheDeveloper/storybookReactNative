import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {AppButtons} from '../../components/AppButtons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Onboarding: undefined;
  CreateAccount: undefined;
  // Add other screens if needed
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateAccount'
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ImageBackground
      source={require('../../assets/pngs/SplashDesign.png')}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Soo</Text>
        <Text style={styles.text}>and Carrots</Text>

        <View style={styles.bottomView}>
          <AppButtons
            onPress={() => navigation.navigate('CreateAccount')}
            text={'Sign up for free'}
            title={'SIGN_UP_FREE'}
          />
          <View style={{marginVertical: '3%'}} />
          <AppButtons
            onPress={() => console.log('Pressed')}
            text={'Continue with Email'}
            title={'EMAIL_LOGIN'}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: '800',
  },
  bottomView: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});
