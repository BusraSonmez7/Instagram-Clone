import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './IconAndActivity.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../color';
export default function IconAndActivity({title, icon, type}) {
  const circleStyle =
    type === 'notification' ? {borderColor: colors.black} : {};
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.circle, circleStyle]}>
          <Icon name={icon} size={30} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>
            {title}. <Text style={styles.textBottom}>2w</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
