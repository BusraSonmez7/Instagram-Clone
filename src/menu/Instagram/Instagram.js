import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Instagram.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {MenuProvider, renderers} from 'react-native-popup-menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import MenuItem from '../../components/MenuItem/MenuItem';

export default function Instagram() {
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.Popover}>
        <MenuTrigger>
          <View style={styles.headerTitle}>
            <Image
              source={require('../../../assets/images/instagram.png')}
              style={{
                width: 120,
                height: 40,
              }}
            />
            <Icon name="expand-more" size={25} style={styles.icon} />
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menu}>
          <MenuOption style={styles.itemBorder}>
            <MenuItem title={'Following'} icon={'person-add-alt'} />
          </MenuOption>
          <MenuOption>
            <MenuItem title={'Favorites'} icon={'star-border'} />
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
