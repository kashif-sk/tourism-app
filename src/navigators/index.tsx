/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import Hula from '../screens/hula';
import Surfing from '../screens/surfing';
import Volcano from '../screens/volcano';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{header: Header}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Surfing" component={Surfing} />
      <Tab.Screen name="Hula" component={Hula} />
      <Tab.Screen name="Volcano" component={Volcano} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
