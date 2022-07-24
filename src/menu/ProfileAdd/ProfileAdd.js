import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './ProfileAdd.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../color';

import {MenuProvider, renderers} from 'react-native-popup-menu';

import MenuItemIconText from '../../components/MenuItemIconText/MenuItemIconText';
import MenuList from '../../data/menuList';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import CircleComponent from '../../components/CircleComponent/CircleComponent';

const HEIGHT = Dimensions.get('window').height;

export default function ProfileAdd() {
  const menuItem = (title, icon, color) => {
    return (
      <MenuOption style={styles.item}>
        <MenuItemIconText title={title} icon={icon} color={color} />
      </MenuOption>
    );
  };
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <Icon2 name="plus-circle-outline" size={30} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          {menuItem('Reel', 'slideshow', colors.black)}
          {menuItem('Post', 'grid-on', colors.black)}
          {menuItem('Story', 'add-circle-outline', colors.black)}
          {menuItem('Story Highlight', 'arrow-circle-up', colors.black)}
          {menuItem('Live', 'stream', colors.black)}
          {menuItem('Guide', 'receipt-long', colors.black)}
        </MenuOptions>
      </Menu>
    </View>
  );
}
