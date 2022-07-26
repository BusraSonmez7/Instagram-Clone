import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import styles from './Profile.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MenuProvider, renderers} from 'react-native-popup-menu';

import Story from '../../components/Story/Story';
import NewPersonComponent from '../../components/NewPersonComponent/NewPersonComponent';
import ProfileImage from '../../data/profile_image';
import TopBarNavigator from '../../Navigators/ProfileMeterialTopTabs';
import UserName from '../../menu/UserName/UserName';

import ProfileAdd from '../../menu/ProfileAdd/ProfileAdd';
import {colors} from '../../color';
import ProfileMenu from '../../menu/ProfileMenu/ProfileMenu';

export default function Profile() {
  const menuProviderStyles = {
    backdrop: styles.backdrop,
  };

  const HEIGHT = Dimensions.get('window').height;
  const profileImg =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  const [favoriteStoryVisible, setFavoriteStoryVisible] = useState(false);

  const header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.userNameContainer}>
          <Icon name="lock-outline" size={16} style={styles.iconLock} />
          <UserName />
        </View>
        <View style={styles.headerRightContainer}>
          <ProfileAdd />
          <ProfileMenu />
        </View>
      </View>
    );
  };

  const profileImage = () => {
    return (
      <View style={styles.profileImageContainer}>
        <Story
          container_size={90}
          isBorder={false}
          isStory={false}
          image={profileImg}
          watch={false}
        />
        {profileContent('XX', 'Gönderi')}
        {profileContent('XXX', 'Takipçi')}
        {profileContent('XXX', 'Takip')}
      </View>
    );
  };

  const circleView = () => {
    return <View style={styles.circle}></View>;
  };
  const circleAddView = () => {
    return (
      <View style={styles.addHistoryContainer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.circleAdd}>
          <Icon name="plus" size={30} style={styles.plusIcon} />
        </TouchableOpacity>
        <Text style={styles.addHistoryNewText}>Yeni</Text>
      </View>
    );
  };

  const profileContent = (number, content) => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.contentNumber}>{number}</Text>
        <Text style={styles.contentType}>{content}</Text>
      </View>
    );
  };

  const profilDetail = () => {
    return (
      <View>
        <Text style={styles.name}>Ad Soyad</Text>
        <TouchableOpacity style={styles.setStatusContainer}>
          <Icon name="plus" size={16} style={styles.iconStatus} />
          <Text style={styles.setStatus}>Durumu Ayarla</Text>
        </TouchableOpacity>
        <Text style={styles.explanation}>Açıklama eklenecek</Text>
        <View style={styles.editProfileContainer}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editText}>Profili Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfileIcon}>
            <Icon name="account-plus" size={18} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const newPerson = () => {
    return (
      <View>
        <View style={styles.newPersonContainer}>
          <Text style={styles.newPersonText}>Yeni İnsanlar Keşfet</Text>
          <TouchableOpacity activeOpacity={0.9}>
            <Text style={styles.newPersonButtonText}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={ProfileImage}
          renderItem={item => <NewPersonComponent image={item.item.image} />}
          showsHorizontalScrollIndicator={false}
          style={{marginStart: 10}}
        />
      </View>
    );
  };
  const favoriteStory = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.favoriteStoryContainer}
          onPress={() => setFavoriteStoryVisible(!favoriteStoryVisible)}>
          <Text style={styles.favoriteStoryText}>Hikayelerde Öne Çıkanlar</Text>
          <Icon
            name="chevron-down"
            size={18}
            style={styles.iconFavoriteStory}
          />
        </TouchableOpacity>
        {favoriteStoryVisible ? favoriteStoryDown() : null}
      </View>
    );
  };

  const favoriteStoryDown = () => {
    return (
      <View>
        <Text style={styles.favoriteStoryDownText}>
          Favori hikayelerini profilinde tut
        </Text>

        <View style={styles.circleContainer}>
          {circleAddView()}
          {circleView()}
          {circleView()}
          {circleView()}
        </View>
      </View>
    );
  };

  return (
    <MenuProvider customStyles={menuProviderStyles}>
      <View style={styles.container}>
        {header()}

        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={{Height: 'auto'}}>
            {profileImage()}
            {profilDetail()}
            {newPerson()}
            {favoriteStory()}
            <View style={styles.topNavigatorContainer}>
              <TopBarNavigator />
            </View>
          </View>
        </ScrollView>
      </View>
    </MenuProvider>
  );
}
