import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
} from 'react-native';
import {
  BackIcon,
  CloseIcon,
  DropDown,
  EyeClosed,
  EyeOpen,
  SearchIcon,
} from '../assets/svgs/Enter';
import Icon from 'react-native-vector-icons/AntDesign';
export interface MyButtonProps extends TextInputProps {
  onPress: () => void;

  text: string;
  title: string;
  placeholder: string;
  showPassword: boolean;
  value: string;
}

export const InputField = ({
  onPress,
  text,
  title,
  placeholder,
  showPassword,
  value,
  onChangeText,
  ...inputProps
}: MyButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F9FAFB',
      borderRadius: 16,
      height: 52,
      overflow: 'hidden',
    },
    text: {color: 'white'},
    textInputStyles: {
      backgroundColor: 'transparent',
      width: '80%',
      paddingHorizontal: '2%',
      height: 52,
      marginLeft: '5%',
    },
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
      style={[styles.container]}
      onPress={onPress}
      activeOpacity={0.8}>
      {/* <TextInput
        style={styles.textInputStyles}
        placeholder={placeholder}
        placeholderTextColor={'#667085'}
      /> */}
      {title === 'DROP_DOWN' && (
        <View style={styles.row}>
          <TextInput
            style={styles.textInputStyles}
            placeholder={placeholder}
            placeholderTextColor={'#667085'}
            onChangeText={onChangeText}
            editable={false}
            {...inputProps}
            onPress={onPress}
            value={value}
          />

          <DropDown width={24} height={24} style={{marginRight: '5%'}} />
        </View>
      )}
      {title === 'PASSWORD_INPUT' && (
        <View style={styles.row}>
          <TextInput
            style={styles.textInputStyles}
            placeholder={placeholder}
            placeholderTextColor={'#667085'}
            secureTextEntry={showPassword}
            onChangeText={onChangeText}
            {...inputProps}
          />
          {showPassword ? (
            <EyeClosed
              width={24}
              height={24}
              style={{marginRight: '5%'}}
              onPress={onPress}
            />
          ) : (
            <Icon
              name="eyeo"
              size={24}
              style={{marginRight: '5%'}}
              color={'#101828'}
            />
          )}
        </View>
      )}
      {title === 'SEARCH_INPUT' && (
        <View style={[styles.row]}>
          <TextInput
            style={styles.textInputStyles}
            placeholder={placeholder}
            placeholderTextColor={'#667085'}
            onChangeText={onChangeText}
            {...inputProps}
          />

          <SearchIcon width={24} height={24} style={{marginRight: '5%'}} />
        </View>
      )}

      {title === 'BLAND' && (
        <TextInput
          style={styles.textInputStyles}
          placeholder={placeholder}
          placeholderTextColor={'#667085'}
          onChangeText={onChangeText}
          {...inputProps}
        />
      )}
    </TouchableOpacity>
  );
};
