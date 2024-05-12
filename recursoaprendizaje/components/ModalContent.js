import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';

const ModalContent = ({ selectedResource, onCloseModal, onLinkPress }) => (
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.modalTitle}>{selectedResource ? selectedResource.Titulo : ''}</Text>
        <Text style={styles.modalType}>Tipo: {selectedResource.Tipo}</Text>
        <Text style={styles.modalDescription}>{selectedResource ? selectedResource.Descripcion : ''}</Text>
        {selectedResource && (
          <>
            <Text>Enlace: <TouchableOpacity onPress={onLinkPress}><Text style={styles.modalLink}>{selectedResource.Enlace}</Text></TouchableOpacity></Text>
          </>
        )}
        <Button title="Cerrar Opción" onPress={onCloseModal} />
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#DEF1F9',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%', // Limitar la altura del modal
  },
  scrollContainer: {
    flexGrow: 1,
  },
  modalTitle: {
    fontSize: 30, // Reducir el tamaño del título
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 18, // Reducir el tamaño de la descripción
    marginBottom: 10,
  },
  modalType: {
    fontSize: 18, // Reducir el tamaño del tipo
    marginBottom: 5,
  },
  modalLink: {
    fontSize: 16, // Reducir el tamaño del enlace
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ModalContent;
