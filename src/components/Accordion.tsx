import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';

interface Props {
  name: string;
  cancelUpload?: boolean;
  cancelAll?: boolean;
  content: React.ReactNode;
}

const Accordion = ({name, cancelAll, cancelUpload, content}: Props) => {
  const [openState, setOpenState] = useState<boolean>(false);

  const chevronOpen = require('../assets/chevronUp.png');
  const chevronDown = require('../assets/chevronDown.jpg');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          {cancelUpload && (
            <TouchableOpacity>
              <Text style={styles.cancelText}>CANCEL UPLOAD</Text>
            </TouchableOpacity>
          )}

          {cancelAll && (
            <TouchableOpacity>
              <Text style={styles.cancelText}>CANCEL ALL</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => setOpenState(!openState)}>
            <Text style={styles.cancelText}>{openState}</Text>
            <Image source={openState ? chevronOpen : chevronDown} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {openState && <View>{content}</View>}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    padding: hp(2),
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  title: {
    color: Colors.black,
    fontFamily: Fonts.poppinsLight,
  },
  cancelText: {
    color: Colors.blue,
    textDecorationColor: Colors.blue,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontFamily: Fonts.poppinsLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Accordion;
