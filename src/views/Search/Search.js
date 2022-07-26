import React, {useState} from 'react';
import {View, ScrollView, TextInput} from 'react-native';

import styles from './Search.styles';
import SearchComponent from '../../components/SearchPage/SearchPage';
import SearchView from '../../components/Search/Search';

export default function Search() {
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <SearchView placeHolder={'Search'} endIcon={false} />
        <SearchComponent />
      </ScrollView>
    </View>
  );
}
