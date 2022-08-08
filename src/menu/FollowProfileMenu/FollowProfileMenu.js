import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './FollowProfileMenu.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {renderers} from 'react-native-popup-menu';

import data from '../../data/follow_profile_menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function FollowProfileMenu() {
  const menuItem = ({item}) => {
    return (
      <MenuOption style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </MenuOption>
    );
  };
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <Icon name="more-vert" size={25} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          <FlatList data={data} renderItem={item => menuItem(item)} />
        </MenuOptions>
      </Menu>
    </View>
  );
}
