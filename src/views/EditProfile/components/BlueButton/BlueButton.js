import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './BlueButton.styles';

export default function BlueButton({title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
