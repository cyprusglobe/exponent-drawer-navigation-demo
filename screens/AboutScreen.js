import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { Constants } from 'exponent'
import { withNavigation, NavigationBar } from '@exponent/ex-navigation';

@withNavigation
export default class AboutScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderNavigationBar()}
      </View>
    );
  }

  _getDrawerNavigator() {
    let currentNavigator = this.props.navigator;

    while (currentNavigator) {
      currentNavigator = currentNavigator.getParentNavigator();

      if (currentNavigator && currentNavigator.type === 'drawer') {
        return currentNavigator;
      }
    }
  }

  _renderNavigationBar() {
      return (
        <View style={[styles.navigationBar, {backgroundColor: this.props.route.config.navigationBar.backgroundColor}]}>
          <View style={[styles.navigationBarAction, {marginLeft: -5}]}>
            <NavigationBar.MenuButton navigator={this._getDrawerNavigator()} />
          </View>
          <View style={styles.navigationBarTitleContainer}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.subNavigationBarTitle, {color: '#fff'}]}>
                  About
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: NavigationBar.DEFAULT_HEIGHT,
  },
  navigationBar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: NavigationBar.DEFAULT_HEIGHT,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5,
  },
  navigationBarContainer: {
    elevation: 1,
    backgroundColor: '#fff',
    height: NavigationBar.DEFAULT_HEIGHT,
    borderBottomWidth: NavigationBar.DEFAULT_BORDER_BOTTOM_WIDTH,
    borderBottomColor: NavigationBar.DEFAULT_BORDER_BOTTOM_COLOR,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: Constants.statusBarHeight,
  },
  navigationBarTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  navigationBarTitle: {
    fontSize: 12,
    letterSpacing: -0.5,
  },
  subNavigationBarTitle: {
    fontSize: 17
  },
  navigationBarAction: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});