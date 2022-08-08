import React from 'react';
import {View, ScrollView} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import TopBarNavigator from '../../Navigators/ProfileMeterialTopTabs';
import styles from './FollowProfile.styles';
import {Header} from './components/Header';
import {ProfileImageRow} from './components/ProfileImageRow';
import {ProfileDetail} from './components/ProfileDetail';
import {NewPerson} from './components/NewPerson';
import {FavoriteStory} from './components/FavoriteStory';
import {FlatList} from 'react-native-gesture-handler';

export default function FollowProfile() {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        <Header />
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View>
            <ProfileImageRow />
            <ProfileDetail />
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={() => <FavoriteStory />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.topNavigatorContainer}>
              <TopBarNavigator />
            </View>
          </View>
        </ScrollView>
      </View>
    </MenuProvider>
  );
}
