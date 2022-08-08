import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './NoList.styles';

export default function NoList() {
  return (
    <View style={styles.noListContainer}>
      <View style={styles.valueContainer}>
        <Icon name={'add-circle-outline'} size={50} style={styles.iconValue} />
      </View>
      <Text style={styles.textProfile}>Profile</Text>
      <Text style={styles.textComment}>
        When you share photos and videos, they'll appear on your profile.
      </Text>
      <TouchableOpacity activeOpacity={0.9}>
        <Text style={styles.textNoListButton}>Share your photo or video</Text>
      </TouchableOpacity>
    </View>
  );
}
