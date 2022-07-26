import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Chats.styles';
import UserNameHeader from '../../../components/UserNameDropDown/UserNameDropDown';
import SearchView from '../../../components/Search/Search';
import ChatComponent from '../../../components/ChatComponent/ChatComponent';
import ProfileData from '../../../data/profile_image';
export default function Chats() {
  const header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerBackContainer}>
          <Icon name="keyboard-backspace" size={30} style={styles.iconHeader} />
          <View>
            <UserNameHeader />
            <Text>Set a status</Text>
          </View>
        </View>
        <View style={styles.iconHeaderContainer}>
          <Icon name="video-call" size={30} style={styles.iconHeader} />
          <Icon
            name="add"
            size={30}
            style={[styles.iconHeader, {marginEnd: 10}]}
          />
        </View>
      </View>
    );
  };

  const topFlatList = () => {
    return (
      <View>
        <SearchView placeHolder={'Search'} endIcon={false} />
        <View style={styles.messagesContainer}>
          <Text style={styles.messagesText}>Messages</Text>
          <TouchableOpacity>
            <Text style={styles.requestsButton}>Requests</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {header()}

      <FlatList
        data={ProfileData}
        renderItem={({item}) => (
          <ChatComponent
            image={item.image}
            name={item.name + ' ' + item.surname}
            watch={item.watch}
          />
        )}
        keyExtractor={(item, index) => item + '' + index}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={topFlatList()}
      />
    </View>
  );
}
