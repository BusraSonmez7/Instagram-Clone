import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './Notification.styles';
import ProfileImage from '../../data/profile_image';
import {PersonItem} from '../../components/PersonItem';
import {FlatListHead} from './components/FlatListHead';

export default function Notification() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ProfileImage}
        renderItem={item => (
          <PersonItem
            name={
              item.item.name.toLowerCase() +
              '_' +
              item.item.surname.toLowerCase()
            }
            image={item.item.image}
            user_name={item.item.name + ' ' + item.item.surname}
            button={'Send'}
            type={'follow'}
            information={'Followed by user_name'}
          />
        )}
        ListHeaderComponent={<FlatListHead />}
        keyExtractor={(item, index) => {
          item + '_' + index;
        }}
      />
    </View>
  );
}
