import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './Reels.styles';
import ReelsData from '../../../data/sharing_list';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Reels() {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {ReelsData.map((data, index) => {
            return (
              <View>
                {data.type === 'reels' ? (
                  <View>
                    <Image source={data.images} style={styles.image} />
                    <View style={styles.iconContainer}>
                      <Icon name={'play-arrow'} size={20} style={styles.icon} />
                      <Text style={styles.text}>952k</Text>
                    </View>
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
