
// import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'

export const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          <Icon
            name="checksquareo"
            size={24}
            color="#26c6da"
          />
          

        ) : (
          // <Text>Check-box</Text>
          <Icon name="checksquare" size={24} color="#26c6da" />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Input Title"
        value={title}
        editable={false}
        style={
          state === "TASK_ARCHIVED"
            ? styles.listItemInputTaskArchived
            : styles.listItemInputTask
        }
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <Icon
          name="star"
          size={24}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        />
        
      </TouchableOpacity>
    </View>
  );
};
