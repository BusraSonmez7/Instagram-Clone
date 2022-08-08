import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Comment.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Story} from '../Story';

export default function Comment({type}) {
  const border = type === 'my' ? 1 : 0;

  const image_url =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';
  return (
    <View style={[styles.container, {borderBottomWidth: border}]}>
      <Story
        container_size={35}
        isBorder={false}
        isStory={false}
        image={image_url}
      />
      <View style={styles.commentContainer}>
        <Text style={styles.userName}>
          user_name
          <Text style={styles.commentText}>
            {' '}
            Gönderi ile ilgili yorum bu text içine yazılacaktır.
          </Text>
        </Text>
        <View style={styles.commentButtons}>
          <TouchableOpacity>
            <Text style={styles.time}>1h</Text>
          </TouchableOpacity>
          {type === 'follow' ? (
            <View style={styles.commentButtons}>
              <TouchableOpacity>
                <Text style={styles.like}>3 beğenme</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.response}>Yanıtla</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.send}>Gönder</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
      {type === 'follow' ? (
        <Icon name="favorite-border" size={17} style={styles.likeIcon} />
      ) : null}
    </View>
  );
}
