import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native"

class MyHomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/icons-chat.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button 
            title="Menu"
            onPress={() => this.props.navigation.openDrawer()}/>
          <Button
            onPress={() => this.props.navigation.navigate('Notifications')}
            title="Go to notifications"
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    icon: {
      width: 24,
      height: 24,
    },
  });

  export default MyHomeScreen;
  