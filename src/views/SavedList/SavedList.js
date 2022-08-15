import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import SavedMeterialTopTabs from '../../Navigators/SavedMeterialTopTabs';
import {Header} from '../../components/Header';
import styles from './SavedList.styles';

export default function SavedList(props) {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  const isGuide = props.route.params.isGuide;

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        <Header title={'Tüm Gönderiler'} />
        {isGuide ? (
          <View style={styles.guideContainer}>
            <View>
              <Text style={styles.collectionName}>Saç</Text>
              <Text style={styles.collectionSize}>29 kaydedilmiş gönderi</Text>
            </View>
            <TouchableOpacity style={styles.createGuide}>
              <Text style={styles.createGuideText}>Rehber Oluştur</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={styles.topNavigatorContainer}>
          <SavedMeterialTopTabs />
        </View>
      </View>
    </MenuProvider>
  );
}
