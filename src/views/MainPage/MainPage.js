import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity as TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './MainPage.styles';
import {Story} from '../../components/Story';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          style={styles.headerTitle}
          onPress={() => null}>
          <Text style={styles.headerText}>Instagram</Text>
          <Icon name="expand-more" size={25} style={styles.headerTextIcon} />
        </TouchableWithoutFeedback>
        <View style={styles.headerIcons}>
          <Icon name="add-circle-outline" size={30} style={styles.headerIcon} />
          <Icon name="favorite-border" size={30} style={styles.headerIcon} />
          <Icon name="mail-outline" size={30} style={styles.headerIcon} />
        </View>
      </View>
      <Story container_size={75} isBorder={true} />
    </View>
  );
}
