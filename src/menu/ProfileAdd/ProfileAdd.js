import React from 'react';
import {View, Text} from 'react-native';
import styles from './ProfileAdd.styles';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../color';
import {renderers} from 'react-native-popup-menu';
import {MenuItemIconText} from '../../components/MenuItemIconText';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function ProfileAdd() {
  const menuItem = (title, icon, color) => {
    return (
      <MenuOption style={styles.item}>
        <MenuItemIconText
          title={title}
          icon={icon}
          color={color}
          isBorder={true}
        />
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
          <MenuOption disabled style={styles.create}>
            <Text style={styles.createText}>Create</Text>
          </MenuOption>
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
