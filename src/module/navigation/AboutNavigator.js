import React from 'react';

import { createStackNavigator } from 'react-navigation'

import NavigationDrawerBar from '../../component/drawer/NavigationDrawerBar';
import About from '../pages/About';
import { color } from '../../style/style';

const AboutNavigator = createStackNavigator({
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        title: 'About',
        headerLeft: <NavigationDrawerBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: color.color_primary,
        },
        headerTintColor: color.color_white,
      }),
    },
  });

  export default AboutNavigator;