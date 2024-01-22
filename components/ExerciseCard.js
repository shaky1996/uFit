import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const ExerciseCard = ({ item, selectedExercise, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedExercise, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity
                style={styles.logoContainer(selectedExercise, item)}
            >
                <Image 
                    source={{uri: item.gifUrl}}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: (selectedExercise, item) => ({
        width: 250,
        padding: 24,
        backgroundColor:
            selectedExercise === item.id ? 'white' : '#FFF',
        borderRadius: 16,
        justifyContent: 'space-between'
    }),
    logoContainer: (selectedExercise, item) => ({
        width: 50,
        height: 50,
        backgroundColor:
            selectedExercise === item.id ? '#FFF' : 'white',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    })
});

export default ExerciseCard;
