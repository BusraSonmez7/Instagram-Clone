import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './MenuItemIconText.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from './../../color';
export default function MenuItemIconText({title, icon, color, isBorder}) {
  const borderStyle = isBorder
    ? {
        color: color,
        borderBottomColor: colors.circle_border,
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginTop: 20,
      }
    : {
        color: color,
        paddingBottom: 10,
        marginTop: 10,
      };
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} style={[styles.icon, {color: color}]} />
      <Text style={[styles.text, borderStyle]}>{title}</Text>
    </View>
  );
}
