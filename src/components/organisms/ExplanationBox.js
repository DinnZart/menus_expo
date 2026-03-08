import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExplanationBox = ({ description, example }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Objetivo del Ejercicio:</Text>
            <Text style={styles.description}>{description}</Text>
            {example ? (
                <View style={styles.exampleContainer}>
                    <Text style={styles.exampleHeader}>Ejemplo:</Text>
                    <Text style={styles.exampleText}>{example}</Text>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff3cd',
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 5,
        borderLeftColor: '#ffc107',
        marginVertical: 15,
        width: '100%',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#856404',
    },
    description: {
        fontSize: 14,
        color: '#856404',
        marginBottom: 10,
    },
    exampleContainer: {
        backgroundColor: '#ffeeba',
        padding: 10,
        borderRadius: 5,
    },
    exampleHeader: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#856404',
        marginBottom: 3,
    },
    exampleText: {
        fontFamily: 'monospace',
        fontSize: 13,
        color: '#856404',
    },
});

export default ExplanationBox;
