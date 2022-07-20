import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './Serach.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Search({placeHolder}) {
  const [searchText, setSearchText] = useState('Useless Text');
  return (
    <View style={styles.searchContainer}>
      <Icon name={'search'} size={20} />
      <TextInput onChangeText={setSearchText} placeholder={placeHolder} />
    </View>
  );
}
