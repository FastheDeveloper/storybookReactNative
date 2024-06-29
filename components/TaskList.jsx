
import { Task } from './Task';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import { LoadingRow } from './LoadingRow';

export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <View style={styles.listItems}>
        <LoadingRow/>
        <LoadingRow/>

        <LoadingRow/>
        <LoadingRow/>

      </View>
    );
  }

  if (tasks.length === 0) {
    return (
      <View style={styles.listItems}>
        <Text>empty</Text>
      </View>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <View style={styles.listItems}>
    <FlatList
      data={tasksInOrder}
      keyExtractor={(task) => task.id}
      renderItem={({ item }) => (
        <Task key={item.id} task={item} {...events} />
      )}
    />
  </View>
  );
};
