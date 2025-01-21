import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetailsScreen = ({ route }) => {
  const selectedItem = route.params?.selectedItem;
  const myID = route.params?.myID;
  console.log("ID  ^^^^^^^^^^^^^^: ",myID);



  return (
    <View style={styles.mainContainer}>
      <ScrollView>
      {selectedItem ? (
        <>
              <View style={styles.imageContainer}>
                <Image source={{ uri: selectedItem.image }} style={styles.image}/>

                <View style={styles.imageDetailsContainer}>
                    <Text style={styles.detailText}>Title: {selectedItem.title}</Text>
                    <Text style={styles.detailText}>Year: {selectedItem.year}</Text>
                    <Text style={styles.detailText}>Director: {selectedItem.director}</Text>
                </View>
              </View>
        </>
      ) : (
        <Text style={styles.detailText}>No product details available</Text>
      )}

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>


      </View>
      </ScrollView>

      <Button title="Add"/>


        </View>
  );

};



const styles = StyleSheet.create({

  image: {
    width: 300,
    height: 500,
    resizeMode: 'contain'
  },
  mainContainer: {
    marginBottom: 40
  },
  detailText:{
  fontWeight: 'bold',
  fontSize: 20
  },
  imageContainer: {
    alignItems: 'center',
    // justifyContent: 'center'
  },
  detailsContainer: {

  },
  brand: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

export default ProductDetailsScreen;
