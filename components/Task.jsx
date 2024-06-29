
// import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          // <MaterialIcons
          //   name="check-box-outline-blank"
          //   size={24}
          //   color="#26c6da"
          // />
          <Text>Check0not</Text>

        ) : (
          <Text>Check-box</Text>
          // <MaterialIcons name="check-box" size={24} color="#26c6da" />
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
        {/* <MaterialIcons
          name="star"
          size={24}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        /> */}
        <Text style={{color:state !== "TASK_PINNED" ? "#eee" : "#26c6da"}}>Star</Text>
      </TouchableOpacity>
    </View>
  );
};
