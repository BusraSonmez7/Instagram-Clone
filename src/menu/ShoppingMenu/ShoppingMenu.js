import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './ShoppingMenu.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../color';

import {MenuProvider, renderers} from 'react-native-popup-menu';

import MenuItemIconText from '../../components/MenuItemIconText/MenuItemIconText';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import CircleComponent from '../../components/CircleComponent/CircleComponent';

const HEIGHT = Dimensions.get('window').height;

export default function ShoppingMenu() {
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
          <Icon2 name="menu" size={30} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          <MenuOption disabled style={styles.create}>
            <Text style={styles.createText}>Your account</Text>
          </MenuOption>
          {menuItem('Shopping activity', 'notifications-none', colors.black)}
          <MenuOption disabled style={styles.create}>
            <Text style={styles.createText}>Instagram Shop</Text>
          </MenuOption>
          <MenuOption style={styles.create}>
            <Text style={styles.itemText}>Shops</Text>
          </MenuOption>
          <MenuOption style={styles.create}>
            <Text style={styles.itemText}>Videos</Text>
          </MenuOption>
          <MenuOption style={styles.create}>
            <Text style={styles.itemText}>Editors' picks</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
