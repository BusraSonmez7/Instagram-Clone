import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CameraPage.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import {Story} from './components/Story';
import {Reels} from './components/Reels';
import {Live} from './components/Live';

export default function CameraPage() {
  const image_url =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  const textList = ({item, index}) => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.typeText}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="settings" size={35} style={styles.headerIcon} />
        <Icon name="flash-off" size={35} style={styles.headerIcon} />
        <Icon name="close" size={35} style={styles.headerIcon} />
      </View>
      <View style={styles.bottomContainer}>
        <Reels />
        <View style={styles.photoContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
          <Image
            source={{
              uri: image_url,
            }}
            style={styles.image}
            resizeMode={'cover'}
          />
          <View style={styles.carouselContainer}>
            <Carousel
              data={['GÖNDERİ', 'HİKAYE', 'REELS VİDEOSU', 'CANLI']}
              renderItem={textList}
              sliderWidth={285}
              itemWidth={104}
            />
          </View>
          <Icon name="flip-camera-ios" size={30} style={styles.cameraIcon} />
        </View>
      </View>
    </View>
  );
}
