import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled ? styles.buttonDisabled : null]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5411c0ff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
    buttonDisabled: {
        backgroundColor: '#ffb399',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PrimaryButton;
