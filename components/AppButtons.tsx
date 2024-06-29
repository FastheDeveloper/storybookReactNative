import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {EnterSvg, Front} from '../assets/svgs/Enter';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
  title: string;
};

export const AppButtons = ({onPress, text, title}: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          paddingHorizontal: title === 'BLAND' ? 16 : 0,
          paddingVertical: title === 'BLAND' ? 16 : 0,
          borderRadius: title === 'BLAND' ? 8 : 30,
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 2,
    // paddingVertical: 2,
    backgroundColor: '#253BFF',
    borderRadius: 30,
  },
  text: {color: 'white'},
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
