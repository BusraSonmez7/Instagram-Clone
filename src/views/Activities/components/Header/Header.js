import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Header.styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="keyboard-backspace" size={35} style={styles.headerIcon} />
        <Text style={styles.headerText}>Yorumlar</Text>
      </View>
      <Icon name="send" size={25} style={styles.sendIcon} />
    </View>
  );
}
