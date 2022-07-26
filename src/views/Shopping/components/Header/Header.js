import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Header.styles';
import {ShoppingMenu} from '../../../../menu/ShoppingMenu';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Shop</Text>
      <View style={styles.headerIconContainer}>
        <Icon name={'bookmark-border'} size={30} style={styles.headerIcon} />
        <ShoppingMenu />
      </View>
    </View>
  );
}
