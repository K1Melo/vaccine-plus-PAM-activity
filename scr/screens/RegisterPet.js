import { StyleSheet, TextInput, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const RegisterPet = () => {

  const navigation = useNavigation();

  const handleConfirm = () => {
      navigation.navigate("ConfirmComponent");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topImageContainer}>
          <Image source={require("../assets/vectorTopProfile.png")} style={styles.topImage} />
        </View>
        <HeaderComponent />
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profileImage}>
            <Image source={require('../assets/profileImage.jpg')} style={styles.image}></Image>
          </View>
          <TouchableOpacity style={styles.add}>
            <Ionicons name={"add"} size={40} color={"#DFD8C8"} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome6 name={"dog"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
          <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Animal" />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name={"drive-file-rename-outline"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
          <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Nome" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name={"calendar"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
          <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Idade" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name={"transgender"} size={24} color={"#9A9A9A"} styles={styles.inputIcon} />
          <TextInput style={styles.textInput} placeholderTextColor="#9A9A9A" placeholder="Genero" />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <TouchableOpacity style={styles.btnContainer} onPress={handleConfirm}>
            <Text style={styles.btnText}>Cadastrar Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterComponent />
    </SafeAreaView>
  )
}

export default RegisterPet

const styles = StyleSheet.create({

  topImageContainer: {
    height: 0,
  },

  topImage: {
    width: '100%',
    height: 200,
  },

  container: {
    position: 'relative',
    flex: 1,
  },

  text: {
    color: '#262626',
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },

  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 10,
    elevation: 10,
  },

  add: {
    backgroundColor: "#01448B",
    position: 'absolute',
    borderRadius: 30,
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
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

  btnContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#01448B',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 20,
  },

  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})