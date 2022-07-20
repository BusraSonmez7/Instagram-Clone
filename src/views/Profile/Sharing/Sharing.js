import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './Sharing.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SharingData from '../../../data/sharing_list';
import Post from '../../../components/ProfilePost/ProfilePost';

export default function Profile() {
  const noList = () => {
    return (
      <View style={styles.noListContainer}>
        <View style={styles.valueContainer}>
          <Icon
            name={'add-circle-outline'}
            size={50}
            style={styles.iconValue}
          />
        </View>
        <Text style={styles.textProfile}>Profile</Text>
        <Text style={styles.textComment}>
          When you share photos and videos, they'll appear on your profile.
        </Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.textNoListButton}>Share your photo or video</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {SharingData.length === 0 ? noList() : <Post />}
    </View>
  );
}
