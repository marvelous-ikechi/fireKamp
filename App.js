import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
import StackNavigator from './src/Navigation/stackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
