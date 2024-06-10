import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const FooterComponent = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("RegisterPet");
    }

    const handleVaccine = () => {
        navigation.navigate("AddVaccine");
    }

    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerIcons}>
                <FontAwesome name={"table"} size={24} color={"#050505"} />
                <TouchableOpacity onPress={handleVaccine}>
                    <Entypo name={"add-to-list"} size={24} z color={"#050505"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegister}>
                    <FontAwesome name={"user"} size={24} z color={"#050505"} />
                </TouchableOpacity>
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
        alignItems: 'flex-end',
    },

    footerIcons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',

    }
})