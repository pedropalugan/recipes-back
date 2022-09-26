import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styles from './style.js'
import Header from '../../Components/Header/index.js';
import Axios from 'axios'


function Cadastro({ navigation }) {

  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')

  function back(){
    navigation.navigate("Login")
  }

  const Login = () => {
    Axios.post('http://localhost:3000/loginUser', {
      email : email,
      pswd : pswd
    }).then((response) => {
      if (response.data === 1) {
        navigation.navigate('Home')
      }
      else{
        alert('Senha ou email incorreto, tente novamente')
      }
    })
    .catch((err) => console.log(err))
  }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f68b1f" barStyle="dark-content"/>

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
            </View>

            
            <View style={styles.viewCadastro}>
                <Text style={styles.txtCad}>LOGIN</Text>
                <TextInput style={styles.input} placeholder=' Usuário' onChangeText={email => setEmail(email)} value={email}/>
                <TextInput style={styles.input} placeholder=' Senha' secureTextEntry={true}
                onChangeText={pswd => setPswd(pswd)} value = {pswd}
                />
            </View>

            <View style={styles.viewCadastro}>
              <TouchableOpacity style={styles.btn} title="Cadastro" onPress={Login}>
                  <Text style={styles.txtBtn}>Entrar</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cadastro;
