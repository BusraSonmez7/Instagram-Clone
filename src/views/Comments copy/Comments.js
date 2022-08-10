import React from 'react';
import {View, FlatList} from 'react-native';

import styles from './Comments.styles';
import {Comment} from '../../components/Comment';
import {Header} from './components/Header';
import {AddComment} from './components/AddComment';

export default function Comments() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={() => <Comment type={'follow'} isComment={true} />}
        keyExtractor={(item, index) => item + '_' + index}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Comment type={'my'} />}
      />
      <AddComment />
    </View>
  );
}
