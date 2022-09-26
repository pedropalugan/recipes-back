import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './style.js'
import Header from '../../Components/Header/index.js';
import { TouchableOpacity } from 'react-native-web';
import Axios from 'axios';

function Option({ navigation }) {

    let array_uri = []
    let array_tit = []
    let array_modo = []
    let array_ing = []

    const [uri, setUri] = useState([])
    const [titulo, setTitulo] = useState([])
    const [ing, setIng] = useState([])
    const [modo, setModo] = useState([])




    useEffect(() => {
        Axios.get('http://localhost:3000/')
            .then((response) => {
                for (let x = 0; x < response.data.length; x++) {
                    array_uri.push(response['data'][x]['id'])
                    array_tit.push(response['data'][x]['titulo'])
                    array_modo.push(response['data'][x]['modo'])
                    array_ing.push(response['data'][x]['ing'])
                }
                setUri(array_uri)
                setTitulo(array_tit)
                setModo(array_modo)
                setIng(array_ing)
                
            })
            .catch((err) => console.log(err))
    }, [])

    function back(id_params) {
        navigation.navigate("EditPage", {
            id : id_params
        })
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            <Header />

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => navigation.navigate("Login")}>⬅</Text>
            </View>

            <View style={styles.viewMsg}>
                <TouchableOpacity onPress={() => navigation.navigate("PostPage")}>
                    <Text>Add +</Text>
                </TouchableOpacity>
                <Text style={styles.msgOla}>Olá, Matheus</Text>
                <Text style={styles.txtBemVindo}>Bem-vindo ao app de receitas InfoBolos</Text>
            </View>
            {uri.map(index => (
                <View>
                <Image key={index} style={{
                    width: 300,
                    height: 300,
                }}
                    source={{ uri: `http://localhost:3000/${index}.png` }}
                />
            <View style={styles.viewContainer}>
                <TouchableOpacity style={{
                    width: '50%',
                    borderColor: '#E398AA',
                    borderWidth: 2,
                    borderRadius: 40,
                    height: '60%',
                    marginBottom: '10%',
                    textAlign: 'center',
                }} title="Cadastro" onPress={() => back(index)}>
                    <Text style={{
                        color: '#E398AA',
                        fontWeight: 600,
                        fontSize: 20,
                        marginTop: 7,
                    }}>Editar</Text>
                </TouchableOpacity>
            </View>
                </View>
                
            ))}



        </View>
    );
}

export default Option;
