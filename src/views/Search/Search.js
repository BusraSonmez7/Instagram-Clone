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
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: 30}}}])}>
        <SearchView placeHolder={'Search'} endIcon={false} />
        <SearchPage />
      </ScrollView>
    </View>
  );
}
