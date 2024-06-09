import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const FooterComponent = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerIcons}>
                <FontAwesome name={"table"} size={24} color={"#050505"} />
                <Entypo name={"add-to-list"} size={24} z color={"#050505"} />
                <FontAwesome name={"user"} size={24} z color={"#050505"} />
            </View>
        </View>
    )
}

export default FooterComponent

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        width: '100%',
        height: '99%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'flex-end',
    },

    footerIcons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})