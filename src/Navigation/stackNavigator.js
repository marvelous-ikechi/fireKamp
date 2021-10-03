import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FileUpload from '../modules/FileUpload';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../styles/colors';
import {connect} from 'react-redux';
import addFile from '../Redux/actions/addFile';

const Stack = createNativeStackNavigator();
const StackNavigator = props => {
  const {navigation, addFile} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Manage Files'}
          component={FileUpload}
          options={{
            // headerTitle: props => '',
            headerRight: () => (
              <TouchableOpacity onPress={addFile}>
                <MaterialCommunityIcons
                  name="plus"
                  color={Colors.blue}
                  size={26}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {addFile})(StackNavigator);
