import {Pressable, StyleSheet, Text, View, PressableProps} from 'react-native';
import React, {ComponentProps} from 'react';

type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  customStyle?: object;
} & ComponentProps<typeof Pressable>;

// const buttonOpacityStyle:{

// }

const CustomButton = ({
  title,
  rightIcon,
  leftIcon,
  customStyle,
  ...pressableProps
}: CustomButtonProps) => {
  return (
    <Pressable
      style={StyleSheet.flatten([styles.button, customStyle])}
      {...pressableProps}>
      <View style={styles.leftIcon}>{leftIcon}</View>
      <Text style={styles.buttonText}> {title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
  },
});
