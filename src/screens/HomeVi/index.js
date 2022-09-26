import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js'
import Axios from 'axios'


function HomeVi({ navigation }) {

    let listaId = []
    const [uri, setUri] = useState([])



    useEffect(() => {
        Axios.get("http://localhost:3000/")
        .then((response) => {
            for(let x = 0; x < response.data.length; x++){
                listaId.push(response['data'][x]['id'])
            } 
            setUri(listaId)
        })
        .catch((err) => console.log(err))
    }, [])

    function recipePage(id){
        navigation.navigate("RecipePage", {
            id : id
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>

            <View style={styles.viewHeaderBandeira}>
                <Image style={styles.imgHeader} source={require("../../../assets/logo.png")}/>
            </View>

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => navigation.navigate("Login")}>⬅</Text>
            </View>

            <View style={styles.viewMsg}>
                <Text style={styles.msgOla}>Olá, Visitante</Text>
                <Text style={styles.txtBemVindo}>Bem-vindo ao app de receitas InfoBolos</Text>
            </View>

            {uri.map(index => (
                <View>
                    <Image source={{uri : `http://localhost:3000/${index}.png`}} style={{
                        width: 300,
                        height: 300,
                    }}/>
            <View style={styles.viewContainer}>
                <TouchableOpacity style={{
                    width: '50%',
                    borderColor: '#E398AA',
                    borderWidth: 2,
                    borderRadius: 40,
                    height: '60%',
                    marginBottom: '10%',
                    textAlign: 'center',
                }} title="Cadastro" onPress={() => recipePage(index)}>
                    <Text style={{
                        color: '#E398AA',
                        fontWeight: 600,
                        fontSize: 20,
                        marginTop: 7,
                    }}>Ver receita</Text>
                </TouchableOpacity>
            </View>
                </View>
            ))}

        </View>
    );
}

export default HomeVi;
