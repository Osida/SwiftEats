import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import {Home} from "./screens";

export default function App() {
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator>
                    <Stack.Screen name={'Home'} component={Home}/>
                </Stack.Navigator>
            </TailwindProvider>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();