import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainPage from './src/views/MainPage/MainPageRouter';
import Search from './src/views/Search/Search';
import Reels from './src/views/Reels/Reels';
import Shopping from './src/views/Shopping/Shopping';
import Profile from './src/views/Profile/Profile';
import {colors} from './src/color';
import Chats from './src/views/MainPage/ChatsPage/Chats';
import Notification from './src/views/Notification/Notification';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const MainPageStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

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
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={MainPageStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Reels"
          component={Reels}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Shopping"
          component={Shopping}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
