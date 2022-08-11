import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Header.styles';
import {ProfileAdd} from '../../../../menu/ProfileAdd';
import {ProfileMenu} from '../../../../menu/ProfileMenu';
import {UserName} from '../../../../menu/UserName';

export default function Header({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userNameContainer}>
        <Icon name="lock-outline" size={16} style={styles.iconLock} />
        <UserName />
      </View>
      <View style={styles.headerRightContainer}>
        <ProfileAdd />
        <ProfileMenu navigation={navigation} />
      </View>
    </View>
  );
}
