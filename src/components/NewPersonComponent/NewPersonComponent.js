import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './NewPersonComponent.styles';
import {Story} from '../Story';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NewPersonComponent({image}) {
  const profileImg =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';
  return (
    <View style={styles.container}>
      <Story
        container_size={90}
        isBorder={false}
        isStory={false}
        image={image}
      />
      <Icon name="close" size={20} style={styles.iconClose} />
      <Text style={styles.name}>Ad Soyad</Text>
      <Text style={styles.commonFollower}>ortak takipçiler</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Takip Et</Text>
      </TouchableOpacity>
    </View>
  );
}
