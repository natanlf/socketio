/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
window.navigator.userAgent = 'react-native';
import io from "socket.io-client/dist/socket.io"

export default class App extends Component {

  state = {
    name: "Bob"
  }

  constructor(){
    super();

    this.socket = io("localhost:3000")

    this.socket.on("update", () => this.setState({name: 'Nate'}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Name = {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
