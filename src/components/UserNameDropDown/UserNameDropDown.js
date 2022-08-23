import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './UserNameDropDown.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function UserNameDropDown() {
  return (
    <View style={styles.container}>
      <Text style={styles.userNameTitle}>busrasonmez6</Text>
      <Image
        source={require('../../../assets/images/icons/down.png')}
        style={styles.imageIcon}
      />
      <Icon name="circle-medium" size={25} style={styles.iconCircle} />
    </View>
  );
}
