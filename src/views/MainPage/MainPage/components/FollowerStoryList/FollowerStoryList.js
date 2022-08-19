import React from 'react';
import {View, Text} from 'react-native';
import styles from './FollowerStoryList.styles';
import {Story} from '../../../../../components/Story';

export default function FollowerStoryList({item, navigation}) {
  const userName = (item.name + '' + item.surname).toLowerCase();
  return (
    <View style={styles.storyContainer}>
      <Story
        container_size={75}
        isBorder={true}
        isStory={true}
        image={item.image}
        watch={item.watch}
        navigation={navigation}
      />
      <Text style={styles.storyName} numberOfLine={1}>
        {userName.length < 14 ? userName : userName.substring(0, 11)}
        {userName.length > 13 ? <Text>...</Text> : null}
      </Text>
    </View>
  );
}
