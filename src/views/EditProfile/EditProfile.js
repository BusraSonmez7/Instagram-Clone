import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './EditProfile.styles';
import {Header} from './components/Header';
import {ProfilePhoto} from './components/ProfilePhoto';
import {Information} from './components/Information';
import {BlueButton} from './components/BlueButton';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <ProfilePhoto />
        <Information title={'Ad'} info={'Büşra Sönmez'} />
        <Information title={'Kullanıcı adı'} info={'busrasonmez6'} />
        <Information title={'İnternet Sitesi'} info={' '} />
        <Information
          title={'Biyografi'}
          info={'Bilgisayar Mühendisi\n"Sevgi akıldan üstündür.."'}
        />
        <View style={styles.buttonsContainer}>
          <BlueButton title={'Profesyonel Hesaba Geçiş Yap'} />
          <BlueButton title={'Avatar Oluştur'} />
          <BlueButton title={'Kişisel bilgi ayarları'} />
        </View>
      </ScrollView>
    </View>
  );
}
