import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FavoriteStory.styles';

export default function FavoriteStory() {
  const [favoriteStoryVisible, setFavoriteStoryVisible] = useState(false);

  const circleView = () => {
    return <View style={styles.circle}></View>;
  };
  const circleAddView = () => {
    return (
      <View style={styles.addHistoryContainer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.circleAdd}>
          <Icon name="plus" size={30} style={styles.plusIcon} />
        </TouchableOpacity>
        <Text style={styles.addHistoryNewText}>Yeni</Text>
      </View>
    );
  };

  const favoriteStoryDown = () => {
    return (
      <View>
        <Text style={styles.favoriteStoryDownText}>
          Favori hikayelerini profilinde tut
        </Text>

        <View style={styles.circleContainer}>
          {circleAddView()}
          {circleView()}
          {circleView()}
          {circleView()}
        </View>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.favoriteStoryContainer}
        onPress={() => setFavoriteStoryVisible(!favoriteStoryVisible)}>
        <Text style={styles.favoriteStoryText}>Hikayelerde Öne Çıkanlar</Text>
        <Icon name="chevron-down" size={18} style={styles.iconFavoriteStory} />
      </TouchableOpacity>
      {favoriteStoryVisible ? favoriteStoryDown() : null}
    </View>
  );
}
