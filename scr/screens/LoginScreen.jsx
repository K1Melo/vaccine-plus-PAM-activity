import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("RegisterPet");
    }
    const handleSign = () => {
        navigation.navigate("Signup");
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image source={require("../assets/vectorTop.png")} style={styles.topImage} />
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Bem Vindo</Text>
            </View>
            <View style={styles.singInContainer}>
                <Text style={styles.singInText}>Faça login na sua conta</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"user"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Usuário" />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name={"lock"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
                <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Senha" secureTextEntry />
            </View>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            <View >
                <TouchableOpacity style={styles.singInBtnContainer} onPress={handleRegister}>
                    <Text style={styles.singInBtnText}>Entrar</Text>
                    <FontAwesome name={"arrow-right"} size={18} color={"#262626"} styles={styles.inputIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.footerText}>Não tem uma conta? <TouchableOpacity onPress={handleSign}><Text style={{ textDecorationLine: "underline", color: '#23BCEC' }}>Cadastre-se</Text></TouchableOpacity></Text>
            <View style={styles.bottomImageContainer}>
                <Image source={require("../assets/vectorBottom.png")} style={styles.bottomImage} />
            </View>
        </View>
    )
}

export default LoginScreen

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

    welcomeContainer: {
        marginTop: 130
    },

    welcomeText: {
        textAlign: "center",
        fontSize: 70,
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
        marginTop: '25%',
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
        marginTop: 90
    },

    bottomImageContainer: {
        zIndex: -1,
        position: 'absolute',
        bottom: 0,
        height: 100,
    },

    bottonImage: {
        width: '100%',
    }
})