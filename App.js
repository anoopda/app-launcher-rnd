import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

// const url = 'geo:37.484847,-122.148386';
const url = 'fb:';
import DashBoard from './containers/dashboard';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
       <DashBoard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
