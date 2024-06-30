import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';

import React from 'react';
import {CompetitionProps, CompetitionItem} from './CompetitionItem';

const CompetitionItemMeta: Meta<typeof CompetitionItem> = {
  title: 'CompetitionItem',
  component: CompetitionItem,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  args: {
    comapetition: {
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      fromDate: '2000-12-02',
      toDate: '2024-14-02',
      location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
      id: '1',
    },
  },
  decorators: [
    Story => (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginHorizontal: 20,
        }}>
        <Story />
      </View>
    ),
  ],
};

export default CompetitionItemMeta;

export const CompetitionSingleItem: StoryObj<typeof CompetitionItem> = {};

export const CompetitionSingleDefault: StoryObj<typeof CompetitionItem> = {
  args: {
    comapetition: {
      title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
      fromDate: '2000-12-02',
      toDate: '2024-14-02',
      location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
      id: '1',
    },
  },
};
