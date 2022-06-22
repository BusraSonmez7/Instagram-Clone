import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MainPage() {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{fontFamily: 'DancingScript-Bold'}}>Instagram</Text>
        <Icon name="home" size={30} />
      </TouchableOpacity>
    </View>
  );
}
