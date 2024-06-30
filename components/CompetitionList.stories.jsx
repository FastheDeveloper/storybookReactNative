
import { TaskList } from './TaskList';
import { CompetitionSingleDefault as TaskStory } from './CompetitionItem.stories';
import { View } from 'react-native';
import { CompetitionList } from './CompetitionList';


export default {
  component: CompetitionList,
  title: 'CompetitonList',
  decorators: [
    Story => (
      <View style={{ padding: 42, flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {  
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
};

export const Default = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.js.
    comapetition: [
      { ...TaskStory.args?.comapetition, id: '1'},
      { ...TaskStory.args?.comapetition, id: '2', title: 'Task 2' },
      { ...TaskStory.args?.comapetition, id: '3', title: 'Task 3' },
      { ...TaskStory.args?.comapetition, id: '4', title: 'Task 4' },
      { ...TaskStory.args?.comapetition, id: '5', title: 'Task 5' },
      { ...TaskStory.args?.comapetition, id: '6', title: 'Task 6' },
      { ...TaskStory.args?.comapetition, id: '7', title: 'Task 7' },

    ],
  },
};



