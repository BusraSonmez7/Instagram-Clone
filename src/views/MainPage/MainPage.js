import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './MainPage.styles';
import {Story} from '../../components/Story';
import profile_image from '../../data/profile_image';

export default function MainPage() {
  const StoryList = ({item}) => {
    console.log(item);
    return (
      <Story container_size={75} isBorder={true} isStory={true} image={item} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => null}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>Instagram</Text>
            <Icon name="expand-more" size={25} style={styles.headerTextIcon} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.headerIcons}>
          <Icon name="add-circle-outline" size={30} style={styles.headerIcon} />
          <Icon name="favorite-border" size={30} style={styles.headerIcon} />
          <Icon name="mail-outline" size={30} style={styles.headerIcon} />
        </View>
      </View>

      {/* <TouchableWithoutFeedback
          style={styles.headerTitle}
          onPress={() => null}>
          <Text style={styles.headerText}>Instagram</Text>
          <Icon name="expand-more" size={25} style={styles.headerTextIcon} />
        </TouchableWithoutFeedback> */}
      <View>
        <ScrollView horizontal>
          <Story
            container_size={75}
            isBorder={false}
            isStory={true}
            image={
              'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6'
            }
          />
          <FlatList
            data={profile_image}
            renderItem={item => StoryList(item)}
            horizontal
          />
        </ScrollView>
      </View>
    </View>
  );
}
