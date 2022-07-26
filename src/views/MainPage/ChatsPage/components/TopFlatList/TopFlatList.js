import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TopFlatList.styles';
import {Search} from '../../../../../components/Search';

export default function TopFlatList() {
  return (
    <View>
      <Search placeHolder={'Search'} endIcon={false} />
      <View style={styles.messagesContainer}>
        <Text style={styles.messagesText}>Messages</Text>
        <TouchableOpacity>
          <Text style={styles.requestsButton}>Requests</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
