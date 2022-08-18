import React from 'react';
import {Text, View} from 'react-native';
import styles from './Reels.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Reels() {
  return (
    <View style={styles.bottomIcons}>
      <Icon name="music-note" size={25} style={styles.leftIcon} />
      <Icon name="av-timer" size={25} style={styles.leftIcon} />

      <Text style={styles.leftText}>1x</Text>
      <Icon name="auto-awesome-mosaic" size={25} style={styles.leftIcon} />
      <Icon name="timer" size={25} style={styles.leftIcon} />
    </View>
  );
}
