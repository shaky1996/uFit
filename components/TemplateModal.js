import React, { useState, useEffect } from 'react';
import {
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    View,
    StyleSheet
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const TemplateModal = ({ visible, closeModal, routine }) => {
    const [checkboxState, setCheckboxState] = useState({});

    useEffect(() => {
        // Reset checkbox state when the modal is closed
        if (!visible) {
            setCheckboxState({});
        }
    }, [visible]);

    const toggleCheckbox = (exerciseId) => {
        setCheckboxState((prevState) => ({
            ...prevState,
            [exerciseId]: !prevState[exerciseId]
        }));
    };

    const renderExercises = () => {
        return routine.exercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseContainer}>
                <Image
                    style={styles.modalImage}
                    source={{ uri: exercise.image }}
                />
                <View style={styles.exerciseDetails}>
                    <Text style={styles.modalExerciseName}>
                        {exercise.name}
                    </Text>
                    <Text
                        style={styles.modalSets}
                    >{`Sets: x${exercise.sets}`}</Text>
                    <Text
                        style={styles.modalSets}
                    >{`Reps: x${exercise.reps}`}</Text>
                </View>
                <TouchableOpacity
                    style={[
                        styles.checkboxIcon,
                        checkboxState[exercise.id] && styles.greenCheckbox
                    ]}
                    onPress={() => toggleCheckbox(exercise.id)}
                >
                    <FontAwesome6
                        name={
                            checkboxState[exercise.id]
                                ? 'square-check'
                                : 'square'
                        }
                        size={45}
                        color={checkboxState[exercise.id] ? '#daff6a' : 'gray'}
                    />
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <Modal
            style={styles.modal}
            visible={visible}
            onRequestClose={closeModal}
            animationType='slide'
        >
            <View style={styles.overlay} />
            <ScrollView contentContainerStyle={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{routine.name}</Text>
                    {renderExercises()}
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={closeModal}
                    >
                        <FontAwesome6
                            name='circle-xmark'
                            size={32}
                            color='white'
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black'
    },
    modalContent: {
        height: '95%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black'
    },
    modalTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: 'white'
    },
    exerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    modalImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 10
    },
    exerciseDetails: {
        flex: 1
    },
    modalExerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#daff6a'
    },
    modalSets: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10
    },
    checkboxIcon: {
        paddingRight: 10,
        paddingTop: 10
    },

    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    modal: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TemplateModal;
