import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './SeeAccountActivity.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../color';
import LinearGradient from 'react-native-linear-gradient';

export default function SeeAccountActivity({title, icon, accountName}) {
  const color = [
    '#bc99ec',
    '#f10b6b',
    '#f15d0e',
    '#ef09a8',
    '#d509d3',
    '#f2ad08',
  ];

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/tick.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>{title}</Text>
          <TouchableOpacity>
            <Text style={styles.textBottom}>
              See new activity for {accountName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
