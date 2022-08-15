import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Header.styles';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Icon name="close" size={30} style={styles.iconClose} />
        <Text style={styles.title}>Profili Düzenle</Text>
      </View>
      <Icon name="check" size={30} style={styles.iconTick} />
    </View>
  );
}
