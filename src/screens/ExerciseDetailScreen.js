import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExerciseInput from '../components/atoms/ExerciseInput';
import PrimaryButton from '../components/atoms/PrimaryButton';
import ExplanationBox from '../components/organisms/ExplanationBox';
import { exercisesData } from '../utils/exercisesLogic';

export default function ExerciseDetailScreen({ route }) {
    const { exerciseId } = route.params;
    const exercise = exercisesData[exerciseId];

    // State to hold input values dynamically based on required inputs
    const [formValues, setFormValues] = useState({});
    const [result, setResult] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    if (!exercise) {
        return (
            <View style={styles.container}>
                <Text>Ejercicio no encontrado.</Text>
            </View>
        );
    }

    const handleInputChange = (key, text) => {
        setFormValues({
            ...formValues,
            [key]: text,
        });
        // Clear error & result when user starts re-typing
        setErrorMsg(null);
        setResult(null);
    };

    const handleCalculate = () => {
        // 1. Validation phase
        const validationError = exercise.validate(formValues);
        if (validationError) {
            setErrorMsg(validationError);
            setResult(null);
            return;
        }

        // 2. Calculation phase
        try {
            const calcResult = exercise.calculate(formValues);
            setResult(calcResult);
            setErrorMsg(null);
        } catch (err) {
            setErrorMsg('Ocurrió un error al calcular.');
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>{exercise.title}</Text>

            <ExplanationBox description={exercise.description} example={exercise.example} />

            <View style={styles.formContainer}>
                {exercise.inputs.map((inputDef) => (
                    <ExerciseInput
                        key={inputDef.key}
                        label={inputDef.label}
                        placeholder={`Ej: ${inputDef.key.toUpperCase()} = 3`}
                        value={formValues[inputDef.key] || ''}
                        onChangeText={(text) => handleInputChange(inputDef.key, text)}
                    />
                ))}

                {errorMsg ? <Text style={styles.errorAlert}>{errorMsg}</Text> : null}

                <PrimaryButton title="Calcular Resultado" onPress={handleCalculate} />
            </View>

            {result ? (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>Resultado:</Text>
                    <Text style={styles.resultText}>{result}</Text>
                </View>
            ) : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    formContainer: {
        width: '100%',
        marginVertical: 15,
    },
    errorAlert: {
        color: '#ff3333',
        backgroundColor: '#ffe6e6',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    resultContainer: {
        width: '100%',
        backgroundColor: '#e6ffe6',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4caf50',
        marginTop: 20,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 16,
        color: '#1b5e20',
    },
});
