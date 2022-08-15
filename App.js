import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainPageRouter from './src/views/MainPage/MainPageRouter';
import {Search} from './src/views/Search';
import {Reels} from './src/views/Reels';
import {Shopping} from './src/views/Shopping';
import {Profile} from './src/views/Profile';
import {colors} from './src/color';
import {Chats} from './src/views/MainPage/ChatsPage';
import {Notification} from './src/views/Notification';
import {FollowProfile} from './src/views/FollowProfile';
import {Comments} from './src/views/Comments';
import {FollowStory} from './src/views/FollowStory';
import {Settings} from './src/views/Settings';
import {Activities} from './src/views/Activities';
import {Saved} from './src/views/Saved';
import {SavedList} from './src/views/SavedList';
import {SavedMusicList} from './src/views/SavedMusicList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const MainPageStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainPageRouter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FollowProfile"
          component={FollowProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="FollowStory"
          component={FollowStory}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Activities"
          component={Activities}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Saved"
          component={Saved}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SavedList"
          component={SavedList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SavedMusicList"
          component={SavedMusicList}
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
          component={ProfileStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
