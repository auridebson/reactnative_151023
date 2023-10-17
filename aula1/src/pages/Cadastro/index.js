import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Cadastro() {
    const [cep, setCep] = useState("")
    return (
        <View style={Styles.containerMain}>

            <View style={Styles.containerTopbar}>
                <Text style={Styles.containerTitle}>Cadastro de Usuário</Text>
            </View>

            <View style={Styles.containerCEP}>
                <TextInput 
                    placeholder="Digite seu cep"
                    value={cep}
                    onChangeText={(texto) => setCep(texto)}
                    style={{
                        borderColor:'#000'
                    }}
                />

            </View>
            
            
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
    },
    containerCEP:{
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 10
    }
})