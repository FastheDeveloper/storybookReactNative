import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {
  BackIcon,
  CloseIcon,
  EnterSvg,
  Front,
  MailIcon,
} from '../assets/svgs/Enter';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
  title: string;
};

export const AppButtons = ({onPress, text, title}: MyButtonProps) => {
  const alignSelf =
    title === 'GO_BACK' || title === 'GO_BACK_SHADE' || title === 'CLOSE_BUTTON'
      ? 'flex-start'
      : 'auto';

  const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 2,
      // paddingVertical: 2,
      backgroundColor: title !== 'EMAIL_LOGIN' ? '#253BFF' : '#1D2939',
      borderRadius: 30,
    },
    text: {color: 'white', fontSize: 14, fontWeight: '700'},
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    circle: {
      borderRadius: 30,
      // width: 30,
      // height: 30,
      borderWidth: 1,
      borderColor: 'white',
      padding: 15,
      marginHorizontal: 5,
      marginVertical: 5,
    },
  });
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          paddingHorizontal: title === 'BLAND' ? 16 : 0,
          paddingVertical: title === 'BLAND' ? 16 : 0,
          borderRadius: 30,
          alignSelf,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      {title === 'SIGN_UP_FREE' && (
        <View style={styles.row}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
              marginLeft: 10,
            }}>
            <EnterSvg width={25} height={20} />
            <View style={{marginHorizontal: 5}} />
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={styles.circle}>
            <Front width={20} height={20} />
          </View>
        </View>
      )}
      {title === 'EMAIL_LOGIN' && (
        <View style={styles.row}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
              marginLeft: 10,
            }}>
            <MailIcon width={25} height={20} />
            <View style={{marginHorizontal: 5}} />
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={styles.circle}>
            <Front width={20} height={20} />
          </View>
        </View>
      )}
      {title === 'BLAND' && (
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
      {title === 'GO_BACK' && (
        <View
          style={[
            styles.row,
            {backgroundColor: 'white', alignSelf: 'flex-start'},
          ]}>
          <View style={[styles.circle, {borderColor: '#D0D5DD'}]}>
            <BackIcon width={20} height={20} />
          </View>
        </View>
      )}
      {title === 'CLOSE_BUTTON' && (
        <View style={[styles.row, {backgroundColor: 'white'}]}>
          <View style={[styles.circle, {borderColor: '#D0D5DD'}]}>
            <CloseIcon width={20} height={20} />
          </View>
        </View>
      )}
      {title === 'GO_BACK_SHADE' && (
        <View style={[styles.row, {backgroundColor: 'white'}]}>
          <View
            style={[
              styles.circle,
              {backgroundColor: '#D0D5DD', borderColor: '#D0D5DD'},
            ]}>
            <BackIcon width={20} height={20} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
