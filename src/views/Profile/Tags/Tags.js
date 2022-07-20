import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Tags.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SharingData from '../../../data/sharing_list';
import Post from '../../../components/ProfilePost/ProfilePost';

export default function Tags() {
  const noList = () => {
    return (
      <View style={styles.noListContainer}>
        <View style={styles.valueContainer}>
          <Icon name={'portrait'} size={50} style={styles.iconValue} />
        </View>
        <Text style={styles.textProfile}>Photos and videos of you</Text>
        <Text style={styles.textComment}>
          When people tag you in photos and videos, they'll appear here.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {SharingData.length === 0 ? noList() : <Post />}
    </View>
  );
}
