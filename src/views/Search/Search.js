import React from 'react';
import {View, ScrollView, Animated} from 'react-native';

import styles from './Search.styles';
import {SearchPage} from '../../components/SearchPage';
import SearchView from '../../components/Search/Search';

export default function Search() {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}>
        <View style={styles.searchContainer}>
          <SearchView placeHolder={'Search'} endIcon={false} />
        </View>
        <SearchPage />
      </ScrollView>
    </View>
  );
}
