import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './ReelsPage.styles';
import Video from 'react-native-video';
import {Story} from '../Story';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HEIGHT = Dimensions.get('window').height;

const image_url =
  'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

export default function ReelsPage({currentIndex, index}) {
  const [mute, setMute] = useState(true);

  const onError = error => {
    console.log(error);
  };
  return (
    <View style={styles.container}>
      {console.log('mute: ' + mute)}
      <TouchableOpacity activeOpacity={0.9} onPress={() => setMute(!mute)}>
        <Video
          source={require('../../../assets/videos/teknofest1.mp4')}
          onError={onError}
          resizeMode={'cover'}
          repeat={true}
          muted={mute}
          style={styles.video}
          paused={currentIndex === index ? false : true}
        />
      </TouchableOpacity>
      <View style={styles.activityContainer}>
        <View style={styles.textContainer}>
          <View style={styles.profileContainer}>
            <Story
              container_size={35}
              isBorder={false}
              isStory={false}
              image={
                'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6'
              }
            />
            <Text style={styles.userName}>kullanici_adi</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={() => null}>
              <Text style={styles.followButton}>Takip Et</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.comment}>
            Comment Comment Comment Comment Comment Comment Comment Comment
            Comment Comment
          </Text>
          <View style={styles.soundContainer}>
            <LottieView
              source={require('../../../assets/lottie/volume.json')}
              style={styles.soundAnimation}
              autoPlay={true}
            />
            <Text style={styles.musicName}>Music name</Text>
            <Icon name={'circle'} size={7} style={styles.soundCircle} />
            <Text style={styles.soundType}>Sound type</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="favorite" size={HEIGHT / 20} style={styles.icon} />
          <Text style={styles.iconText}>Like</Text>
          <Icon
            name="chat-bubble-outline"
            size={HEIGHT / 20}
            style={styles.icon}
          />
          <Text style={styles.iconText}>XXX</Text>
          <Icon name="send" size={HEIGHT / 20} style={styles.icon} />
          <Icon name="more-vert" size={HEIGHT / 20} style={styles.icon} />
          <Image
            source={{
              uri: image_url,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
        </View>
      </View>
    </View>
  );
}