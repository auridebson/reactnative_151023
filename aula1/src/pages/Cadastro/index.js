import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Cadastro() {
    return (
        <View style={Styles.containerMain}>
            <Text>Cadastro de Usuário</Text>
        </View>
    )
}

const Styles = {
    containerMain:{
        flex: 1,
        flexDirection: 'column'
    }
}