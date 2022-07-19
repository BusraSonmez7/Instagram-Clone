import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Search from '../views/Search/Search';
import MainPage from '../views/MainPage/MainPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../color';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        labelStyle: {fontSize: 12},
        style: {backgroundColor: colors.white},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'MainPage':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'person';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.black,
          height: 1.5,
        },
        tabBarPressColor: 'white',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarOptions: {
            style: {backgroundColor: 'yellow', height: 100},
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return <MyTabs />;
}
