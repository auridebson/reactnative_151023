import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome  from '../pages/Welcome'
import Signin  from '../pages/Signin'
import Cadastro from '../pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
        </Stack.Navigator>
    )
}
