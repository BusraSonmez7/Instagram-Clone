import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Icon name="keyboard-backspace" size={35} style={styles.headerIcon} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}
