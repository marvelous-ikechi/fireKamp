import  React from 'react'
import { 
    SafeAreaView, 
    Text,
    StyleSheet
 } from 'react-native'
import Colors from '../styles/colors'

const InCompleteUploads = () => {
    return (
        <SafeAreaView>
                <Text>InCompleteUploads</Text>     
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor:Colors.cardBackground
    }
})

export default InCompleteUploads