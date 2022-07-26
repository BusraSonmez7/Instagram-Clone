import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './UserName.styles';

import {renderers} from 'react-native-popup-menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import ProfileImage from '../../data/profile_image';
import {UserNameDropDown} from '../../components/UserNameDropDown';
import {AccountItem} from '../../components/AccountItem';
import {IconCircle} from '../../components/IconCircle';

const image_url =
  'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

export default function UserName() {
  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <UserNameDropDown />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          <MenuOption disabled>
            <View>
              <FlatList
                data={ProfileImage.slice(0, 2)}
                renderItem={item => (
                  <AccountItem
                    name={
                      item.item.name.toLocaleLowerCase() +
                      '_' +
                      item.item.surname.toLocaleLowerCase()
                    }
                    image={image_url}
                    select={item.item.select}
                  />
                )}
                keyExtractor={(item, index) => {
                  item + '_' + index;
                }}
              />
              <IconCircle title={'Add account'} icon={'add'} type={'profile'} />
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
