import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, Image, View } from 'react-native';

const TemplateModal = ({ visible, closeModal, routine }) => {
  const renderExercises = () => {
    return routine.exercises.map((exercise) => (
      <View key={exercise.id} style={{ marginBottom: 20 }}>
        <Text>{`Exercise: ${exercise.name}`}</Text>
        <Image style={{ width: '100%', height: 100 }} source={{ uri: exercise.image }} />
        <Text>{`Sets: ${exercise.sets}`}</Text>
      </View>
    ));
  };

  return (
    <Modal visible={visible} onRequestClose={closeModal} animationType="slide">
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
          Routine Name: {routine.name}
        </Text>
        {renderExercises()}
        <TouchableOpacity onPress={closeModal}>
          <Text style={{ fontSize: 18, color: 'blue', textAlign: 'center', marginVertical: 20 }}>
            Close Modal
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

export default TemplateModal;
