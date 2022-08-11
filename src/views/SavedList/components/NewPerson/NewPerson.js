import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './NewPerson.styles';
import ProfileImage from '../../../../data/profile_image';
import {NewPersonComponent} from '../../../../components/NewPersonComponent';

export default function NewPerson() {
  return (
    <View>
      <View style={styles.newPersonContainer}>
        <Text style={styles.newPersonText}>Yeni İnsanlar Keşfet</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.newPersonButtonText}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={ProfileImage}
        renderItem={({item}) => <NewPersonComponent item={item} />}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        keyExtractor={(item, index) => {
          item + '_' + index;
        }}
      />
    </View>
  );
}
