import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Reels.styles';

export default function Story() {
  return (
    <View style={[styles.container, {width: 100, height: 100}]}>
      <LinearGradient
        colors={[
          '#bc99ec',
          '#f10b6b',
          '#f15d0e',
          '#ef09a8',
          '#d509d3',
          '#f2ad08',
        ]}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={[
          styles.borderGradient,
          {width: 75, height: 75, borderRadius: 75 / 2},
        ]}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {width: 70, height: 70, borderRadius: 70 / 2},
          ]}>
          <Image
            source={{
              uri: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
            }}
            style={{width: 65, height: 65, borderRadius: 65 / 2}}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
