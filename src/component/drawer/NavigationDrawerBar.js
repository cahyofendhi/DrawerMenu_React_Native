import React, { Component } from 'react';

import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


class NavigationDrawerBar extends Component {
  
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
            style={styles.menu}
            onPress={this.toggleDrawer.bind(this)}>
            <Ionicons 
                    name="ios-menu" 
                    size={24} 
                    color='black'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row' 
    },
    menu: {
        padding: 10
    }
})

export default NavigationDrawerBar;