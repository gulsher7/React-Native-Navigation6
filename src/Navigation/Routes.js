import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainStack from './MainStack';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown: false}}
            >
                {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes