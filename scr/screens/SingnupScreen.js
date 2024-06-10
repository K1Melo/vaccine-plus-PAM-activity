import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SingnupScreen = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("RegisterPet");
    }
    const handleLogin = () => {
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image source={require("../assets/vectorTop.png")} style={styles.topImage} />
            </View>
            <View style={styles.createAcountContainer}>
                <Text style={styles.createAcountText}>Crie sua conta</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"user"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Usuário" />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"lock"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Senha" secureTextEntry />
            </View>
            <View style={styles.inputContainer}>
                <Fontisto name={"email"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Email" />
            </View>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name={"cellphone"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Telefone" />
            </View>
            <View>
                <TouchableOpacity style={styles.singInBtnContainer} onPress={handleRegister}>
                    <Text style={styles.singInBtnText}>Cadastre-se</Text>
                    <FontAwesome name={"arrow-right"} size={18} color={"#262626"} styles={styles.inputIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.footerText}>Já tem conta? <TouchableOpacity onPress={handleLogin}><Text style={{ textDecorationLine: "underline", color: '#23BCEC' }}>Entrar</Text></TouchableOpacity></Text>
        </View>
    )
}

export default SingnupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
        position: 'relative',
    },

    topImageContainer: {
        height: 20,
    },

    topImage: {
        width: '100%',
        height: 350,
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