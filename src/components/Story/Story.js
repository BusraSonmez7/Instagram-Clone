import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Story.styles';

export default function Story(props) {
  const border = props.isBorder
    ? props.container_size - props.container_size / 15
    : props.container_size;

  const image_size = props.isBorder
    ? props.container_size - props.container_size / 7.5
    : props.container_size;

  return (
    <View
      style={[
        styles.container,
        {width: props.container_size, height: props.container_size},
      ]}>
      {console.log(border + 'dir.')}
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
          {
            width: props.container_size,
            height: props.container_size,
            borderRadius: props.container_size / 2,
          },
        ]}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {width: border, height: border, borderRadius: border / 2},
          ]}>
          <Image
            source={{
              uri: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
            }}
            style={{
              width: image_size,
              height: image_size,
              borderRadius: image_size / 2,
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
