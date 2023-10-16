import { createNativeStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from '../pages/Welcome'
import { Signin } from '../pages/Signin'

const Stack =  createNativeStackNavigator;

export default function Routes() {
    return (
        <>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
            />
        </>
    )
}
