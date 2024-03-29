import React from 'react';
import {View, Image} from 'react-native';
import styles from './MainPageAdd.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {renderers} from 'react-native-popup-menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {MenuItem} from '../../components/MenuItem';

export default function MainPageAdd({image, name, watch}) {
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.Popover}>
        <MenuTrigger>
          <View style={styles.headerTitle}>
            <Image
              source={require('../../../assets/images/icons/add.png')}
              style={styles.imageIcon}
            />
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
