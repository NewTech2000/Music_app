import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import LoginScreen from '../screens/Auth/Login/index';
import Routes from './routes';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  /**Setup Auth Flow and Auth screens navigation */
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.LOGIN}
        screenOptions={() => ({
          headerTitleStyle: {color: 'black'},
        })}>
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
          name={Routes.LOGIN}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
