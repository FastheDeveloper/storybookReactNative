import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';

import React from 'react';
import {InputField} from './InputField';

const InputFieldMeta: Meta<typeof InputField> = {
  title: 'InputField',
  component: InputField,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello worldfdfd',
    title: 'SIGN_UP_FREE',
    placeholder: 'Sample Placeholder',
    showPassword: false,
  },
  decorators: [
    Story => (
      <View style={{justifyContent: 'center', flex: 1, marginHorizontal: 10}}>
        <Story />
      </View>
    ),
  ],
};

export default InputFieldMeta;

export const BlandInput: StoryObj<typeof InputField> = {
  args: {
    text: 'Another example',
    title: 'BLAND',
    placeholder: 'Bland Input placeholder',
  },
};

export const DropDownInput: StoryObj<typeof InputField> = {
  args: {
    title: 'DROP_DOWN',
    placeholder: 'Drop down Input placeholder',
  },
};

export const ClosedEyePasswordInput: StoryObj<typeof InputField> = {
  args: {
    title: 'PASSWORD_INPUT',
    placeholder: 'Password Input placeholder',
    showPassword: true,
  },
};

export const OpenEyePasswordInput: StoryObj<typeof InputField> = {
  args: {
    title: 'PASSWORD_INPUT',
    placeholder: 'Password Input placeholder',
    showPassword: false,
  },
};

export const SearchInput: StoryObj<typeof InputField> = {
  args: {
    title: 'SEARCH_INPUT',
    placeholder: 'Search Input placeholder',
  },
};
