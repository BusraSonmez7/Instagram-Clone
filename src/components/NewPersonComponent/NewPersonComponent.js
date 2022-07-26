import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './NewPersonComponent.styles';
import {Story} from '../Story';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NewPersonComponent({image}) {
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
