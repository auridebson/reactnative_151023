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
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})