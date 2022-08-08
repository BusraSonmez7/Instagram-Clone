import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FavoriteStory.styles';
import {Story} from '../../../../components/Story';

export default function FavoriteStory() {
  const image =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  const circleView = () => {
    return (
      <View style={styles.favoriteStory}>
        <Story
          container_size={75}
          isBorder={true}
          isStory={false}
          image={image}
          watch={false}
        />
        <Text style={styles.favoriteStoryText}>Story name</Text>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.favoriteStoryContainer}>
        {circleView()}
      </TouchableOpacity>
    </View>
  );
}
