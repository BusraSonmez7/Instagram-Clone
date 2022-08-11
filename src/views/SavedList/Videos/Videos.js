import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Videos.styles';
import ReelsData from '../../../data/sharing_list';

export default function Videos() {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {ReelsData.map((data, index) => {
            return (
              <View>
                {data.type === 'video' ? (
                  <View>
                    <Image source={data.images} style={styles.image} />
                    <Icon name={'play-arrow'} size={20} style={styles.icon} />
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
