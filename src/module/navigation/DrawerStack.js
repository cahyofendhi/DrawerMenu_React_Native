import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Screen1 from "../pages/Screen1";
import Screen2 from "../pages/Screen2";
import Screen3 from "../pages/Screen3";

const DrawerStack = createDrawerNavigator(
    {
        screen1: { screen: Screen1,},
        screen2: { screen: Screen2 },
        screen3: { screen: Screen3 },
    },
    {
        initialRouteName: 'screen1',
        drawerWidth: 300,
        drawerPosition: 'left',
    }
);

export default DrawerStack;