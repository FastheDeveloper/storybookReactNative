import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {ComponentProps} from 'react';

export enum BUTTON_SCHEME {
  primary = 'primary',
  secondary = 'secondary',
}

export enum BUTTON_SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
  default = 'default',
}

type ButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  scheme?: BUTTON_SCHEME;
  touchableStyle?: StyleProp<ViewStyle>;
  textTitleStyle?: StyleProp<TextStyle>;
  sizeScheme?: BUTTON_SIZE;
} & ComponentProps<typeof Pressable>;

const CustomButtonBetter = ({
  disabled,
  loading,
  title,
  style,
  scheme = BUTTON_SCHEME.primary,
  sizeScheme = BUTTON_SIZE.default,
  textTitleStyle,
  touchableStyle,
  ...pressableProps
}: ButtonProps) => {
  const buttonStyle = {
    [BUTTON_SCHEME.primary]: {
      enabled: {
        borderRadius: 16,
        opacity: 1,
      },
      disabled: {
        borderRadius: 16,
        opacity: 0.6,
      },
    },
    [BUTTON_SCHEME.secondary]: {
      enabled: {
        borderRadius: 16,
        opacity: 1,
        backgroundColor: 'red',
      },
      disabled: {
        borderRadius: 16,
        opacity: 0.6,
        backgroundColor: 'red',
      },
    },
  };

  const titleStyle = {
    [BUTTON_SCHEME.primary]: {
      color: 'white',
    },
    [BUTTON_SCHEME.secondary]: {
      color: 'white',
    },
  };

  const disabledValue = disabled ? 'disabled' : 'enabled';
  const disabledStyle = buttonStyle[scheme][disabledValue];
  const wrapperStyle = StyleSheet.flatten([
    styles.main,
    {borderColor: 'blue'},
    touchableStyle,
  ]);

  const content = loading ? (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size="small" color={'white'} animating={true} />
    </View>
  ) : (
    <Text
      style={[
        titleStyle[scheme],
        textTitleStyle,
        {textAlign: 'center', color: 'white'},
      ]}>
      {title}
    </Text>
  );
  return (
    <Pressable
      disabled={disabled}
      {...pressableProps}
      style={({pressed}) => [
        wrapperStyle,
        {opacity: pressed ? 0.5 : 1},
        disabledStyle,
      ]}>
      {content}
    </Pressable>
  );
};

export default CustomButtonBetter;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  loaderWrapper: {
    height: 24,
    justifyContent: 'center',
  },
});
