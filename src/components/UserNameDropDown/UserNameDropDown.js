import React from 'react';
import {View, Text} from 'react-native';
import styles from './UserNameDropDown.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function UserNameDropDown() {
  return (
    <View style={styles.container}>
      <Text style={styles.userNameTitle}>busrasonmez6</Text>
      <Icon name="chevron-down" size={20} style={styles.iconArrowDown} />
      <Icon name="circle-medium" size={20} style={styles.iconCircle} />
    </View>
  );
}
