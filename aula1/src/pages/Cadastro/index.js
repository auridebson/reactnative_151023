import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Cadastro() {
    return (
        <View style={Styles.containerMain}>

            <View style={Styles.containerTopbar}>
                <Text style={Styles.containerTitle}>Cadastro de Usuário</Text>
            </View>
            <Text>Cadastro de Usuário</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    containerMain:{
        flex: 1,
        flexDirection: 'column',
    },
    containerTopbar:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#38a69d'
    },
    containerTitle:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 20
    }
})