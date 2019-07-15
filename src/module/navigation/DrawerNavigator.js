import React from 'react';

import { createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import AboutNavigator from './AboutNavigator';
import SettingNavigator from './SettingNavigator';

const DrawerNavigatorExample = createDrawerNavigator({
  
  HomeMenu: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },

  AboutMenu: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: 'About',
    },
  },

  SettingMenu: {
    screen: SettingNavigator,
    navigationOptions: {
      drawerLabel: 'Setting',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);