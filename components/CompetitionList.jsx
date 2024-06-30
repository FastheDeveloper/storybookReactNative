import {Task} from './Task';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import {LoadingRow} from './LoadingRow';
import {CompetitionItem, CompetitionProps} from './CompetitionItem';

export const CompetitionList = ({comapetition, onPress}) => {
  const events = {
    onPress,
  };

  return (
    <View style={styles.listItems}>

      <FlatList
      
        data={comapetition}
        keyExtractor={comapetition => comapetition.id}
        renderItem={({item}) => (
          <CompetitionItem key={item.id} comapetition={item} {...events}   onPress={() => onPress(item)}/>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
