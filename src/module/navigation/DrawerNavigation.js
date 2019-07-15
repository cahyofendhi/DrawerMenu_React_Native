import React from "react";
import { createStackNavigator, createAppContainer, DrawerActions } from "react-navigation";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DrawerStack from "./DrawerStack";


const navigation = createStackNavigator(
    {
        DrawerStack: { 
            screen: DrawerStack,
            navigationOptions: ({ navigation }) => ({
                headerLeft: () => (
                    
                    <TouchableOpacity onPress={() => {
                        const { state } = navigation
                        const parent = navigation.dangerouslyGetParent();
                        const isDrawerOpen = parent && state && state.isDrawerOpen;
                        console.log(`Drawer Status : ${isDrawerOpen}`)
                        if (isDrawerOpen) {
                            navigation.dispatch(DrawerActions.closeDrawer())
                        } else {
                            navigation.dispatch(DrawerActions.openDrawer())
                        }
                    }}>
                        <Ionicons name="ios-menu" style={styles.menuOpen} size={32} color={{color: 'black'}} />
                    </TouchableOpacity>
                )

                // headerStyle: {backgroundColor: 'green'},
                // title: 'Logged In to your app!',
                // headerLeft: ({ titleStyle }) => 
                // (
                //     <TouchableOpacity onPress={() => 
                //             {
                //                 const parent = navigation.dangerouslyGetParent();
                //                 const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
                //                 console.log(`Drawer : ${parent} - ${isDrawerOpen}`)
                //                 if (navigation.isDrawerOpen) {
                //                     navigation.dispatch(DrawerActions.closeDrawer())
                //                 } else {
                //                     navigation.dispatch(DrawerActions.openDrawer())
                //                 }
                //                 // navigation.dispatch(DrawerActions.toggleDrawer())
                //             }
                //         }>
                //         <Ionicons name="ios-menu" style={styles.menuOpen} size={32} color={titleStyle} />
                //     </TouchableOpacity>
                // )
                // ,    

                // const { state } = navigation;
                // if(state.isDrawerOpen) {
                //   return {
                //     headerLeft: ({titleStyle}) => (
                //       <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                //         <Ionicons name="ios-close" style={styles.menuClose} size={36} color={titleStyle} />
                //       </TouchableOpacity>
                //     )
                //   }
                // }
                // else {
                //   return {
                //     headerLeft: ({titleStyle}) => (
                //       <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
                //         <Ionicons name="ios-menu" style={styles.menuOpen} size={32} color={titleStyle} />
                //       </TouchableOpacity>
                //     )
                //   }
                // }

            })
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuOpen: {
        marginLeft: 10, 
        marginTop: 10
    }, 
    menuClose: {
        marginLeft: 14, 
        marginTop: 10
    }
    });
      
const DrawerNavigation = createAppContainer(navigation);

export default DrawerNavigation