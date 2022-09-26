import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style.js'

function Header({ navigation }) {


    return (
        <View style={styles.viewHeaderBandeira}>
            <Image style={styles.imgHeader} source={require("../../../assets/logo.png")}/>
        </View>
    );
}

export default Header;
