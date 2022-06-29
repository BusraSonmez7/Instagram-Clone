import React from 'react';
import {View, Text} from 'react-native';
import styles from './ReelsComponent.styles';
import Video from 'react-native-video';
import {Story} from '../Story';

const image_url =
  'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

export default function ReelsComponent() {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../../assets/videos/teknofest1.mp4')}
        resizeMode={'cover'}
        repeat={true}
        muted={true}
        style={styles.video}
      />
      <View style={styles.profileImage}>
        <Story
          container_size={35}
          isBorder={false}
          isStory={true}
          image={
            'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6'
          }
        />
      </View>
    </View>
  );
}
