import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import AboutNavigator from './AboutNavigator';
import SettingNavigator from './SettingNavigator';
import SidebarMenu from '../../component/drawer/SidebarMenu';

const DrawerNavigatorExample = createDrawerNavigator({
  
  HomeMenu: { screen: HomeNavigator },
  AboutMenu: { screen: AboutNavigator },
  SettingMenu: { screen: SettingNavigator },
},
{
  initialRouteName: 'HomeMenu',
  contentComponent: SidebarMenu,
  drawerWidth: Dimensions.get('window').width - 100,
});

export default createAppContainer(DrawerNavigatorExample);