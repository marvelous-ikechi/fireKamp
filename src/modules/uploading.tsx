import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../styles/colors';
import File from '../components/File';

const Uploading = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <File />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    padding: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.black,
    // fontFamily: 'Poppins-Bold',
  },
  cancelText: {
    color: Colors.blue,
    textDecorationColor: Colors.blue,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

export default Uploading;
