import React, {useState, useEffect} from 'react';
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
import Sharing from '../../components/Sharing/Sharing';

export default function MainPage() {
  const [modalVisible, setModalVisible] = useState(true);

  const FollowerStoryList = ({item}) => {
    console.log(item);
    return (
      <Story container_size={75} isBorder={true} isStory={true} image={item} />
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
      />
    );
  };

  const SharingList = () => {
    return <Sharing />;
  };

  const InstagramModalComponent = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        {console.log('modal: ' + modalVisible)}
        <View style={styles.instagramModalContainer}>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.instagramModalView}>
              <Text style={styles.instagramModalText}>Takip Edilenler</Text>
              <Icon name="person" size={20} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.instagramModalView}>
              <Text style={styles.instagramModalText}>Favoriler</Text>
              <Icon name="star" size={20} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        {console.log('view: ' + modalVisible)}
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
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
    );
  };

  return (
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
  );
}
