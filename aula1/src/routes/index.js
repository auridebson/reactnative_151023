// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Welcome } from '../pages/Welcome'
// import { Signin } from '../pages/Signin'

// const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <StackActions.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
            />
        </StackActions.Navigator>
    )
}