import React from 'react';

import { createStackNavigator } from 'react-navigation'

import NavigationDrawerBar from './drawer/NavigationDrawerBar';
import Setting from '../pages/Setting';

const SettingNavigator = createStackNavigator({
    Setting: {
      screen: Setting,
      navigationOptions: ({ navigation }) => ({
        title: 'Setting Page',
        headerLeft: <NavigationDrawerBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#6097f0',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  export default SettingNavigator;