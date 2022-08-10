import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Story.styles';

export default function Story(props) {
  const border = props.isBorder
    ? props.container_size - props.container_size / 15
    : props.container_size;

  const gradiantSize =
    props.type === 'my'
      ? props.container_size - props.container_size / 7.5
      : props.container_size;

  const image_size = props.container_size - props.container_size / 7.5;

  const color = props.watch
    ? ['#bc99ec', '#f10b6b', '#f15d0e', '#ef09a8', '#d509d3', '#f2ad08']
    : ['#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0'];
  const add_button = !props.isBorder ? props.container_size / 3.75 : 0;

  const AddStory = () => {
    return (
      <View
        style={[
          styles.addButton,
          {
            width: add_button,
            height: add_button,
            borderRadius: add_button / 2,
            left: props.container_size - add_button,
            top: props.container_size - add_button,
          },
        ]}>
        <Text
          style={[
            styles.addText,
            {
              width: add_button,
              height: add_button,
              borderRadius: add_button / 2,
            },
          ]}>
          +
        </Text>
      </View>
    );
  };

  const followStory = () => {
    props.navigation.navigate('FollowStory');
  };

  return (
    <View
      style={[
        styles.container,
        {width: props.container_size, height: props.container_size},
      ]}>
      <LinearGradient
        colors={color}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={[
          styles.borderGradient,
          {
            width: gradiantSize,
            height: gradiantSize,
            borderRadius: gradiantSize / 2,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            props.type === 'my' ? alert('follow story') : followStory();
          }}
          style={[
            styles.buttonContainer,
            {
              width: border,
              height: border,
              borderRadius: border / 2,
            },
          ]}>
          <Image
            source={{
              uri: props.image,
            }}
            style={{
              width: image_size,
              height: image_size,
              borderRadius: image_size / 2,
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
      {props.isStory && !props.isBorder ? <AddStory /> : null}
    </View>
  );
}
