import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const ConfirmComponent = () => {
  const navigation = useNavigation();
  const handleSign = () => {
    navigation.navigate("AddVaccine");
  }
  return (
    <View style={styles.confirmContainer}>
      <View style={styles.titleBar}>
        <TouchableOpacity onPress={handleSign}>
          <EvilIcons name={"arrow-left"} color={"#000000"} size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name={"ellipsis-vertical"} color={"#000000"} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FontAwesome name={"check-circle"} size={180} color={"#9A9A9A"} />
      </View>
    </View>
  )
}

export default ConfirmComponent

const styles = StyleSheet.create({
  confirmContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 15,
  },
})