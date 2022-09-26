import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './style.js'
import Header from '../../Components/Header/index.js';

function StatusVoo({ navigation }) {

    function back(){
        navigation.navigate("Home")
      }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f68b1f" barStyle="dark-content"/>

            <Header />

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
                <Text style={styles.title}>Olá, Matheus</Text>
                <Text style={styles.txtBemVindo}>Na GOL você visualiza os status de voo em tempo real</Text>
            </View>

            <View style={styles.viewMsg}>
            </View>
             
        </View>
    );
}

export default StatusVoo;
