import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../color';

import MainPage from '../views/MainPage/MainPage/MainPage';
import Chats from '../views/MainPage/ChatsPage/Chats';
import Camera from '../views/Camera/Camera';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainPage"
      tabBarOptions={{
        style: {backgroundColor: colors.white, height: 0},
      }}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return <MyTabs />;
}
