import React from 'react';
import {View} from 'react-native';
import styles from './MainPageRouter.styles';
import TopBarNavigator from '../../Navigators/MainPageMeterialTopTabs';

export default function MainPageRouter() {
  return (
    <View style={styles.container}>
      <View style={styles.topNavigatorContainer}>
        <TopBarNavigator />
      </View>
    </View>
  );
}
