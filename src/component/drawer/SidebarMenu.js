import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '../../style/style';
 
class SidebarMenu extends Component {

  constructor() {
    super();
    global.currentScreenIndex = 0
    this.items = [
      {
        icon_menu: 'ios-home',
        name_menu: 'Home',
        navigate: 'HomeMenu',
      },
      {
        icon_menu: 'ios-information-circle-outline',
        name_menu: 'About',
        navigate: 'AboutMenu',
      },
      {
        icon_menu: 'ios-settings',
        name_menu: 'Setting',
        navigate: 'SettingMenu',
      },
    ];
  }

  render() {
    return (
      <View style={styles.sideMenuContainer}>
        
        <View style={styles.header}>
            <Ionicons 
              name="ios-contact" 
              size={100} 
              color={color.color_primary} />
            <Text>John Doe</Text>
        </View>
        
        <View style={styles.separator}/>

        <View style={styles.mainContent}>
          {this.items.map((item, key) => (
            <TouchableOpacity key={key} onPress={() => {
                global.currentScreenIndex = key;
                const parent = this.props.navigation.dangerouslyGetParent();
                const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
                console.log(`Drawer : ${isDrawerOpen}`);
                this.props.navigation.navigate(item.navigate);
              }}
              style={{...styles.content, 
                ...{backgroundColor: global.currentScreenIndex === key ? color.color_grey : color.color_white}}}>

              <View style={styles.icon}>
                <Ionicons name={item.icon_menu} size={24} color={global.currentScreenIndex === key ? color.color_primary : color.color_secondary} />
              </View>

              <Text
                style={{
                  ...styles.title,
                  ...{color: global.currentScreenIndex === key ? color.color_primary : color.color_secondary}}}>

                {item.name_menu}

              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: color.color_white,
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: color.color_grey,
    marginTop: 15,
  },
  mainContent: {
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: { 
    marginRight: 10, 
    marginLeft: 20 
  },
  title: {
    fontSize: 15
  }
});

export default SidebarMenu;