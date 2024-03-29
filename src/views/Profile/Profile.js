import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import TopBarNavigator from '../../Navigators/ProfileMeterialTopTabs';
import styles from './Profile.styles';
import {Header} from './components/Header';
import {ProfileImageRow} from './components/ProfileImageRow';
import {ProfileDetail} from './components/ProfileDetail';
import {NewPerson} from './components/NewPerson';
import {FavoriteStory} from './components/FavoriteStory';

export default function Profile({navigation}) {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View>
            <ProfileImageRow />
            <ProfileDetail navigation={navigation} />
            <NewPerson />
            <FavoriteStory />
            <View style={styles.topNavigatorContainer}>
              <TopBarNavigator />
            </View>
          </View>
        </ScrollView>
      </View>
    </MenuProvider>
  );
}
