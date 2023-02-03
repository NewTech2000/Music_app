/* eslint-disable react/jsx-props-no-spreading */
import React, {useCallback, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//import screens
import Login from '../screens/Auth/Login';
import Home from './TabNavigator';
import Routes from './routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  /**Setup after auth Flow and App screens navigation */
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{gestureEnabled: true}}
        initialRouteName={Routes.Login}>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={Routes.LOGIN}
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={Routes.HOME}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
