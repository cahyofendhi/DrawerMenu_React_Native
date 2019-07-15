import React from 'react';

import { createStackNavigator } from 'react-navigation'

import NavigationDrawerBar from '../../component/drawer/NavigationDrawerBar';
import Home from '../pages/Home';
import { color } from '../../style/style';

const HomeNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerLeft: <NavigationDrawerBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: color.color_primary,
        },
        headerTintColor: color.color_white,
      }),
    },
  });

  export default HomeNavigator;