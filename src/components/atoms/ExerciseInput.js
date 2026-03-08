import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const ExerciseInput = ({ label, value, onChangeText, placeholder, error }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType="numeric"
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    inputError: {
        borderColor: '#ff3333',
        borderWidth: 2,
    },
    errorText: {
        color: '#ff3333',
        fontSize: 12,
        marginTop: 5,
    },
});

export default ExerciseInput;
