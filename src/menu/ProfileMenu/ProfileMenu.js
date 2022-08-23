import React from 'react';
import {View, Image} from 'react-native';
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

export default function ProfileMenu({navigation}) {
  const selectItem = title => {
    switch (title) {
      case 'Settings':
        navigation.navigate('Settings');
        break;
      case 'Your activity':
        navigation.navigate('Activities');
        break;
      case 'Saved':
        navigation.navigate('Saved');
        break;
      case 'QR code':
        navigation.navigate('QRCodePage');
        break;
      default:
        alert('selam');
        break;
    }
  };

  const menuItem = (title, icon, color) => {
    return (
      <MenuOption style={styles.item} onSelect={() => selectItem(title)}>
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
          <Image
            source={require('../../../assets/images/icons/menu.png')}
            style={styles.imageIcon}
          />
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
