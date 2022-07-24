import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './MenuItem.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function MenuItem({title, icon}) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
      <Icon name={icon} size={25} style={styles.icon} />
    </View>
  );
}
