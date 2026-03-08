import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ExerciseCard from '../components/molecules/ExerciseCard';
import { exercisesData, exerciseKeys } from '../utils/exercisesLogic';

export default function MathExercisesGridScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <ExerciseCard
            title={item}
            onPress={() => navigation.navigate('ExerciseDetail', { exerciseId: item })}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={exerciseKeys}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    listContainer: {
        padding: 10,
        justifyContent: 'center',
    },
});
