import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FooterComponent from '../components/FooterComponent'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HeaderComponent from '../components/HeaderComponent'
import { useNavigation } from '@react-navigation/native';

const AddVaccine = () => {
    const navigation = useNavigation();

    const handleConfirm = () => {
        navigation.navigate("ConfirmComponent");
    }

    return (
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image source={require("../assets/vectorTopVaccine.png")} style={styles.topImage} />
            </View>
            <HeaderComponent />
            <View style={styles.createAcountContainer}>
                <Text style={styles.createAcountText}>Agende sua Vacina</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"calendar"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="XX/XX/XXXX" keyboardType='numeric' />
            </View>
            <View style={styles.inputContainer}>
                <EvilIcons name={"location"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Endereço" secureTextEntry />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={"clock"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Horário" keyboardType='numeric'/>
            </View>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name={"cellphone"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Telefone" keyboardType='numeric' />
            </View>
            <View>
                <TouchableOpacity style={styles.singInBtnContainer} onPress={handleConfirm}>
                    <Text style={styles.singInBtnText}>Agendar</Text>
                    <FontAwesome name={"arrow-right"} size={18} color={"#262626"} styles={styles.inputIcon} />
                </TouchableOpacity>
            </View>
            <FooterComponent />
        </View>
    )
}

export default AddVaccine

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
        position: 'relative',
    },

    topImageContainer: {
        height: 0,
    },

    topImage: {
        width: '100%',
        height: 150,
    },

    createAcountContainer: {
        marginTop: 130,
        marginBottom: 40,
    },

    createAcountText: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: "#262626",
    },

    singInContainer: {
        marginTop: 20
    },

    singInText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#262626',
        marginBottom: 30,
    },

    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    textInput: {
        marginLeft: 5,
        flex: 1,
        color: 'black',
    },

    forgotPassword: {
        color: '#999999',
        textAlign: 'right',
        width: "90%",
        fontSize: 15,
    },

    singInBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '90%',
        marginTop: '15%',
    },

    singInBtnText: {
        color: '#262626',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10,
    },

    footerText: {
        textAlign: 'center',
        color: 'black',
        marginTop: 50
    },
})