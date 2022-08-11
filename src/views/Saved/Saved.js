import React, {useState} from 'react';
import {View, FlatList, ScrollView} from 'react-native';
('react-native-vector-icons/MaterialIcons');
import productList from '../../data/product_image';

import styles from './Saved.styles';
import {SavedComponent} from '../../components/SavedComponent';
import {Collection} from '../../components/Collection';

export default function Saved() {
  const savedCollection = () => {
    return (
      <View style={styles.savedContainer}>
        <SavedComponent title={'Tüm Gönderiler'} listKey={'123'} />
        <SavedComponent title={'Tüm Gönderiler'} listKey={'Tüm Gönderiler'} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {savedCollection()}
      <FlatList
        data={productList}
        renderItem={({item}) => (
          <Collection image={item} title={'New Collection'} />
        )}
        keyExtractor={(item, index) => item + '_' + index * 10 + 10}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListHeaderComponent={() => (
          <SavedComponent
            style={{borderRadius: 10}}
            title={'Tüm Gönderiler'}
            listKey={'Tüm Gönderiler'}
          />
        )}
      />
    </View>
  );
}
