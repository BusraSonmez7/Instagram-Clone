import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './Videos.styles';
import ReelsData from '../../../data/sharing_list';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
