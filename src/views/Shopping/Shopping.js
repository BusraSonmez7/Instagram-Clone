import React from 'react';
import {View} from 'react-native';

import {MenuProvider} from 'react-native-popup-menu';
import styles from './Shopping.styles';
import {Search} from '../../components/Search';
import {CategoryButtons} from './components/CategoryButtons';
import {Header} from './components/Header';
import {ProductList} from './components/ProductList';

export default function Shopping() {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        <Header />
        <Search placeHolder={'Search shops'} endIcon={false} />
        <CategoryButtons />
        <ProductList />
      </View>
    </MenuProvider>
  );
}
