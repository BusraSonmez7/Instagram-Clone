import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './NoList.styles';

export default function NoList() {
  return (
    <View style={styles.noListContainer}>
      <View style={styles.valueContainer}>
        <Icon name={'portrait'} size={50} style={styles.iconValue} />
      </View>
      <Text style={styles.textProfile}>Photos and videos of you</Text>
      <Text style={styles.textComment}>
        When people tag you in photos and videos, they'll appear here.
      </Text>
    </View>
  );
}
