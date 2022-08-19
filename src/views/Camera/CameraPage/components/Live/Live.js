import React from 'react';
import {Text, View} from 'react-native';
import styles from './Live.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Live() {
  return (
    <View style={styles.bottomIcons}>
      <Icon name="format-align-left" size={25} style={styles.leftIcon} />
      <Icon name="calendar-today" size={25} style={styles.leftIcon} />
      <Icon name="visibility" size={25} style={styles.leftIcon} />
    </View>
  );
}
