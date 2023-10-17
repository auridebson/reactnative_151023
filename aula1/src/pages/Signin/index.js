import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Signin() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite um e-mail" 
                    style={styles.input} 
                />
            </Animatable.View>
            
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder="Sua senha" 
                    style={styles.input} 
                />
            </Animatable.View>



        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})