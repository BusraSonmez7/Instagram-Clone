import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import SavedMeterialTopTabs from '../../Navigators/SavedMeterialTopTabs';
import {Header} from '../../components/Header';
import styles from './SavedList.styles';

export default function SavedList({navigation}) {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        <Header title={'Tüm Gönderiler'} />
        <View style={styles.topNavigatorContainer}>
          <SavedMeterialTopTabs />
        </View>
      </View>
    </MenuProvider>
  );
}
