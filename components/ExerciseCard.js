import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const ExerciseCard = ({ item, selectedExercise, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedExercise, item)}
            onPress={() => handleCardPress(item)}
        >
            <View style={styles.contentContainer}>
                <TouchableOpacity
                    style={styles.logoContainer(selectedExercise, item)}
                >
                    <Image
                        source={{ uri: item.gifUrl }}
                        resizeMode='contain'
                        style={styles.logoImage}
                    />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.exerciseName} numberOfLines={1}>
                        {item.name.toUpperCase()}
                    </Text>
                    <Text
                        style={styles.exerciseBodyPart(selectedExercise, item)}
                    >
                        {item.bodyPart}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: (selectedExercise, item) => ({
        width: '100%',
        paddingLeft: 20,
        backgroundColor: selectedExercise === item.id ? 'gray' : 'white',
        borderRadius: 16,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: 'gray'
    }),
    logoContainer: (selectedExercise, item) => ({
        width: 90,
        height: 90,
        backgroundColor: selectedExercise === item.id ? 'gray' : 'gray',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    contentContainer: {
        flexDirection: 'row',
        alignitems: 'center'
    },

    logoImage: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    exerciseName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    exerciseBodyPart: (selectedExercise, item) => ({
        fontSize: 16,
        color: selectedExercise === item.id ? 'white' : 'gray',
        marginLeft: 10,
        marginTop: 10
    })
});

export default ExerciseCard;
