import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Chats.styles';
import {ChatComponent} from '../../../components/ChatComponent';
import {Header} from './components/Header';
import {TopFlatList} from './components/TopFlatList';
import ProfileData from '../../../data/profile_image';

export default function Chats() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={ProfileData}
        renderItem={({item}) => (
          <ChatComponent
            image={item.image}
            name={item.name + ' ' + item.surname}
            watch={item.watch}
          />
        )}
        keyExtractor={(item, index) => item + '' + index}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<TopFlatList />}
      />
    </View>
  );
}
