import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import MyHomeScreen from "./MyHomeScreen";
import MyNotificationsScreen from "./MyNotificationsScreen";

const drawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });

const MyDrawerNavigator = createAppContainer(drawerNavigator)

export default MyDrawerNavigator;