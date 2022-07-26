import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './AccountItem.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Story from '../../components/Story/Story';
import {colors} from '../../color';

export default function AccountItem({image, name, select}) {
  const circleStyle = select
    ? {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.blue,
      }
    : {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.circle_border,
      };

  return (
    <View style={styles.container}>
      <Story
        container_size={60}
        isBorder={false}
        isStory={false}
        image={image}
        watch={false}
      />
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>{name}</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.endMessage}>bildirim sayısı</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={[styles.circle, circleStyle]}>
          <Icon name="circle" size={10} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
