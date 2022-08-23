import React from 'react';
import {View, Text} from 'react-native';

import styles from './ProfileImageRow.styles';
import {Story} from '../../../../components/Story';

export default function ProfileImageRow() {
  const profileImg =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  const profileContent = (number, content) => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.contentNumber}>{number}</Text>
        <Text style={styles.contentType}>{content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.profileImageContainer}>
      <Story
        container_size={90}
        isBorder={true}
        isStory={false}
        image={profileImg}
        watch={false}
      />
      {profileContent('45', 'Gönderi')}
      {profileContent('381', 'Takipçi')}
      {profileContent('353', 'Takip')}
    </View>
  );
}
