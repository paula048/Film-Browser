import { useNavigation } from "@react-navigation/native";
//import { Button, Text, View, FlatList, StyleSheet, Image, TouchableOpacity,Dimensions } from "react-native";
import useFavorites from "../useFavorites";
import useFilms from "../useFilms";

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Text, View, FlatList, StyleSheet, Image, TouchableOpacity,Dimensions } from "react-native";



const KEY_userEmail = "userEmail";
const KEY_userPassword = "userPassword";

const actualUserEmail = "0!"


    const getData = async (key) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          console.log("ASYNC GET, value exist: "+value);
          actualUserEmail = value;
        }
      } catch (e) {
        console.log("ASYNC GET: "+key+"    ERROR: "+e);
      }
    };



export default function FavoriteScreen(){

    const navigation = useNavigation();

//    / Use aliases for destructured variables
      const { error: favoritesError, loading: favoritesLoading, jsonResponse: favoritesData } = useFavorites();
      const { error: filmsError, loading: filmsLoading, jsonResponse: filmsData } = useFilms();



    console.log("SEXY ---- ulub"+ favoritesData);
    console.log("SEXY ---- films"+ filmsData);
    getData(KEY_userEmail);









    const ProductDetailsView = (item) => {
        console.log("IT: function go to Product Detail View"+ item.id);
        navigation.navigate("Film", { selectedItem: item, myID: item.id });
    };


    const ResultData = () => {
        if (jsonResponse) {
          return (
            <FlatList
          data={jsonResponse}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
          );
        } else if (!error && loading) {
          return <Text>Pobieranie danych...</Text>;
        } else {
          return <Text>Wystąpił błąd podczas pobierania danych</Text>;
        }
    };


//    const renderItem = ({ item }) => (
//        <TouchableOpacity style={styles.itemContainer} onPress={() => ProductDetailsView(item)}>
//          <Image source={{ uri: item.image }} style={styles.image} />
//          <Text>{item.year}</Text>
//          <Text style={styles.brand} numberOfLines={2} ellipsizeMode="tail">{item.title.substring(0, 40)}</Text>
//          <Text>{item.director}</Text>
//        </TouchableOpacity>
//    );
//
//

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.itemContainer} onPress={() => ProductDetailsView(item)}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text>{item.year}</Text>
        <Text style={styles.brand} numberOfLines={2} ellipsizeMode="tail">
          {item.title ? item.title.substring(0, 40) : "No Title Available"}
        </Text>
        <Text>{item.director}</Text>
      </TouchableOpacity>
    );






    const getAllFavorites = () => {

          console.log("get All favorites");

    };




    return(
        <View>
            <Text>Favorite Screen</Text>
        </View>
    );





}



    const styles = StyleSheet.create({
      listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
      },
      itemContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
      },
      image: {
        width: 150,
        height: 200,
        marginBottom: 5,
      },
      brand: {
        fontWeight: 'bold',
        marginBottom: 2,
      },
    });


