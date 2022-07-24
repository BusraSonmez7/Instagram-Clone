import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './ReelsMenu.styles';
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

export default function ReelsMenu() {
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <Icon name="more-vert" size={HEIGHT / 30} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          <View style={styles.circleRow}>
            <MenuOption>
              <CircleComponent title={'Share'} icon={'share'} />
            </MenuOption>
            <MenuOption>
              <CircleComponent title={'Link'} icon={'link'} />
            </MenuOption>
            <MenuOption>
              <CircleComponent title={'Save'} icon={'bookmark-border'} />
            </MenuOption>
            <MenuOption>
              <CircleComponent title={'Remix'} icon={'repeat'} />
            </MenuOption>
          </View>
          <View>
            <MenuOption>
              <MenuItemIconText
                title={'Not Interested'}
                icon={'eye-off-outline'}
                color={colors.black}
              />
            </MenuOption>
            <MenuOption>
              <MenuItemIconText
                title={'Report...'}
                icon={'comment-alert-outline'}
                color={colors.red}
              />
            </MenuOption>
          </View>
        </MenuOptions>
      </Menu>
    </View>
  );
}
