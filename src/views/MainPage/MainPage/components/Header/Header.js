import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Header.styles';
import {Instagram} from '../../../../../menu/Instagram';
import {MainPageAdd} from '../../../../../menu/MainPageAdd';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Instagram />
      <View style={styles.headerIcons}>
        <MainPageAdd />
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon name="notifications-none" size={30} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <Icon name="mail-outline" size={30} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
