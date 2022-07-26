import React from 'react';
import {View} from 'react-native';
import styles from './ProfileMenu.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../color';

import {renderers} from 'react-native-popup-menu';

import {MenuItemIconText} from '../../components/MenuItemIconText';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function ProfileMenu() {
  const menuItem = (title, icon, color) => {
    return (
      <MenuOption style={styles.item}>
        <MenuItemIconText
          title={title}
          icon={icon}
          color={color}
          isBorder={false}
        />
      </MenuOption>
    );
  };
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <Icon name="menu" size={30} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          {menuItem('Settings', 'settings', colors.black)}
          {menuItem('Archive', 'history', colors.black)}
          {menuItem('Your activity', 'history-toggle-off', colors.black)}
          {menuItem('QR code', 'qr-code-scanner', colors.black)}
          {menuItem('Saved', 'bookmark-border', colors.black)}
          {menuItem('Close Friends', 'list', colors.black)}
          {menuItem('Favorites', 'star-outline', colors.black)}
          {menuItem(
            'COVID-19 Information Center',
            'volunteer-activism',
            colors.black,
          )}
        </MenuOptions>
      </Menu>
    </View>
  );
}
