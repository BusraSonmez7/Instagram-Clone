import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {colors} from '../../color';

import styles from './Settings.styles';
import setting_list from '../../data/settings_list';
import {Header} from '../../components/Header';
import {MenuItemIconText} from '../../components/MenuItemIconText';
import {Search} from '../../components/Search';

export default function Settings() {
  const settingList = item => {
    return (
      <View style={styles.settingItemContainer}>
        <TouchableOpacity activeOpacity={1}>
          <MenuItemIconText
            title={item.title}
            icon={item.icon}
            color={colors.black}
            isBorder={false}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Search placeHolder={'Ara'} endIcon={false} />
        <FlatList
          data={setting_list}
          renderItem={({item}) => settingList(item)}
        />
        <Image
          source={require('../../../assets/images/meta.png')}
          style={styles.meta}
        />
        <TouchableOpacity>
          <Text style={styles.blueButton}>Hesaplar Merkezi</Text>
        </TouchableOpacity>
        <Text style={styles.info}>
          Hikaye ve gönderi paylaşımı ve giriş yapma dahil Instagram, Facebook
          uygulaması ve Messenger arasındaki bağlantılı deneyimler için ayarları
          kontrol et.
        </Text>
        <Text style={styles.entries}>Girişler</Text>
        <TouchableOpacity>
          <Text style={styles.blueButton}>Hesap Ekle veya Değiştir</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.blueButton}>user_name'den Çıkış Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.blueButton}>Tüm Hesaplardan Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
