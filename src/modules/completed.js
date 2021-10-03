import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Colors from '../styles/colors';

const Completed = () => {
  return (
    <View style={styles.container}>
      <Text>Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
  },
});

export default Completed;
