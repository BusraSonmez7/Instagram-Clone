import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './Messages.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {MenuProvider, renderers} from 'react-native-popup-menu';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import ProfileImage from '../../data/profile_image';
import PersonItem from '../../components/PersonItem/PersonItem';
import Search from '../../components/Search/Search';

const HEIGHT = Dimensions.get('window').height;

const image_url =
  'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

export default function Messages({image, name, watch}) {
  const [searchText, setSearchText] = useState('Useless Text');

  return (
    <View style={styles.container}>
      <Menu renderer={renderers.SlideInMenu}>
        <MenuTrigger>
          <View style={styles.headerTitle}>
            <Icon name="send" size={HEIGHT / 30} style={styles.icon} />
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
              />
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
}
