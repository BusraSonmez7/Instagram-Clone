import React, {useState} from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Search.styles';
import SearchComponent from '../../components/SearchComponent/SerachComponent';

export default function Search() {
  const [searchText, setSearchText] = useState('Useless Text');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <Icon name={'search'} size={20} />
          <TextInput onChangeText={setSearchText} placeholder="Ara" />
        </View>
        <SearchComponent />
      </ScrollView>
    </View>
  );
}
