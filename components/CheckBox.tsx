import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export type MyButtonProps = {
  onPress: () => void;
  selected: boolean;
  title: string;
};

export const CheckBox = ({onPress, selected, title}: MyButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 2,
      // paddingVertical: 2,
      backgroundColor: 'white',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#D3D8FF',
    },
  });
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: 30,
          height: 30,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      {selected && <Icon name="check" size={20} />}
    </TouchableOpacity>
  );
};
