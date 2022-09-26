import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
} from "react-native";


import styles from "./style";
function Login({ navigation }) {


  function homeNavegation() {
      navigation.navigate("HomeVi");
  }

  // function homeNavegation() {
  //     navigation.navigate("Home");
  // }

  function adminNavegation() {
    navigation.navigate("Cadastro");
  }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="cyan" barStyle="dark-content"/>
        <Image style={styles.img} source={require("../../../assets/logo.png")}/>

        <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => adminNavegation()}>
            <Text style={styles.txtBtn}>Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => homeNavegation()}>
            <Text style={styles.txtBtn}>Visitante</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Login;
