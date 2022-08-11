import React from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './Collection.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import productList from '../../data/product_image';
import {Story} from '../../components/Story';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default function Collection({image, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
