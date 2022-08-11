import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../color';

import {Reels} from '../views/SavedList/Reels';
import {Sharing} from '../views/SavedList/Sharing';
import {Search} from '../views/Search';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Sharing"
      tabBarOptions={{
        style: {backgroundColor: colors.white},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Sharing':
              iconName = 'grid-on';
              break;
            case 'Reels':
              iconName = 'video-library';
              break;
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.black,
          height: 1.5,
        },
        tabBarPressColor: colors.white,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.inactiveColor,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Sharing" component={Sharing} />
      <Tab.Screen name="Reels" component={Reels} />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return <MyTabs />;
}
