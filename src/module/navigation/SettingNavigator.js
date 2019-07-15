import React from 'react';

import { createStackNavigator } from 'react-navigation'

import NavigationDrawerBar from '../../component/drawer/NavigationDrawerBar';
import Setting from '../pages/Setting';

import { color } from '../../style/style';

const SettingNavigator = createStackNavigator({
    Setting: {
      screen: Setting,
      navigationOptions: ({ navigation }) => ({
        title: 'Setting',
        headerLeft: <NavigationDrawerBar navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: color.color_primary,
        },
        headerTintColor: color.color_white,
      }),
    },
  });

  export default SettingNavigator;