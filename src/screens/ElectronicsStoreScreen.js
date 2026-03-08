import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function ElectronicsStoreScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.product}>
                    <Image
                        source={require('../../public/images/audifonos.webp')}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text>Audifonos</Text>
                    <Text>$100</Text>
                    <Button
                        style={styles.button}
                        title="Agregar al carrito"
                        onPress={() => alert('Agregado al carrito')}
                    />
                </View>
                <View style={styles.product}>
                    <Image
                        source={require('../../public/images/airpods.jpg')}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text>Airpods</Text>
                    <Text>$150</Text>
                    <Button
                        style={styles.button}
                        title="Agregar al carrito"
                        onPress={() => alert('Agregado al carrito')}
                    />
                </View>
                <View style={styles.product}>
                    <Image
                        source={require('../../public/images/teclado.jpg')}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text>Teclado</Text>
                    <Text>$70</Text>
                    <Button
                        style={styles.button}
                        title="Agregar al carrito"
                        onPress={() => alert('Agregado al carrito')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    headerBorder: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.25,
        elevation: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    product: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',
    },
});
