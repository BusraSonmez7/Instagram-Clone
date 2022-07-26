import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import styles from './MainPage.styles';
import profile_image from '../../../data/profile_image';
import {Header} from './components/Header';
import {FollowerStoryList} from './components/FollowerStoryList';
import {MyStory} from './components/MyStory';
import {SharingList} from './components/SharingList';

export default function MainPage({navigation}) {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            style={styles.story}
            data={profile_image}
            renderItem={item => <FollowerStoryList item={item.item} />}
            horizontal
            ListHeaderComponent={<MyStory />}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => {
              item + '_' + index;
            }}
          />
          <FlatList
            data={profile_image}
            renderItem={() => <SharingList />}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            style={{height: '100%', width: '100%'}}
            keyExtractor={(item, index) => {
              item + '_' + index;
            }}
          />
        </ScrollView>
      </View>
    </MenuProvider>
  );
}
