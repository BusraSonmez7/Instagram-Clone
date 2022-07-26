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
              <View style={styles.bottomContainer}>
                <Icon2
                  name={'eye-off-outline'}
                  size={30}
                  style={styles.menuIconFirst}
                />
                <Text style={styles.bottomText}>Not Interested</Text>
              </View>
            </MenuOption>
            <MenuOption>
              <View style={styles.bottomContainer}>
                <Icon2
                  name={'comment-alert-outline'}
                  size={30}
                  style={[styles.menuIconFirst, {color: colors.red}]}
                />
                <Text style={[styles.bottomText, {color: colors.red}]}>
                  Report...
                </Text>
              </View>
            </MenuOption>
          </View>
        </MenuOptions>
      </Menu>
    </View>
  );
}
