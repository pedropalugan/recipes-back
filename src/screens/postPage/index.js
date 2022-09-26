import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Home/style'
import Axios from 'axios'

export default function PostPage({ navigation }){

    const [img, setImg] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [ing, setIng] = useState('')
    const [modo, setModo] = useState('')


    const Submit = () => {

        const form = new FormData()
        form.append('pic', img)
        form.append('titulo', titulo)
        form.append('ing', ing)
        form.append('modo', modo)



         Axios.post('http://localhost:3000/postMeal', form).then((response) => console.log(response))
        .catch((err) => console.log(err)) 
    }

    return(
        <View>
            <Text onPress={() => navigation.navigate("Home")}>⬅</Text>
            <input type='file' onChange={e => setImg(e.target.files[0])}/> 
            <TextInput onChangeText={titulo => setTitulo(titulo)} value={titulo}/>
            <TextInput onChangeText={ing => setIng(ing)} value={ing}/>
            <TextInput onChangeText={modo => setModo(modo)} value={modo}/>
            <TouchableOpacity onPress={Submit}><Text>Teste</Text></TouchableOpacity>
        </View>
    );
}