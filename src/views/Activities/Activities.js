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
import activity_list from '../../data/activity_list';
import styles from './Activities.styles';
import {ActivityItem} from '../../components/ActivityItem';

export default function Activities() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Hareketlerini yönetmen için tek bir yer
          </Text>
          <Text style={styles.subTitle}>
            Instagram'daki fotoğraflarını, videolarını, hesabını ve
            hareketlerini gözden geçirmen ve yönetmen için daha fazla araç
            ekledik.
          </Text>
        </View>
        <FlatList
          data={activity_list}
          renderItem={({item}) => (
            <ActivityItem
              icon={item.icon}
              title={item.title}
              info={item.info}
            />
          )}
          keyExtractor={(item, index) => item + '_' + index}
        />
      </ScrollView>
    </View>
  );
}
