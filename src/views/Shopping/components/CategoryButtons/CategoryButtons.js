import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './CategoryButtons.styles';
import ShopCategory from '../../../../data/shop_category_list';

export default function CategoryButtons() {
  return (
    <View style={styles.categoryListContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}>
        {ShopCategory.map((data, index) => {
          return (
            <TouchableOpacity style={styles.categoryButtonContainer}>
              <Text style={styles.categoryButtonText}>{data}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
