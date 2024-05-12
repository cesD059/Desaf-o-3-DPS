import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Modal,Text } from 'react-native';
import ResourceItem from '../components/ResourceItem';
import ModalContent from '../components/ModalContent';

const Recursos = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch('https://663c019817145c4d8c34f2ca.mockapi.io/desafioIII');
      const data = await response.json();
      setResources(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const handleResourcePress = (resource) => {
    setSelectedResource(resource);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleLinkPress = () => {
    if (selectedResource && selectedResource.Enlace) {
      Linking.openURL(selectedResource.Enlace);
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
       <Text style={styles.headerText}>Lista Recursos Aprendizaje</Text>
    </View>
  );

  const renderItemSeparator = () => (
    <View style={styles.separator}></View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#9BC1BC" />
      ) : (
        <View style={styles.scrollContainer}>
          <FlatList
            data={resources}
            renderItem={({ item }) => <ResourceItem item={item} onPress={handleResourcePress} />}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={renderItemSeparator}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContent 
          selectedResource={selectedResource} 
          onCloseModal={handleCloseModal} 
          onLinkPress={handleLinkPress} 
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF1F9',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    overflow: 'auto', 
    maxHeight: '80vh', 
  },
  header: {
    backgroundColor: '#5AB6DC',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'blue',
    marginVertical: 15,
  },
});

export default Recursos;
