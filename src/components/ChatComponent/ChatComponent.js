import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './ChatComponent.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Story from '../../components/Story/Story';
export default function ChatComponent({image, name, watch}) {
  return (
    <View style={styles.container}>
      <Story
        container_size={60}
        isBorder={true}
        isStory={false}
        image={image}
        watch={watch}
      />
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>{name}</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.endMessage}>son mesaj</Text>
          <Icon name="lens" size={3} style={styles.point} />
          <Text>zaman</Text>
        </View>
      </View>
      <Icon name="photo-camera" size={25} />
    </View>
  );
}
