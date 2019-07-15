import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import DrawerNavigation from "./src/module/navigation/DrawerNavigation";

const App = () => {
  return (
      <DrawerNavigation/>
  );
};

export default App;



// import React from 'react';
// import { Ionicons } from 'react-native-vector-icons/Ionicons'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { DrawerActions, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   menuOpen: {
//     marginLeft: 10, 
//     marginTop: 10
//   }, 
//   menuClose: {
//     marginLeft: 14, 
//     marginTop: 10
//   }
// });


// const DrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen, 
//     navigationOptions: ({ navigation }) => ({
//       title: 'Home Screen', 
//       drawerLabel: 'Home',
//       drawerIcon: () => (
//         <Ionicons name="ios-home" size={20} />
//       )
//     })
//   },
//   Profile: {
//     screen: ProfileScreen, 
//     navigationOptions: ({ navigation }) => ({
//       title: 'Profile Screen', 
//       drawerLabel: 'Profile',
//       drawerIcon: () => (
//         <Ionicons name="ios-person" size={20} />
//       )
//     })
//   },
//   Settings: {
//     screen: SettingsScreen, 
//     navigationOptions: ({ navigation }) => ({
//       drawerIcon: () => (
//         <Ionicons name="ios-settings" size={20} />
//       )
//     })
//   }
// });


// const StackNavigator = createStackNavigator({
//   DrawerNavigator: {
//     screen: DrawerNavigator, 
//     navigationOptions: ({ navigation }) => {
//       const { state } = navigation;

//       if(state.isDrawerOpen) {
//         return {
//           headerLeft: ({titleStyle}) => (
//             <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
//               <Ionicons name="ios-close" style={styles.menuClose} size={36} color={titleStyle} />
//             </TouchableOpacity>
//           )
//         }
//       }
//       else {
//         return {
//           headerLeft: ({titleStyle}) => (
//             <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
//               <Ionicons name="ios-menu" style={styles.menuOpen} size={32} color={titleStyle} />
//             </TouchableOpacity>
//           )
//         }
//       }
//     }
//   }
// })

// export default App = createAppContainer(StackNavigator);
