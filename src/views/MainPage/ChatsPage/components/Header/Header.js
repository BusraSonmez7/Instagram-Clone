import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Header.styles';
import {UserNameDropDown} from '../../../../../components/UserNameDropDown';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerBackContainer}>
        <Icon name="keyboard-backspace" size={30} style={styles.iconHeader} />
        <View>
          <UserNameDropDown />
          <Text>Set a status</Text>
        </View>
      </View>
      <View style={styles.iconHeaderContainer}>
        <Icon name="video-call" size={30} style={styles.iconHeader} />
        <Icon
          name="add"
          size={30}
          style={[styles.iconHeader, {marginEnd: 10}]}
        />
      </View>
    </View>
  );
}
