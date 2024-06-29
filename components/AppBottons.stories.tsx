import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';

import React from 'react';
import {AppButtons} from './AppButtons';

const AppButtonMeta: Meta<typeof AppButtons> = {
  title: 'AppButton',
  component: AppButtons,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    text: 'Hello worldfdfd',
    title: 'SIGN_UP_FREE',
  },
  decorators: [
    Story => (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Story />
      </View>
    ),
  ],
};

export default AppButtonMeta;

export const MainButton: StoryObj<typeof AppButtons> = {};

export const BlandButton: StoryObj<typeof AppButtons> = {
  args: {
    text: 'Another example',
    title: 'BLAND',
  },
};
