import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Header.styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon name="keyboard-backspace" size={35} style={styles.headerIcon} />
      <Text style={styles.headerText}>Activity</Text>
    </View>
  );
}
