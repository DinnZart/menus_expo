import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ElectronicsStoreScreen from '../screens/ElectronicsStoreScreen';
import MathExercisesStack from './MathExercisesStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="ElectronicsStore"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#3a127aff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    paddingLeft: '10%',
                    fontWeight: 'bold',
                },
            }}
        >
            <Drawer.Screen
                name="ElectronicsStore"
                component={ElectronicsStoreScreen}
                options={{ title: 'Tienda de Electrónicos' }}
            />
            <Drawer.Screen
                name="MathExercises"
                component={MathExercisesStack}
                options={{ title: 'Ejercicios Matemáticos' }}
            />
        </Drawer.Navigator>
    );
}
