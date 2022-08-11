import React from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './SavedComponent.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import productList from '../../data/product_image';
import {Story} from '../../components/Story';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default function SavedComponent({title, listKey, style}) {
  const collection = (item, index) => {
    const imageWidth =
      index % 2 === 0 ? (WIDTH / 2 - 30) / 1.9 : (WIDTH / 2 - 30) / 2.1;
    return (
      <View>
        <Image
          source={{uri: item}}
          style={[styles.image, {width: imageWidth}]}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={productList.slice(0, 4)}
        renderItem={({item, index}) => collection(item, index)}
        keyExtractor={(item, index) => item + '_' + index}
        listKey={listKey}
        numColumns={2}
        contentContainerStyle={[
          style,
          {
            borderRadius: 10,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: 'white',
            padding: 1,
          },
        ]}
      />

      <View style={styles.titleContainer}>
        {title === 'Ses' ? (
          <Icon name="music-note" size={15} style={styles.icon} />
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
