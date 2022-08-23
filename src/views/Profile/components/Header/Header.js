import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Header.styles';
import {ProfileAdd} from '../../../../menu/ProfileAdd';
import {ProfileMenu} from '../../../../menu/ProfileMenu';
import {UserName} from '../../../../menu/UserName';

export default function Header({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userNameContainer}>
        <Image
          source={require('../../../../../assets/images/icons/lock.png')}
          style={styles.imageIcon}
        />
        <UserName />
      </View>
      <View style={styles.headerRightContainer}>
        <ProfileAdd />
        <ProfileMenu navigation={navigation} />
      </View>
    </View>
  );
}
