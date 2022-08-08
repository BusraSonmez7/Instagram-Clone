import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Header.styles';
import {FollowProfileMenu} from '../../../../menu/FollowProfileMenu';
import {FollowProfileNotification} from '../../../../menu/FollowProfileNotification';

export default function Header() {
  const isfollow = true;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userNameContainer}>
        <Icon name="keyboard-backspace" size={30} style={styles.iconLock} />
        <Text style={styles.username}>user_name</Text>
      </View>
      <View style={styles.headerRightContainer}>
        {isfollow ? <FollowProfileNotification /> : null}
        <FollowProfileMenu />
      </View>
    </View>
  );
}
