import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export interface CompetitionProps {
  onPress: () => void;
  comapetition: {
    id: string;
    title: string;
    fromDate: string;
    toDate: string;
    location: string;
  };
}

export const CompetitionItem = ({
  comapetition: {id, title, fromDate, toDate, location},
  onPress,
}: CompetitionProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/pngs/bg.png')}
        style={styles.imgBg}>
        <View style={styles.content}>
          <Text style={styles.titleText}>{title}</Text>
          <View>
            <Text style={styles.titleTextDate}>
              {fromDate} ~ {toDate}
            </Text>
            <Text style={styles.titleTextLocation}>{location}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#253BFF',
    height: 150,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 10,
  },
  imgBg: {
    height: '100%',
    width: '100%',
  },
  content: {
    // paddingVertical: 24,
    paddingHorizontal: 24,

    marginRight: 30,
    height: '100%',
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    letterSpacing: -0.4,
    marginVertical: '10%',
  },
  titleTextDate: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    letterSpacing: -0.4,
  },
  titleTextLocation: {
    fontSize: 16,
    color: '#B8BFFF',
    fontWeight: '500',
    letterSpacing: -0.4,
    // marginVertical: '5%',
  },
});
