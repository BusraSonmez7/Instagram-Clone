import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Story} from '../Story';
import styles from './Sharing.styles';
import {Messages} from '../../menu/Messages';

const WIDTH = Dimensions.get('window').width;

const image_url =
  'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

export default function Sharing({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <Story
            container_size={35}
            isBorder={false}
            isStory={false}
            image={image_url}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('FollowProfile')}>
            <Text style={styles.headerText}>songul_yilmaz</Text>
          </TouchableOpacity>
        </View>
        <Icon name={'more-vert'} size={25} style={styles.icon} />
      </View>
      <Image
        source={{
          uri: image_url,
        }}
        style={[styles.image, {height: 300, width: WIDTH}]}
      />
      <View style={styles.iconsContainer}>
        <View style={styles.iconsContainerStart}>
          <Icon name={'favorite-border'} size={25} style={styles.icon} />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Comments')}>
            <Icon name={'chat-bubble-outline'} size={25} style={styles.icon} />
          </TouchableOpacity>
          <Messages type={'message'} />
        </View>
        <Icon name={'bookmark-border'} size={25} style={styles.icon} />
      </View>
      <Text numberOfLines={1} style={styles.likeBold}>
        yazilim ve diğerleri beğendi
      </Text>
      <Text numberOfLines={1} style={styles.userName}>
        songul_yilmaz
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Comments')}>
        <Text style={styles.commentButton}>78 yorumun tümünü gör</Text>
      </TouchableOpacity>
      <View style={styles.addComment}>
        <Story
          isBorder={false}
          isStory={false}
          container_size={35}
          image={image_url}
        />
        <Text style={styles.commentText}>Yorum Ekle...</Text>
      </View>
      <Text style={styles.dateText}>17 saat önce</Text>
    </View>
  );
}
