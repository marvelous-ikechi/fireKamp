import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

const File = props => {
  const {uploaded} = props;
  return (
    <View style={styles.container}>
      {uploaded.map(upload => {
        return (
          <View style={styles.file} key={upload.id}>
            <Image source={upload.image} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>{upload.title}</Text>
              <Text style={styles.title}>{upload.size}</Text>
            </View>
          </View>
        );
      })}
      {/*<Text style={styles.title}>{uploaded.title}</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#F6F7FC',
    padding: hp(1.5),
  },
  title: {
    fontSize: hp(1.8),
    fontFamily: Fonts.poppinsLight,
  },
  file: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  uploaded: state.fileState.user,
});

export default connect(mapStateToProps)(File);
