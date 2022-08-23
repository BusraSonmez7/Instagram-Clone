import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Header.styles';
import {ShoppingMenu} from '../../../../menu/ShoppingMenu';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Shop</Text>
      <View style={styles.headerIconContainer}>
        <Image
          source={require('../../../../../assets/images/icons/saved.png')}
          style={styles.imageMenu}
        />
        <ShoppingMenu />
      </View>
    </View>
  );
}
