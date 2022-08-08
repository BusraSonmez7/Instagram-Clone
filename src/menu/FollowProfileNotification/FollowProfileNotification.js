import React, {useState, useEffect} from 'react';
import {View, Switch, Text, TouchableOpacity} from 'react-native';
import styles from './FollowProfileNotification.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../../data/follow_notification';
import {renderers} from 'react-native-popup-menu';
import {colors} from '../../color';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function FollowProfileNotification() {
  const [isEnabled, setIsEnabled] = useState([
    {id: 0, active: true},
    {id: 1, active: false},
    {id: 2, active: true},
    {id: 3, active: true},
  ]);
  const toggleSwitch = index =>
    setIsEnabled(
      isEnabled.map(item =>
        item.id === index ? {...item, active: !item.active} : {...item},
      ),
    );

  const menuItem = (index, type) => {
    return (
      <MenuOption style={styles.itemContainer}>
        <View style={styles.item}>
          <Text style={styles.itemText}>{data[index].title}</Text>
          {type ? (
            <Switch
              trackColor={{
                false: colors.switch_dark_gray,
                true: colors.switch_ligh_blue,
              }}
              thumbColor={
                isEnabled[index].active
                  ? colors.switch_dark_blue
                  : colors.switch_white
              }
              onValueChange={() => toggleSwitch(index)}
              value={isEnabled[index].active}
            />
          ) : (
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.bottomItem}>
                <Text style={styles.nextText}>Bazıları</Text>
                <Icon
                  name="arrow-forward-ios"
                  size={20}
                  style={styles.nextIcon}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </MenuOption>
    );
  };
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <Icon name="notifications-none" size={30} style={styles.icon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          <Text style={styles.title}>Bildirimler</Text>
          {menuItem(0, true)}
          {menuItem(1, true)}
          {menuItem(2, true)}
          {menuItem(3, true)}
          {menuItem(4, false)}
        </MenuOptions>
      </Menu>
    </View>
  );
}
