import React, {useState} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
('react-native-vector-icons/MaterialIcons');
import productList from '../../data/product_image';

import styles from './Saved.styles';
import {SavedComponent} from '../../components/SavedComponent';
import {Collection} from '../../components/Collection';
import {Header} from '../../components/Header';

export default function Saved({navigation}) {
  const savedCollection = () => {
    return (
      <View style={styles.savedContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SavedList', {
              isGuide: false,
            })
          }
          activeOpacity={1}>
          <SavedComponent title={'Tüm Gönderiler'} listKey={'key123'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SavedMusicList')}>
          <SavedComponent title={'Ses'} listKey={'key456'} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={'Kaydedilenler'} />
      <FlatList
        data={productList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SavedList', {
                isGuide: true,
              })
            }
            activeOpacity={1}>
            <Collection image={item} title={'New Collection'} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item + '_' + index * 10 + 10}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListHeaderComponent={savedCollection()}
      />
    </View>
  );
}
