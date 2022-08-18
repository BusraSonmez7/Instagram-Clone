import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './Post.styles';

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}> Post </Text>
      </View>
    </View>
  );
}
