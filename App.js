import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
