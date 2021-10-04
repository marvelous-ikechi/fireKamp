import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Completed from './completed';
import NextUp from './nextUp';
import InCompleteUploads from './incompleteUploads';
import Uploading from './uploading';
import Colors from '../styles/colors';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Accordion from '../components/Accordion';

const FileUpload = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Accordion
          name={'Uploading'}
          cancelUpload={true}
          content={<Uploading />}
        />
        <Accordion name={'Next Up'} cancelAll={true} content={<NextUp />} />
        <Accordion name={'Completed'} content={<Completed />} />
        <Accordion name={'IncompleteUploads'} content={<InCompleteUploads />} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1),
  },
});

export default FileUpload;
