import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ProfileDetail.styles';

export default function ProfileDetail() {
  return (
    <View>
      <Text style={styles.name}>Büşra Sönmez</Text>
      <TouchableOpacity style={styles.setStatusContainer}>
        <Icon name="plus" size={16} style={styles.iconStatus} />
        <Text style={styles.setStatus}>Durumu Ayarla</Text>
      </TouchableOpacity>
      <Text style={styles.explanation}>
        Bilgisayar Mühendisi {'\n\n'}"Sevgi akıldan üstündür.."
      </Text>
      <View style={styles.editProfileContainer}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editText}>Profili Düzenle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editProfileIcon}>
          <Icon name="account-plus" size={18} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
