import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import ElectronicsStoreScreen from '../screens/ElectronicsStoreScreen';
import MathExercisesStack from './MathExercisesStack';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { state, descriptors, navigation } = props;

    return (
        <DrawerContentScrollView {...props} style={styles.drawerBackground}>
            <View style={styles.menuContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.drawerLabel !== undefined
                            ? options.drawerLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    return (
                        <View key={route.key} style={[styles.drawerItemWrapper, isFocused && styles.activeDrawerItemWrapper]}>
                            <DrawerItem
                                label={label}
                                focused={isFocused}
                                onPress={() => navigation.navigate(route.name)}
                                activeTintColor="#ffffff"
                                inactiveTintColor="#aaaaaa"
                                activeBackgroundColor="transparent"
                                inactiveBackgroundColor="transparent"
                                style={styles.drawerItem}
                                labelStyle={styles.drawerLabel}
                            />
                            {isFocused && <View style={styles.activeMarker} />}
                        </View>
                    );
                })}
            </View>
        </DrawerContentScrollView>
    );
}

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
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

const styles = StyleSheet.create({
    drawerBackground: {
        backgroundColor: '#1c1c1e', // Color de fondo oscuro para el menú
    },
    menuContainer: {
        paddingTop: 10,
    },
    drawerItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
    activeDrawerItemWrapper: {
        backgroundColor: '#2c2c2e', // Resalte claro sobre el fondo oscuro
    },
    drawerItem: {
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 0,
    },
    drawerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeMarker: {
        width: 6,
        height: '60%',
        backgroundColor: '#a07bf1', // Marcador de color (tono morado que combina con el header)
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        position: 'absolute',
        right: 0,
    }
});
