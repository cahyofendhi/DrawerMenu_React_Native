import React from 'react';

import { createStackNavigator } from 'react-navigation'

import NavigationDrawerBar from './drawer/NavigationDrawerBar';
import Home from '../pages/Home';

const HomeNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Home Page',
        headerLeft: <NavigationDrawerBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#6097f0',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  export default HomeNavigator;