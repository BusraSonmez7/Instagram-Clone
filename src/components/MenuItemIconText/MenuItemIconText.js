import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './MenuItemIconText.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../color';
export default function MenuItemIconText({title, icon, color}) {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} style={[styles.icon, {color: color}]} />
      <Text style={[styles.text, {color: color}]}>{title}</Text>
    </View>
  );
}
