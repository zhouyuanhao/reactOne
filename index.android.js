/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import main from './src/main'

export default class tester extends Component {
  render() {
    return main.call(this, this.props, this.state);
  }
}



AppRegistry.registerComponent('tester', () => tester);
