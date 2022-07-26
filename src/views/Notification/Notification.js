import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';

import styles from './Notification.styles';
import {IconAndActivity} from '../../components/IconAndActivity';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCircle from '../../components/IconCircle/IconCircle';
import IconAndInformationCircle from '../../components/SeeAccountActivity/SeeAccountActivity';
import PersonItem from '../../components/PersonItem/PersonItem';
import ProfileImage from '../../data/profile_image';

export default function Notification() {
  const header = () => {
    return (
      <View style={styles.header}>
        <Icon name="keyboard-backspace" size={35} style={styles.headerIcon} />
        <Text style={styles.headerText}>Activity</Text>
      </View>
    );
  };

  const title = text => {
    return <Text style={styles.title}>{text}</Text>;
  };

  const flatListHead = () => {
    return (
      <View>
        {header()}
        <IconCircle
          title={'Follow requests'}
          icon={'person-add-alt'}
          type={'notification'}
        />
        <IconAndInformationCircle
          title={"You're all caught up"}
          icon={'person-add-alt'}
          accountName={'account_name'}
        />
        {title('This Month')}
        <IconAndActivity
          title={
            '723 people created reels using audio you saved, user_name by update post'
          }
          icon={'person-add-alt'}
          type={'icon'}
        />
        {title('Suggestions for you')}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ProfileImage}
        renderItem={item => (
          <PersonItem
            name={
              item.item.name.toLowerCase() +
              '_' +
              item.item.surname.toLowerCase()
            }
            image={item.item.image}
            user_name={item.item.name + ' ' + item.item.surname}
            button={'Send'}
            type={'follow'}
            information={'Followed by user_name'}
          />
        )}
        ListHeaderComponent={flatListHead}
      />
    </View>
  );
}
