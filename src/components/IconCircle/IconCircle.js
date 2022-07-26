import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './IconCircle.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../color';
export default function IconCircle({title, icon, type}) {
  const circleStyle =
    type === 'notification' ? {borderColor: colors.black} : {};
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.circle, circleStyle]}>
          <Icon name={icon} size={30} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>{title}</Text>
          {type === 'notification' ? (
            <Text style={styles.textBottom}>Approve or ignore requests</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}
