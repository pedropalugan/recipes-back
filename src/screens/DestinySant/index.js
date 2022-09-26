import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js'
import Axios from 'axios'

function DestinySant({ navigation }) {
    function back(){
        navigation.navigate("EditPage")
      }

    Axios.get('http://localhost:3000/')
    .then((response) => console.log(response))  
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f68b1f" barStyle="dark-content"/>

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
            </View>

            <View style={styles.viewDesc}>
      

            </View>

            <View style={styles.viewContainer}>
                <TouchableOpacity style={styles.btn} title="Cadastro" onPress={() => back()}>
                    <Text style={styles.txtBtn}>Editar</Text>
                </TouchableOpacity>
            </View>      
        </View>
    );
}

export default DestinySant;
