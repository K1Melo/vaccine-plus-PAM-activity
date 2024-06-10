import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {
    const navigation = useNavigation();
    const handleSign = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.titleBar}>
            <TouchableOpacity onPress={handleSign}>
                <EvilIcons name={"arrow-left"} color={"#000000"} size={40} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name={"ellipsis-vertical"} color={"#000000"} size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginHorizontal: 15,
    },
})