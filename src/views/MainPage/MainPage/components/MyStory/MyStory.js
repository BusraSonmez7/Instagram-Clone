import React from 'react';
import {Story} from '../../../../../components/Story';

export default function MyStory({navigation}) {
  const image =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  return (
    <Story
      container_size={75}
      isBorder={true}
      isStory={true}
      image={image}
      watch={false}
      navigation={navigation}
      type="my"
    />
  );
}
