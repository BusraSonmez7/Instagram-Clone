import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PersonItem.styles';
import {Story} from '../../components/Story';

export default function PersonItem({
  image,
  name,
  user_name,
  button,
  type,
  information,
}) {
  return (
    <View style={styles.container}>
      <Story
        container_size={60}
        isBorder={false}
        isStory={false}
        image={image}
        watch={false}
      />
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>{name}</Text>

        <Text style={styles.endMessage}>{user_name}</Text>
        {type === 'follow' ? (
          <Text style={styles.information}>{information}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.send}>
        <Text style={styles.sendText}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
}
