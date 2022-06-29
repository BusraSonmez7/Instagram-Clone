import React, {useRef, useState, Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native';
import Video from 'react-native-video';

import styles from './Reels.styles';
import {Story} from '../../components/Story';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReelsComponent from '../../components/ReelsComponent/ReelsComponent';
import SwiperFlatList from 'react-native-swiper-flatlist';

import videoList from '../../data/video';

const image_url =
  'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexValue = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.reelsText}>Reels</Text>
        <Icon name={'photo-camera'} size={25} style={styles.cameraIcon} />
      </View>
      <SwiperFlatList
        data={videoList}
        renderItem={() => <ReelsComponent />}
        onChangeIndex={indexValue}
        keyExtractor={(item, index) => index}
        vertical={true}
        style={styles.flatListStyle}
      />
    </View>
  );
}
