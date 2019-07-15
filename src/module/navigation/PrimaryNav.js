import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import DrawerNavigation from "./DrawerNavigation";

// Manifest of possible screens
const navigator = createStackNavigator({
        loginStack: { screen: LoginStack },
        drawerStack: { screen: DrawerNavigation }
    }, {
        // Default config for all screens
        headerMode: 'none',
        title: 'Main',
        initialRouteName: 'loginStack',
        transitionConfig: noTransitionConfig
    })

const PrimaryNav = createAppContainer(navigator);

const noTransitionConfig = () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
  })

export default PrimaryNav;
  