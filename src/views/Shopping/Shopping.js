import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Shopping.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchView from '../../components/Search/Search';
import ShopCategory from '../../data/shop_category_list';

export default function Shopping() {
  const header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Shop</Text>
        <View style={styles.headerIconContainer}>
          <Icon name={'bookmark-border'} size={30} style={styles.headerIcon} />
          <Icon name={'menu'} size={30} style={styles.headerIcon} />
        </View>
      </View>
    );
  };

  const search = () => {
    return <SearchView placeHolder={'Search shops'} />;
  };

  const categoryButton = () => {
    return (
      <View style={styles.categoryListContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}>
          {ShopCategory.map((data, index) => {
            {
              console.log(data);
            }
            return (
              <TouchableOpacity style={styles.categoryButtonContainer}>
                <Text style={styles.categoryButtonText}>{data}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {header()}
      {search()}
      {categoryButton()}
    </View>
  );
}
