import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style.js'

function Header() {
    return (
        <View style={styles.viewHeaderBandeira}>
            <Image style={styles.img} source={require("../../../assets/logo-orange.png")}/>
            <View style={styles.viewHeader}>
            <Image style={styles.imgBandeira} source={require("../../../assets/bandeira.png")}/>
            <Text style={styles.txtHeader}>BRA | BRL</Text>
            </View>
        </View>
    );
}

export default Header;
