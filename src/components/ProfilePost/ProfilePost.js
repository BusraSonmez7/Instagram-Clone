import React from 'react';
import {View, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ProfilePost.styles';
import SharingData from '../../data/sharing_list';

export default function ProfilePost() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SharingData}
        renderItem={({item}) => (
          <View>
            <Image source={item.images} style={styles.sharesImage} />
            <Icon
              name={
                item.type === 'images'
                  ? 'collections'
                  : item.type === 'reels'
                  ? 'video-library'
                  : item.type === 'video'
                  ? 'play-arrow'
                  : null
              }
              size={23}
              style={styles.shareIcon}
            />
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => item + '_' + index}
        style={styles.shareList}
        nestedScrollEnabled={true}
      />
    </View>
  );
}
