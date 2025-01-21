import React, { useState, useEffect } from 'react';
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View, FlatList, StyleSheet, Image, TouchableOpacity,Dimensions } from "react-native";

import useFilms from "../useFilms";
import ProductDetailsScreen from "./ProductDetailsScreen";




const numColumns = 2
const KEY_userEmail = "userEmail";
const KEY_userPassword = "userPassword";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("ASYNC GET, value exist: "+value);
    }
  } catch (e) {
    console.log("ASYNC GET: "+key+"    ERROR: "+e);
  }
};




export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);


  const onPress = (item) => {
    setCount(prevCount => prevCount + 1);
    navigation.navigate("Browser", { selectedItem: item });
  };

  const ProductDetailsView = (item) => {
    console.log("IT: LOVEEEEEEEEEEEEEEEEEE "+ item.id);
    navigation.navigate("Film", { selectedItem: item, myID: item.id });
  };
  

   const { error, loading, jsonResponse } = useFilms();


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



  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => ProductDetailsView(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.year}</Text>
      <Text style={styles.brand} numberOfLines={2} ellipsizeMode="tail">{item.title.substring(0, 40)}</Text>
      <Text>{item.director}</Text>
    </TouchableOpacity>
  );



  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="Film" component={ProductDetailsScreen} />
      </Stack.Navigator>

      <ResultData />
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
