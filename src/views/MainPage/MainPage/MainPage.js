import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MenuProvider, renderers} from 'react-native-popup-menu';

import styles from './MainPage.styles';
import {Story} from '../../../components/Story';
import profile_image from '../../../data/profile_image';
import Sharing from '../../../components/Sharing/Sharing';
import Instagram from '../../../menu/Instagram/Instagram';
import AddMenu from '../../../menu/MainPageAdd/MainPageAdd';
import CircleComponent from '../../../components/CircleComponent/CircleComponent';

export default function MainPage() {
  const [logo, setLogo] = useState(false);

  const FollowerStoryList = ({item}) => {
    console.log(item);
    return (
      <Story
        container_size={75}
        isBorder={true}
        isStory={true}
        image={item.image}
        watch={item.watch}
      />
    );
  };

  const MyStory = () => {
    return (
      <Story
        container_size={75}
        isBorder={false}
        isStory={true}
        image={
          'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6'
        }
        watch={false}
      />
    );
  };

  const SharingList = () => {
    return <Sharing />;
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <Instagram />
        <View style={styles.headerIcons}>
          <AddMenu />
          <Icon name="favorite-border" size={30} style={styles.headerIcon} />
          <Icon name="mail-outline" size={30} style={styles.headerIcon} />
        </View>
      </View>
    );
  };

  return (
    <MenuProvider>
      <View style={styles.container}>
        {Header()}
        <ScrollView nestedScrollEnabled={true}>
          <FlatList
            style={styles.story}
            data={profile_image}
            renderItem={item => FollowerStoryList(item)}
            horizontal
            ListHeaderComponent={MyStory}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={profile_image}
            renderItem={item => SharingList()}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            style={{height: '100%', width: '100%'}}
          />
        </ScrollView>
      </View>
    </MenuProvider>
  );
}
