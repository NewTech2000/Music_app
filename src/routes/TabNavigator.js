import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

//import Screens
import Home from '../screens/Tabs/Home';
import Search from '../screens/Tabs/Search';
import Library from '../screens/Tabs/Library/index';
import Routes from './routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === Routes.HOME) {
          iconName = focused
            ? require('../assets/icons/home_focused.png')
            : require('../assets/icons/home.png');
        } else if (route.name === Routes.SEARCH) {
          iconName = focused
            ? require('../assets/icons/search_Focused.png')
            : require('../assets/icons/search.png');
        } else if (route.name === Routes.LIBRARY) {
          iconName = focused
            ? require('../assets/icons/book_Focused.png')
            : require('../assets/icons/book.png');
        }

        return (
          <Image
            source={iconName}
            style={{width: size, height: size}}
            resizeMode="contain"
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FBBC05',
      inactiveTintColor: '#FFFFFF',
      tabStyle: {
        backgroundColor: '#111111',
      },
    }}>
    <Tab.Screen name={Routes.HOME} component={Home} />
    <Tab.Screen name={Routes.SEARCH} component={Search} />
    <Tab.Screen name={Routes.LIBRARY} component={Library} />
  </Tab.Navigator>
);

export default TabNavigator;
