import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ActivityItem.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ActivityItem({icon, title, info}) {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} style={styles.icon} />
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{info}</Text>
      </View>
      <Icon name="arrow-forward-ios" size={20} style={styles.nextIcon} />
    </View>
  );
}
