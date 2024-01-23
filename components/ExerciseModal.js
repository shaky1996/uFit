import React from 'react';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const ExerciseModal = ({ visible, closeModal, gifUrl, exerciseName, instructions }) => {
    const formattedInstructions = instructions.map((instruction, index) => (
        <Text key={index} style={styles.instructionsText}>
         <Text style={styles.lineNumber}>{`${index + 1}.`}</Text> {instruction}
      {"\n"} {/* Add two line breaks */}
        </Text>
      ));
  return (
    <Modal visible={visible} transparent animationType='slide'>
        
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.overlay} onPress={closeModal} />
        <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <FontAwesome6 name="circle-xmark" size={24} color="black" />
          </TouchableOpacity>
        <Text style={styles.modalExerciseName}>{exerciseName.toUpperCase()}</Text>
          <Image source={{ uri: gifUrl }} style={styles.modalImage} resizeMode='contain' />
         {formattedInstructions && (
          <View style={styles.instructions}>{formattedInstructions}</View>
        )}

          {/* <Text style={styles.instructions}>{instructions}</Text> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    height: '80%', 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2
  },
  modalImage: {
    width: 300,
    height: 200,
    marginTop: 10
  },
  modalExerciseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
  },
  instructions: {
    padding: 20,
  },
  instructionsText: {
    fontSize: 15
  },
  lineNumber: {
    fontWeight: 'bold',
    color: 'gray'
  },
  scrollContainer: {
    maxHeight: '70%',
  }
});

export default ExerciseModal;
