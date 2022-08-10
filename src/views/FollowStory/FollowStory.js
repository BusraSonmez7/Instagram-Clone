import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './FollowStory.styles';
import {Story} from '../../components/Story';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WIDTH = Dimensions.get('window').width;

export default function FollowStory() {
  const [searchText, setSearchText] = useState('Useless Text');

  const image =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://marketplace.canva.com/EAFBKiGTHI0/1/0/900w/canva-sar%C4%B1-ve-siyah-minimalist-g%C3%BCne%C5%9F-sistemi-hayal-motivasyon-s%C3%B6z%C3%BC-telefon-arka-plan%C4%B1-tGRVkB5m-XA.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.storyView}>
        <Progress.Bar
          progress={0}
          width={WIDTH - 20}
          height={1}
          color={'white'}
          style={styles.progressBar}
        />
        <View style={styles.topTitleContainer}>
          <View style={styles.userNameContainer}>
            <Story
              container_size={35}
              isBorder={false}
              isStory={false}
              image={image}
              watch={true}
            />
            <Text style={styles.userName}>user_name</Text>
            <Text style={styles.time}>16s</Text>
          </View>
          <Icon name="more-vert" size={20} style={styles.menuIcon} />
        </View>
      </View>
      <View style={styles.clickContainer}>
        <TouchableOpacity
          style={styles.leftClick}
          onPress={() => alert('sol')}></TouchableOpacity>
        <TouchableOpacity
          style={styles.rightClick}
          onPress={() => alert('sağ')}></TouchableOpacity>
      </View>
      <View style={styles.messageContainer}>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.sendMessageText}>Mesak gönder</Text>
        </TouchableOpacity>
        <View style={styles.sendIconContainer}>
          <Icon name="favorite-outline" size={25} style={styles.sendIcon} />
          <Icon name="send" size={25} style={styles.sendIcon} />
        </View>
      </View>
    </View>
  );
}
