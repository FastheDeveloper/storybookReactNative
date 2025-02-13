import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {AppButtons} from '../../components/AppButtons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomButton from '../../components/CustomButton';
import {EnterSvg, MailIcon} from '../../assets/svgs/Enter';
import CustomButtonBetter, {
  BUTTON_SCHEME,
} from '../../components/CustomButtonBetter';
import QuizProvider, {useQuizContext} from '../providers/QuizProvider';
import {useTimer} from '../hooks/useTimer';

type RootStackParamList = {
  Onboarding: undefined;
  CreateAccount: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateAccount'
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {carrotCount, updateCarrotCountby3, updateCarrotCount} =
    useQuizContext();
  const {timeTillLastInteraction, startTimer, clearTimer} = useTimer(10);

  useEffect(() => {
    startTimer();

    return () => {
      clearTimer();
    };
  }, [carrotCount]);

  const isFinished = carrotCount >= 10;

  return (
    <ImageBackground
      source={require('../../assets/pngs/SplashDesign.png')}
      style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Soo</Text>

        <Text style={styles.text} onPress={clearTimer}>
          and Carrots {carrotCount}
        </Text>

        <Text style={styles.text}>
          Time from last interaction: {timeTillLastInteraction}
        </Text>

        <View style={styles.bottomView}>
          {/* <AppButtons
            onPress={() => navigation.navigate('CreateAccount')}
            text={'Sign up for free'}
            title={'SIGN_UP_FREE'}
          /> */}
          <CustomButton
            title="Update by 3"
            onPress={updateCarrotCountby3}
            onLongPress={() => console.warn('Custom Button Long Pressed')}
            rightIcon={<EnterSvg width={25} height={20} />}
            leftIcon={<MailIcon width={25} height={20} />}
          />
          <View style={{marginVertical: '3%'}} />
          {/* <AppButtons
            onPress={() => navigation.navigate('CreateAccount')}
            text={'Continue with Email'}
            title={'EMAIL_LOGIN'}
          /> */}
          <CustomButtonBetter
            onPress={updateCarrotCount}
            title="Update by 1"
            scheme={BUTTON_SCHEME.primary}
            touchableStyle={{borderColor: 'green'}}
            textTitleStyle={{color: 'purple'}}
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
  textssss: {
    color: 'yellow',
  },
});
