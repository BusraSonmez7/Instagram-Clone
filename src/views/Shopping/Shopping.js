import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import {MenuProvider, renderers} from 'react-native-popup-menu';
import styles from './Shopping.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchView from '../../components/Search/Search';
import ShopCategory from '../../data/shop_category_list';
import ImageList from '../../data/product_image';
import ShoppingMenu from '../../menu/ShoppingMenu/ShoppingMenu';

export default function Shopping() {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  const header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Shop</Text>
        <View style={styles.headerIconContainer}>
          <Icon name={'bookmark-border'} size={30} style={styles.headerIcon} />
          <ShoppingMenu />
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

  const productList = () => {
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
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        {header()}
        {search()}
        {categoryButton()}
        {productList()}
      </View>
    </MenuProvider>
  );
}
