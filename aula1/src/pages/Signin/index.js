import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { FIREBASE_AUTH } from "../../services/firebaseConfig";

import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
}

// Função de login
const signIn = async () => {
    setLoading(true)
    try {
        const response = await signInWithEmailAndPassword (auth, email, password)
        console.log(response)
        alert("Verifique seu e-mail!")
    } catch(error) {
        console.log(error)
        alert("Falha no registro: " + error.message)
    } finally {
        setLoading(false)
    }
}

// Função de logout
const signUp = async () => {
    setLoading(true)
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
        alert("Verifique seu e-mail!")
    } catch (error) {
        console.log(error)
        alert("Falha no registro: " + error.message)
    } finally {
        setLoading(false)
    }
}

export default function Signin() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder="Digite um e-mail..." 
                    style={styles.input} 
                    value={email}
                    autoCapitalize="none"
                    onChangeText={(text) = setEmail(text)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder="Sua senha" 
                    style={styles.input}
                    value={password}
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <Button title="Login" onPress={() => signIn()} />
                )}

                <TouchableOpacity
                onPress={() => Signin()}
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 28,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 12
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 6,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#1a1a1a'
    }
})