import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Profile.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Story from '../../components/Story/Story';

export default function Profile() {
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.userNameContainer}>
          <Icon name="lock-outline" size={16} style={styles.iconLock} />
          <Text style={styles.userNameTitle}>kullanici_adi</Text>
          <Icon name="chevron-down" size={20} style={styles.iconArrowDown} />
          <Icon name="circle-medium" size={20} style={styles.iconCircle} />
        </View>
        <View style={styles.headerRightContainer}>
          <Icon
            name="plus-circle-outline"
            size={30}
            style={styles.iconRightHeader}
          />
          <Icon name="menu" size={30} style={styles.iconRightHeader} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <Story
            container_size={100}
            isBorder={false}
            isStory={false}
            image={profileImg}
          />
          {profileContent('XX', 'Gönderi')}
          {profileContent('XXX', 'Takipçi')}
          {profileContent('XXX', 'Takip')}
        </View>
      </ScrollView>
    </View>
  );
}
