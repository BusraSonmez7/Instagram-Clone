import React, {useState} from 'react';
import {View, TextInput, FlatList, Dimensions} from 'react-native';
import styles from './Messages.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {renderers} from 'react-native-popup-menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import ProfileImage from '../../data/profile_image';
import {PersonItem} from '../../components/PersonItem';
import {Search} from '../../components/Search';
import {colors} from '../../color';

const HEIGHT = Dimensions.get('window').height;

export default function Messages({type}) {
  const [searchText, setSearchText] = useState('Useless Text');

  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <View style={styles.headerTitle}>
            <Icon
              name="send"
              size={HEIGHT / 30}
              style={[
                styles.icon,
                {color: type === 'message' ? colors.black : colors.white},
              ]}
            />
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuContainer}>
          <MenuOption disabled>
            <View>
              <TextInput
                onChangeText={setSearchText}
                placeholder={'Write a message...'}
                style={styles.writeMessage}
              />
              <Search placeHolder={'Search'} endIcon={true} />

              <FlatList
                data={ProfileImage.slice(1, 5)}
                renderItem={item => (
                  <PersonItem
                    name={item.item.name + ' ' + item.item.surname}
                    image={item.item.image}
                    user_name={
                      item.item.name.toLowerCase() +
                      '_' +
                      item.item.surname.toLowerCase()
                    }
                    button={'Send'}
                    type={'send'}
                  />
                )}
                keyExtractor={(item, index) => {
                  item + '_' + index;
                }}
              />
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
