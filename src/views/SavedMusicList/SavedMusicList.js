import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import SavedMeterialTopTabs from '../../Navigators/SavedMeterialTopTabs';
import {Header} from '../../components/Header';
import {MusicItem} from '../../components/MusicItem';

import styles from './SavedMusicList.styles';

export default function SavedMusicList({navigation}) {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        <Header title={'Ses'} />
        <FlatList data={[1, 2, 3]} renderItem={() => <MusicItem />} />
      </View>
    </MenuProvider>
  );
}
