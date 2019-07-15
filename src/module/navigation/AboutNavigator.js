import React from 'react';

import { createStackNavigator } from 'react-navigation'

import NavigationDrawerBar from './drawer/NavigationDrawerBar';
import About from '../pages/About';

const AboutNavigator = createStackNavigator({
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        title: 'About Page',
        headerLeft: <NavigationDrawerBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#6097f0',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  export default AboutNavigator;