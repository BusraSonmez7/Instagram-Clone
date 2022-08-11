import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './MusicItem.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function MusicItem({title}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://azcoinnews.com/wp-content/uploads/2021/10/Web-3.0-music-NFT.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.musicNameContainer}>
        <Text style={styles.musicTitle}>Sil Baştan</Text>
        <Text style={styles.musicInfo}>Şebnem Ferah</Text>
      </View>
      <Icon name="play-circle-outline" size={35} style={styles.icon} />
    </View>
  );
}
