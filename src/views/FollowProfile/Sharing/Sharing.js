import React from 'react';
import {View} from 'react-native';

import styles from './Sharing.styles';
import SharingData from '../../../data/sharing_list';
import {ProfilePost} from '../../../components/ProfilePost';
import {NoList} from './components/NoList';

export default function Profile() {
  return (
    <View style={styles.container}>
      {SharingData.length === 0 ? <NoList /> : <ProfilePost />}
    </View>
  );
}
