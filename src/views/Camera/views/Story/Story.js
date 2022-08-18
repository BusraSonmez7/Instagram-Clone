import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Story.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="settings" size={35} style={styles.headerIcon} />
        <Icon name="flash-off" size={35} style={styles.headerIcon} />
        <Icon name="close" size={35} style={styles.headerIcon} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomIcons}>
          <Text style={styles.leftText}>Aa</Text>
          <Icon name="all-inclusive" size={25} style={styles.leftIcon} />
          <Icon name="auto-awesome-mosaic" size={25} style={styles.leftIcon} />
          <Icon name="expand-more" size={25} style={styles.leftIcon} />
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}></View>
          </View>
        </View>
      </View>
    </View>
  );
}
