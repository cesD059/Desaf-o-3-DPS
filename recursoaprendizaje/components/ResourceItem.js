import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ResourceItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View style={styles.resourceItem}>
      <Image source={{ uri: item.Imagen }} style={styles.resourceImage} />
      <View style={styles.resourceTextContainer}>
        <Text style={styles.resourceTitle}>{item.Titulo}</Text>
        <Text style={styles.resourceDescription}>{item.Descripcion}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
   resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  resourceImage: {
    width: 100,
    height: 150,
    marginRight: 8,
    borderRadius: 10,
  },
  resourceTextContainer: {
    flex: 5,
  },
  resourceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resourceDescription: {
    fontSize: 15,
  },
});

export default ResourceItem;
