import React from 'react';
import {View, Text} from 'react-native';
import styles from './CircleComponent.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CircleComponent({title, icon}) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Icon name={icon} size={30} style={styles.icon} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
