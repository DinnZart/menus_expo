import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const ExerciseCard = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.innerCard}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        minWidth: '28%', // allows 3 per row comfortably
        maxWidth: '30%',
        aspectRatio: 1,
    },
    innerCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default ExerciseCard;
