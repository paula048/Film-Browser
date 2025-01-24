import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_userFavorite = "userFavorite";



const storeData = async (key, value) => {       // zapisywanie nie pojedynczego obiektu, a całej Listy
  try {
    // Serialize the array into a JSON string
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("ASYNC SET, saving data");
  } catch (e) {
    console.log("ASYNC SET, saving data error: " + e);
  }
};


const getData = async (key) => {                // pobieranie nie pojedynczego obiektu, a całej Listy
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("ASYNC GET, retrieving data error: " + e);
  }
};


const handleAdd = () => {
    console.log("Clicked Button ADD");

}

const ProductDetailsScreen = ({ route }) => {
  const selectedItem = route.params?.selectedItem;
  const myID = route.params?.myID;
  console.log("ID  ^^^^^^^^^^^^^^: ",myID);

  console.log("Director  ^^^^^^^^^^^^^^: ", selectedItem?.id);

  const favorTab = [selectedItem?.id];
  storeData(KEY_userFavorite, favorTab);


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

      <Button title="Add" onPress={handleAdd}/>


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
