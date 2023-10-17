import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            <Image
                source={require('../../assets/images/img_kravmaga.jpg')}
                style={{width:'100%'}}
                resizeMode="contain"
            />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Constrole suas atividades e treinos em qualquer lugar</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1
    }
})