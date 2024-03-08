import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import ExerciseModal from './ExerciseModal';

// each separate card in exercise library
//also added a modal to show up once user clicks with detailed info about particular exercise

const ExerciseCard = ({ item, selectedExercise }) => { 
    const [modalVisible, setModalVisible] = useState(false); //modal logic

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <TouchableOpacity
            style={styles.container(selectedExercise, item)}
            onPress={() => openModal(item)}
        >
            <View style={styles.contentContainer}>
                <TouchableOpacity
                    style={styles.logoContainer(selectedExercise, item)}
                    onPress={openModal}
                >
                    <Image
                        source={
                            item.gifUrl
                        }
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
            <ExerciseModal
                visible={modalVisible}
                closeModal={closeModal}
                gifUrl={item.gifUrl}
                exerciseName={item.name}
                bodyPart={item.bodyPart}
                instructions={item.instructions}
            />
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
