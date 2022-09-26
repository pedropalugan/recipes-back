import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js'

function BolosVi({ navigation }) {
    function back(){
        navigation.navigate("HomeVi")
      }
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#f68b1f" barStyle="dark-content"/>

            <View style={styles.viewMsg}>
                <Text style={styles.seta} onPress={() => back()}>⬅</Text>
            </View>

            <View style={styles.viewDesc}>
                <Image style={styles.imgFort} source={require("../../../assets/bolo-fofinho.jpg")} alt="Santa Catarina"/>
                <Text style={styles.txtImg}>Bolo simples e fofo</Text>

                <Text style={styles.txtDesc}>
                    Santa Catarina é um estado na região sul do Brasil.
                    Com uma longa costa com o Atlântico e muitas ilhas,
                    ela é conhecida por suas praias e montanhas. 
                </Text>        

                <Text style={styles.txtImg}>Tempo de Preparo</Text>
                <Text style={styles.txtDesc}>- 50 minutos</Text>

                <Text style={styles.txtImg}>Rendimento</Text>
                <Text style={styles.txtDesc}>- 14 porções</Text>

                <Text style={styles.txtImg}>Ingredientes</Text>

                <Text style={styles.txtDesc}>- 4 ovos</Text>
                <Text style={styles.txtDesc}>- 4 colheres bem cheias de margarina</Text>
                <Text style={styles.txtDesc}>- 4 xícaras (chá) de farinha de trigo peneirada</Text>
                <Text style={styles.txtDesc}>- 1 1/2 xícaras (chá) de leite</Text>
                <Text style={styles.txtDesc}>- 1 colher de fermento em pó</Text>

                <Text style={styles.txtImg}>Modo de Preparo</Text>

                <Text style={styles.txtDesc}>- Primeiramente separe as gemas das claras.</Text>
                <Text style={styles.txtDesc}>- Em uma tigela coloque as gemas e a margarina.</Text>
                <Text style={styles.txtDesc}>- Bata até formar um creme bem liso e claro.</Text>
                <Text style={styles.txtDesc}>- Acrescente o açúcar e bata bastante, até obter um creme bem homogêneo.</Text>
                <Text style={styles.txtDesc}>- Desligue a batedeira e coloque a farinha de trigo.</Text>
                <Text style={styles.txtDesc}>- Mexa com uma colher de pau e acrescente o leite, aos poucos, para dissolver a farinha de trigo.</Text>
                <Text style={styles.txtDesc}>- Adicione o fermento em pó e as claras batidas em neve.</Text>
                <Text style={styles.txtDesc}>- Mexa delicadamente e coloque em uma forma untada.</Text>
                <Text style={styles.txtDesc}>- Leve para assar em forno pré - aquecido, a 180°, por aproximadamente 40 minutos, ou até que enfiando um palitinho ele saia limpo.</Text>

                <Text style={styles.txtImg}>Informações adicionais</Text>
                <Text style={styles.txtDesc}>Obs.: Se preferir pode substituir o leite por leite de coco e acrescentar à massa coco ralado.</Text>

                <Text style={styles.txtImg}>Criador da receita</Text>
                <Text style={styles.txtDesc}>Matheus Maia Alvarez</Text>
            </View>      
        </View>
    );
}

export default BolosVi;
