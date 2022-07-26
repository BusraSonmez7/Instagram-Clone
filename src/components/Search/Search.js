import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './Search.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Search({placeHolder, endIcon}) {
  const [searchText, setSearchText] = useState('Useless Text');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name={'search'} size={20} />
        <TextInput onChangeText={setSearchText} placeholder={placeHolder} />
      </View>
      {endIcon ? <Icon name={'person-add-alt'} size={20} /> : null}
    </View>
  );
}
