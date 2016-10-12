import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';

import ResponsiveImage from 'react-native-responsive-image';

import { Ionicons } from '@exponent/vector-icons';


import Router from '../../navigation/Router';


export default class DrawerNavigationContainer extends Component {

  _getColor = (isSelected) => {
      return isSelected ? '#fff' : '#000'
  };

  _renderHeader = () => {
    return (
      <View style={styles.header}>
        <ResponsiveImage source={{uri: 'https://pbs.twimg.com/profile_images/727675773335666689/FLrIEeNN.jpg'}} style={styles.headerImage} initWidth="321" initHeight="161" />
      </View>
    );
  };

  _renderTitle = (text, isSelected) => {
    return (
      <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : styles.non_SelectedText]}>
        {text}
      </Text>
    );
  };

  _renderIcon = (name, isSelected, color) => {
    let extraStyle = {marginTop: 2, color};
    if (name === 'md-alert') {
      extraStyle = {...extraStyle, marginLeft: -3, color};
    }
    return (
      <Ionicons
        style={[styles.icon, isSelected ? styles.selectedText : null, extraStyle]}
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        id='main'
        renderHeader={this._renderHeader}
        drawerWidth={250}
        initialItem="home"
        style={{backgroundColor: 'transparent'}}
      >
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-home', isSelected, this._getColor(isSelected))}>
          <StackNavigation
              id="home-stack"
              defaultRouteConfig={{
                navigationBar: {
                  backgroundColor: '#D74D56',
                  tintColor: '#fff',
                },
              }}
              initialRoute={Router.getRoute('home')}
            />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('About', isSelected)}
          renderIcon={isSelected => this._renderIcon('ios-alert', isSelected, this._getColor(isSelected))}>
          <StackNavigation
              id="about-stack"
              defaultRouteConfig={{
                navigationBar: {
                  backgroundColor: '#D74D56',
                  tintColor: '#fff',
                },
              }}
              initialRoute={Router.getRoute('about')}
            />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 35,
    backgroundColor: '#fff',
  },
  headerImage: {
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18,
  },
  icon: {
    color: '#999',
  },
  non_SelectedText: {
    color: '#000',
  },
  selectedText: {
    color: '#000',
  },
  selectedItemStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
});