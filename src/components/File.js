import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import * as Progress from 'react-native-progress';
import {useEffect, useState} from 'react';

const File = props => {
  const [progress, setProgress, cancelUpload, cancelAll] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    let progress = 0;
    setProgress(progress);
    setTimeout(() => {
      setIndeterminate(false);
      let interval = setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setProgress(progress);
      }, 500);
    }, 1500);
  };

  const {uploaded} = props;
  return (
    <View style={styles.container}>
      <>
        {uploaded.length > 1 ? (
          uploaded.map(upload => {
            return (
              <View style={styles.file} key={upload.id}>
                <Image source={upload.image} />
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.title}>{upload.title}</Text>
                  <Text style={styles.title}>{upload.size}</Text>
                </View>
                <Progress.Circle
                  size={50}
                  showsText={true}
                  progress={progress}
                />
              </View>
            );
          })
        ) : uploaded.length < 1 ? null : (
          <View style={styles.file}>
            <Image source={uploaded.image} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>{uploaded.title}</Text>
              <Text style={styles.title}>{uploaded.size}</Text>
            </View>
            <Progress.Circle size={50} showsText={true} progress={progress} />
          </View>
        )}
        {/*<Text style={styles.title}>{uploaded.length}</Text>*/}
      </>
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
    marginRight: wp(13),
  },
  file: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
});

const mapStateToProps = state => ({
  uploaded: state.fileState.user,
});

export default connect(mapStateToProps)(File);
