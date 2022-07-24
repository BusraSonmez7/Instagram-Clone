import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './MainPageAdd.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {MenuProvider, renderers} from 'react-native-popup-menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import MenuItem from '../../components/MenuItem/MenuItem';

export default function MainPageAdd({image, name, watch}) {
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.Popover}>
        <MenuTrigger>
          <View style={styles.headerTitle}>
            <Icon name="add-circle-outline" size={30} style={styles.icon} />
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menu}>
          <MenuOption style={styles.menuItem}>
            <MenuItem title={'Post'} icon={'grid-on'} />
          </MenuOption>
          <MenuOption style={styles.menuItem}>
            <MenuItem title={'Story'} icon={'add-circle-outline'} />
          </MenuOption>
          <MenuOption style={styles.menuItem}>
            <MenuItem title={'Reel'} icon={'slideshow'} />
          </MenuOption>
          <MenuOption style={styles.menuItem}>
            <MenuItem title={'Live'} icon={'stream'} />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
