import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, Image, TextInput, Button } from 'react-native';

import Axios from 'axios'



export default function EditPage({ navigation }){
    
    const [titulo, setTitulo] = useState("")
    const [ing, setIng] = useState("")
    const [modo, setModo] = useState("")

    const [sendtitulo, setsendTitulo] = useState("")
    const [sending, setsendIng] = useState("")
    const [sendmodo, setsendModo] = useState("")




    useEffect(() => {
        Axios.get(`http://localhost:3000/${navigation.state.params.id}`)
            .then((response) => {
                setTitulo(response.data.titulo)
                setIng(response.data.ing)
                setModo(response.data.modo)   
            })
            .catch((err) => console.log(err))
    }, [])

    function updateData(){
        Axios.put('http://localhost:3000/updateData', {
            id : navigation.state.params.id,
            titulo : sendtitulo,
            ing : sending,
            modo : sendmodo
        }).then((response) =>{
            if(response.data == 'Dado att'){
                navigation.navigate("Home")
            }
            })
        .catch((err) => console.log(err))
    }


    return(
        <SafeAreaView>
            <Text onPress={() => navigation.navigate("Home")}>⬅</Text>
            <Image 
            style={{
                height: 300,
                width: 300,
            }}
            source={{uri : `http://localhost:3000/${navigation.state.params.id}.png`}}
            />
            <TextInput placeholder={titulo} onChangeText={sendtitulo => setsendTitulo(sendtitulo)} value={sendtitulo}/>
                
            <TextInput placeholder={ing} onChangeText={sending => setsendIng(sending)} value={sending} />
                
            <TextInput placeholder={modo} onChangeText={sendmodo => setsendModo(sendmodo)} value={sendmodo} />

            <Button title="BAIXE AQUI" onPress={updateData}/>

        </SafeAreaView>
    );
}