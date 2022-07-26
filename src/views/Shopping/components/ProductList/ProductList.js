import React from 'react';
import {View, FlatList, Image} from 'react-native';

import styles from './ProductList.styles';
import ImageList from '../../../../data/product_image';

export default function ProductList() {
  return (
    <View style={styles.productListContainer}>
      <FlatList
        data={ImageList}
        renderItem={item => (
          <Image source={{uri: item.item}} style={styles.productImage} />
        )}
        keyExtractor={(data, index) => data + '' + index}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
