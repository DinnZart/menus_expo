import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MathExercisesGridScreen from '../screens/MathExercisesGridScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';

const Stack = createNativeStackNavigator();

export default function MathExercisesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#5411c0ff' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="MathExercisesGrid"
                component={MathExercisesGridScreen}
                options={{ headerShown: false }} // The Drawer already provides a header for this root
            />
            <Stack.Screen
                name="ExerciseDetail"
                component={ExerciseDetailScreen}
                options={({ route }) => ({ title: `Ejercicio ${route.params.exerciseId}` })}
            />
        </Stack.Navigator>
    );
}
