import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

const File = props => {
  const {uploaded} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{uploaded.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
  },
  title: {
    fontSize: hp(1.8),
  },
});

const mapStateToProps = state => ({
  uploaded: state.fileState.uploading,
});

export default connect(mapStateToProps)(File);
