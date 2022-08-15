import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './ProfilePhoto.styles';

export default function ProfilePhoto() {
  const image_url =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';
  return (
    <View style={styles.container}>
      <Image source={{uri: image_url}} style={styles.image} />
      <TouchableOpacity activeOpacity={1}>
        <Text style={styles.text}>Profil fotoğrafını değiştir</Text>
      </TouchableOpacity>
    </View>
  );
}
