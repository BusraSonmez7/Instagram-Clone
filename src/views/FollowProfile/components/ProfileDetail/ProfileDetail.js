import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ProfileDetail.styles';

export default function ProfileDetail() {
  const isfollow = false;
  return (
    <View>
      <Text style={styles.name}>Ad Soyad</Text>
      <Text style={styles.explanation}>Açıklama eklenecek</Text>
      <Text style={styles.commonFollowers}>Takip edenler</Text>
      <View style={styles.editProfileContainer}>
        {isfollow ? (
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Takip</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.notFollowButton}>
            <Text style={styles.notFollowButtonText}>Takip Et</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.followButtonText}>Mesaj</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfileIcon}>
          <Icon name="account-plus" size={18} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
