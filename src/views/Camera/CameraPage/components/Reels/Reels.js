import React from 'react';
import {Text, View} from 'react-native';
import styles from './Reels.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Reels() {
  return (
    <View style={styles.bottomIcons}>
      <Text style={styles.leftText}>Aa</Text>
      <Icon name="all-inclusive" size={25} style={styles.leftIcon} />
      <Icon name="auto-awesome-mosaic" size={25} style={styles.leftIcon} />
      <Icon name="expand-more" size={25} style={styles.leftIcon} />
    </View>
  );
}
