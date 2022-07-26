import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './SeeAccountActivity.styles';

export default function SeeAccountActivity({title, accountName}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/tick.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>{title}</Text>
          <TouchableOpacity>
            <Text style={styles.textBottom}>
              See new activity for {accountName}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
