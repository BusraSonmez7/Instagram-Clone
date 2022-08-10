import React from 'react';
import {Story} from '../../../../../components/Story';

export default function FollowerStoryList({item, navigation}) {
  return (
    <Story
      container_size={75}
      isBorder={true}
      isStory={true}
      image={item.image}
      watch={item.watch}
      navigation={navigation}
    />
  );
}
