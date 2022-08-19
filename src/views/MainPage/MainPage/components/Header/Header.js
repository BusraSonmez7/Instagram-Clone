import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
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
          <Image
            source={require('../../../../../../assets/images/icons/like.png')}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <Image
            source={require('../../../../../../assets/images/icons/message_page.png')}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
