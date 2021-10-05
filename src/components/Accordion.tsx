import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';

interface Props {
  name: string;
  cancelUpload?: boolean;
  cancelAll?: boolean;
  content: React.ReactNode;
  cancelUploadFunc?: () => void;
  cancelAllFunc?: () => void;
}

const Accordion = ({
  name,
  cancelAll,
  cancelUpload,
  content,
  cancelAllFunc,
  cancelUploadFunc,
}: Props) => {
  const [openState, setOpenState] = useState<boolean>(false);

  const chevronOpen = require('../assets/chevronUp.png');
  const chevronDown = require('../assets/chevronDown.jpg');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          {cancelUpload && (
            <TouchableOpacity onPress={() => cancelUploadFunc}>
              <Text style={styles.cancelText}>CANCEL UPLOAD</Text>
            </TouchableOpacity>
          )}

          {cancelAll && (
            <TouchableOpacity onPress={() => cancelAllFunc}>
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
    padding: hp(2),
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: hp(1),
    borderRadius: 16,
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
  content: {
    marginTop: hp(2),
  },
});
export default Accordion;
