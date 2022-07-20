import React, {useState} from 'react';
import {View, Text} from 'react-native';

import styles from './Reels.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReelsComponent from '../../components/ReelsPage/ReelsPage';
import SwiperFlatList from 'react-native-swiper-flatlist';

import videoList from '../../data/video';

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexValue = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.reelsText}>Reels</Text>
        <Icon name={'photo-camera'} size={30} style={styles.cameraIcon} />
      </View>

      <SwiperFlatList
        data={videoList}
        renderItem={({item, index}) => (
          <ReelsComponent currentIndex={currentIndex} index={index} />
        )}
        onChangeIndex={indexValue}
        keyExtractor={(item, index) => index}
        vertical={true}
      />
    </View>
  );
}
