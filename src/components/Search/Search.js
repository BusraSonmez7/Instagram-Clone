import React, {useState} from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './Search.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../color';

export default function Search({placeHolder, endIcon}) {
  const [searchText, setSearchText] = useState('Useless Text');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name={'search'} size={25} style={styles.iconSearch} />
        <TextInput
          onChangeText={setSearchText}
          placeholder={placeHolder}
          placeholderTextColor={colors.search_text}
          style={styles.inputText}
        />
      </View>
      {endIcon ? <Icon name={'person-add-alt'} size={20} /> : null}
    </View>
  );
}
