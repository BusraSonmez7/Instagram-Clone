import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainPage from './src/views/MainPage/MainPage';
import Search from './src/views/Search/Search';
import Reels from './src/views/Reels/Reels';
import Shopping from './src/views/Shopping/Shopping';
import Profile from './src/views/Profile/Profile';
import {colors} from './src/color';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Search':
                  iconName = 'search';
                  break;
                case 'Reels':
                  iconName = 'video-library';
                  break;
                case 'Shopping':
                  iconName = 'local-mall';
                  break;
                case 'Profile':
                  iconName = 'person';
                  break;
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.inactiveColor,
          })}>
          <Tab.Screen
            name="Home"
            component={MainPage}
            options={{tabBarLabel: '', headerShown: false}}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{tabBarLabel: '', headerShown: false}}
          />
          <Tab.Screen
            name="Reels"
            component={Reels}
            options={{tabBarLabel: '', headerShown: false}}
          />
          <Tab.Screen
            name="Shopping"
            component={Shopping}
            options={{tabBarLabel: '', headerShown: false}}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{tabBarLabel: '', headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
